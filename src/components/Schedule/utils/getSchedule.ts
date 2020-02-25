import { ScheduleItem } from "../Item";

// Augment window to include HackerAPI definition
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    HackerAPI: any;
  }
}

const { HackerAPI } = window;
const HTN_EVENT_SLUG = "hackthenorth2019";

const ITEM_TAG_MAP = {
  logistics: 0,
  judging: 0,
  food: 1,
  lightning_challenge: 2, // eslint-disable-line
  activities: 2,
  workshop: 3,
  talk: 4
};

/**
 * Based on the main tag of the item, find the type of the item.
 * This will be displayed on the item as the "category" of the item.
 */
const TAG_TO_TYPE_MAP = {
  [ITEM_TAG_MAP.logistics]: "event",
  [ITEM_TAG_MAP.judging]: "event",
  [ITEM_TAG_MAP.food]: "food",
  [ITEM_TAG_MAP.lightning_challenge]: "event",
  [ITEM_TAG_MAP.activities]: "activity",
  [ITEM_TAG_MAP.workshop]: "workshop",
  [ITEM_TAG_MAP.talk]: "event"
};

const findItemType = (v: number, tag: number) => {
  // take largest tag value (since everything has logistics...) to get the main tag of the item
  if (ITEM_TAG_MAP[tag] !== undefined) {
    v = Math.max(v, ITEM_TAG_MAP[tag]);
  }
  return v;
};

/**
 * Transforms the schedule data into a format that the `Schedule` component will be able to work with.
 * @param items
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const transformSchedule = (items: any) => {
  const finalItems: ScheduleItem[] = [];

  for (let i = 0; i < items.length; i++) {
    const { title, location, startTime, endTime, description, tags } = items[i];

    const itemType = tags.reduce(findItemType, -1);

    if (itemType !== -1) {
      finalItems.push({
        name: title,
        location,
        startTime: startTime.getTime(),
        endTime: endTime.getTime(),
        desc: description,
        type: TAG_TO_TYPE_MAP[itemType] as
          | "event"
          | "food"
          | "activity"
          | "workshop"
      });
    }
  }

  return finalItems;
};

/**
 * Fetch the Event items from HackerAPI and then transform them.
 */
export const getSchedule = () => {
  try {
    return HackerAPI.Event.ScheduleItem.fetchAll({ slug: HTN_EVENT_SLUG }).then(
      transformSchedule
    );
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    return [];
  }
};
