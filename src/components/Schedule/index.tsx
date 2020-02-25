import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback
} from "react";
import styled from "styled-components";
import debounce from "lodash.debounce";
import { Text } from "@hackthenorth/north";

import copy from "copy";
import { getSchedule } from "./utils/getSchedule";
import {
  ITEM_CONTAINER_HEIGHT,
  ITEM_CONTAINER_HEIGHT_MOBILE,
  useItemContainerHeight
} from "./utils/useItemContainerHeight";

import Spinner from "components/Spinner";
import Filter from "./Filter";
import TopBar from "./TopBar";
import Item, { ScheduleItem } from "./Item";
import ToastManager from "./ToastManager";
import DownloadButton from "./Download";

const START_DAY_OF_EVENT = 5; // htn starts on friday
const NOT_CLICK_SCROLLING = -1;
const TERM_NOT_FOUND = -1;
const NO_ITEM_EXPANDED = null;

/**
 * Function that filters items.
 */
const itemFilterFunction = (searchTerm: string) => (
  item: ScheduleItem
): boolean => {
  const normalizedSearchTerm = searchTerm.toLowerCase();
  const normalizedItemFields = {
    name: item.name.toLowerCase(),
    location: item.location.toLowerCase(),
    type: item.type.toLowerCase(),
    desc: item.desc ? item.desc.toLowerCase() : ""
  };

  return (
    // part of name matches
    normalizedItemFields.name.indexOf(normalizedSearchTerm) !==
      TERM_NOT_FOUND ||
    // part of location matches
    normalizedItemFields.location.indexOf(normalizedSearchTerm) !==
      TERM_NOT_FOUND ||
    // part of type matches
    normalizedItemFields.type.indexOf(normalizedSearchTerm) !==
      TERM_NOT_FOUND ||
    // part of desc matches
    normalizedItemFields.desc.indexOf(normalizedSearchTerm) !== TERM_NOT_FOUND
  );
};

const HeaderContainer = styled.div`
  position: relative;
  margin-bottom: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;

  ${props => props.theme.mediaQueries.tablet`
    margin-bottom: 20px;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    margin-bottom: 10px;

    flex-direction: column;
    align-items: flex-start;
  `}
`;

const HeaderRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    margin-right: 10px;
  }

  ${props => props.theme.mediaQueries.tabletMobile`
    margin-top: 10px;
    width: 100%;

    & > button {
      display: none;
    }
  `}
`;

const Container = styled.div`
  position: relative;

  width: 100%;
  max-height: 90vh;
  overflow: scroll;

  border-radius: 8px;
`;

const DayContainer = styled.div``;

const SpinnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: ${ITEM_CONTAINER_HEIGHT}px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  ${props => props.theme.mediaQueries.tablet`
    height: ${ITEM_CONTAINER_HEIGHT_MOBILE}px;
  `}
`;

const NoItems = styled.div`
  height: ${ITEM_CONTAINER_HEIGHT}px;
  background-color: white;
  color: ${({ theme }) => theme.globalConstants.color.grey};

  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.theme.mediaQueries.tablet`
    height: ${ITEM_CONTAINER_HEIGHT_MOBILE}px;
  `}
`;

const Schedule = () => {
  const [loading, setLoading] = useState(true);
  const [allItems, setAllItems] = useState<ScheduleItem[]>([]);
  const [displayedItems, setDisplayedItems] = useState(allItems);
  const [curDay, setCurDay] = useState(0);
  const [curExpandedItem, setExpandedItem] = useState<ScheduleItem | null>(
    NO_ITEM_EXPANDED
  );
  const [clickScrollTo, setClickScrollTo] = useState(NOT_CLICK_SCROLLING);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerHeight = useItemContainerHeight();

  /**
   * Filters items based on matching keywords. Items are matched if they match the
   * search term partially in their title, description, date, or event type.
   */
  const filterItems = useCallback(
    debounce((searchTerm: string) => {
      const searchResultItems = allItems.filter(itemFilterFunction(searchTerm));

      setDisplayedItems(searchResultItems);
    }, 100),
    [allItems]
  );

  /**
   * Groups items into arrays, according to their day. `itemsByDay` is an array containing
   * subarrays where each subarray corresponds to a specific day of the event.
   */
  const itemsByDay = useMemo(
    () =>
      displayedItems.reduce<ScheduleItem[][]>(
        (prevArray, curItem) => {
          // get the day of the event/item. subtract the start offset of the event (since it starts on Friday)
          // to get the array index (so Friday is index 0, Sat = index 1, etc)
          // (NOTE: for some reason `getDay` starts on sunday, so sunday = 0 and we need to change it to 7 to offset properly)
          const dayOfItem =
            (new Date(curItem.startTime).getDay() || 7) - START_DAY_OF_EVENT;

          // check if there is already a subarray for this day. if not, create one
          const groupExistsAlready = prevArray[dayOfItem] !== undefined;

          if (groupExistsAlready) {
            prevArray[dayOfItem].push(curItem);
            return prevArray;
          } else {
            prevArray.push([curItem]);
            return prevArray;
          }
        },
        [[], [], []]
      ),
    [displayedItems]
  );

  /**
   * Array that contains the number of items for each corresponding index/day.
   */
  const numItemsByDay = useMemo(
    () =>
      itemsByDay.reduce<number[]>((prevArray, curItemArray) => {
        prevArray.push(curItemArray.length);
        return prevArray;
      }, []),
    [itemsByDay]
  );

  /**
   * Tracks the current day as you scroll. If you scroll into/out of a day's items,
   * the listener will adjust `curDay` appropriately.
   */
  const updateCurDay = useCallback(
    debounce(() => {
      const distanceScrolled = containerRef.current
        ? containerRef.current.scrollTop
        : null;

      // do not try to update current day if `clickScrollTo` tells us its not scrolling through user input
      // otherwise, we'll get weird behaviour where the tab jumps back and forth as tab scrolling takes time
      if (distanceScrolled !== null && clickScrollTo === NOT_CLICK_SCROLLING) {
        let prevItemsHeight = 0;

        // check if current scroll position falls inside a certain day's range and updates `curDay` if so
        for (let day = 0; day < numItemsByDay.length; day++) {
          const itemDayEndHeight =
            prevItemsHeight + (numItemsByDay[day] || 1) * containerHeight; // if no items in day, it will display a prompt that takes up the same height as 1 item thus the `|| 1`

          const curDayItemRange = [prevItemsHeight, itemDayEndHeight];

          if (
            curDayItemRange[0] <= distanceScrolled &&
            distanceScrolled < curDayItemRange[1]
          ) {
            // item falls in this day, so adjust tab to this day
            setCurDay(day);
          }

          prevItemsHeight = itemDayEndHeight; // set previous total to include the current day, for the next day's calculations
        }
      } else if (clickScrollTo !== NOT_CLICK_SCROLLING) {
        // we've just scrolled likely by clicking a tab (so not user-initiated). reset to not click scrolling, since
        // now we're scrolling normally through user input
        setClickScrollTo(NOT_CLICK_SCROLLING);
      }
    }, 100),
    [clickScrollTo, numItemsByDay]
  );

  /**
   * Attaches a scroll event listener to the schedule container on mount.
   * This allows us to toggle the date tab to reflect the user's scroll position.
   */
  useEffect(() => {
    if (containerRef.current) {
      const ref = containerRef.current;
      ref.addEventListener("scroll", updateCurDay);
      return () => ref.removeEventListener("scroll", updateCurDay);
    }

    return () => {};
  }, [updateCurDay]);

  /**
   * Fetch the schedule on mount, and if successful, sets loading to false to display the schedule.
   *
   * Async useEffects are fucky because declaring the function in the useEffect as async
   * won't actually run the function synchronously, so you have to define a self calling function.
   */
  useEffect(() => {
    const getSched = async () => {
      const fetchedItems = await getSchedule();
      console.log(fetchedItems);

      setLoading(false);
      setAllItems(fetchedItems);
      setDisplayedItems(fetchedItems);
    };

    getSched();
  }, []);

  /**
   * Allows scrolling to specific day.
   */
  const scrollToDay = useCallback((day: number) => {
    if (containerRef.current) {
      setClickScrollTo(day);
      setCurDay(day);
    }
  }, []);

  /**
   * Scroll after a click event has changed the day. This is not called synchronously within
   * `scrollToDay` because React batches state updates and if we call it right after
   * `setClickScrollTo`, `clickScrollTo` may not have updated and we risk activating
   * the scroll listener and updating the day prematurely.
   * (Essentially, this acts like a callback for the setState hook)
   */
  useEffect(() => {
    if (clickScrollTo !== NOT_CLICK_SCROLLING) {
      const distanceOfDayFromTop = numItemsByDay.reduce<number>(
        (prevDistance, curNumItems, i) =>
          i < clickScrollTo
            ? prevDistance + curNumItems * containerHeight
            : prevDistance,
        0
      );
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: 0,
          top: distanceOfDayFromTop + 1,
          behavior: "smooth"
        });
      }
    }
  }, [clickScrollTo, containerHeight, numItemsByDay]);

  return (
    <>
      <HeaderContainer>
        <Text className="heading" as="h3" variant="sectionHeading">
          {copy.scheduleSection.title}
        </Text>
        <HeaderRightContainer>
          <DownloadButton />
          <Filter filterItems={filterItems} />
        </HeaderRightContainer>
      </HeaderContainer>
      <Container ref={containerRef}>
        <TopBar
          tabs={copy.scheduleSection.tabs}
          curTab={curDay}
          onClick={scrollToDay}
        />

        {loading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          itemsByDay.map((dayItems, i) => (
            <DayContainer
              className={`Day--Container${i}`}
              key={`Day--Container${i}`}
            >
              {dayItems.length > 0 ? (
                dayItems.map((item, i) => (
                  <Item
                    key={`${item.startTime}--${item.name}${i}`}
                    {...item}
                    onClick={() => setExpandedItem(item)}
                  />
                ))
              ) : (
                <NoItems>
                  <Text variant="sectionText">
                    {copy.scheduleSection.noItems(i)}
                  </Text>
                </NoItems>
              )}
            </DayContainer>
          ))
        )}
      </Container>
      <ToastManager
        displayedItem={curExpandedItem}
        closeToast={() => setExpandedItem(NO_ITEM_EXPANDED)}
      />
    </>
  );
};

export default Schedule;
