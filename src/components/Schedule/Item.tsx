import React, { useMemo } from "react";
import styled from "styled-components";
import { Text, UnstyledButton } from "@hackthenorth/north";

import copy from "copy";
import { getTimeFromDate } from "./utils/time";
import {
  ITEM_CONTAINER_HEIGHT,
  ITEM_CONTAINER_HEIGHT_MOBILE
} from "./utils/useItemContainerHeight";

export interface ScheduleItem {
  startTime: number;
  endTime: number;
  type: "event" | "food" | "activity" | "workshop";
  name: string;
  location: string;
  desc: string;
}

export interface ItemProps extends ScheduleItem {
  onClick: () => void;
}

const itemInfo = copy.scheduleSection.itemTypeInfo;
const statusInfo = copy.scheduleSection.statusInfo;
const ONE_HOUR_MS = 3600000;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${ITEM_CONTAINER_HEIGHT}px;
  overflow: hidden;

  cursor: pointer;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.globalConstants.color.grey};

  &:hover,
  &:focus,
  &:focus-within {
    background-color: ${({ theme }) => theme.globalConstants.color.greyL};
  }

  ${props => props.theme.mediaQueries.tablet`
    height: ${ITEM_CONTAINER_HEIGHT_MOBILE}px;
  `}

  & > button {
    position: relative;
    width: 100%;
    height: inherit;

    & > div {
      display: flex;
      justify-content: flex-start;
      text-align: left;

      position: relative;
      width: 100%;
      height: inherit;

      & > * {
        box-sizing: border-box;
        position: relative;
        height: inherit;

        & > * {
          margin: 0 0 10px 0;
        }
      }
    }
  }
`;

const ExtraInfoContainer = styled.div<{ color: string }>`
  width: 160px;
  padding: 20px;
  margin-right: 20px;

  border-left: 10px solid
    ${({ theme, color }) => theme.globalConstants.color[color]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > .item-type {
    color: ${({ theme, color }) =>
      theme.globalConstants.color[color]} !important;
  }

  ${props => props.theme.mediaQueries.tablet`
    padding: 15px;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 125px;
    margin-right: 0;
  `}
`;

const MainContainer = styled.div`
  width: 650px;
  padding: 20px 0;

  ${props => props.theme.mediaQueries.tablet`
    width: 350px;
    padding: 15px 0;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 140px;
    margin-right: 0;
  `}
`;

const StatusContainer = styled.div<{ color: string }>`
  width: 130px;
  margin-left: auto;
  padding: 20px 20px 20px 0;

  & > .status {
    color: ${({ theme, color }) =>
      theme.globalConstants.color[color]} !important;
  }

  ${props => props.theme.mediaQueries.tablet`
    padding: 15px 15px 15px 0;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    width: 85px;
  `}
`;

const Item: React.FC<ItemProps> = ({
  startTime,
  endTime,
  type,
  name,
  location,
  onClick
}) => {
  const status = useMemo(() => {
    if (startTime <= Date.now() && Date.now() <= endTime) {
      return "ongoing";
    } else if (
      startTime > Date.now() &&
      startTime - ONE_HOUR_MS <= Date.now()
    ) {
      return "soon";
    } else if (endTime < Date.now()) {
      return "ended";
    }

    return null;
  }, [endTime, startTime]);

  return (
    <Container>
      <UnstyledButton onClick={onClick}>
        <div>
          <ExtraInfoContainer color={itemInfo[type].color}>
            <Text variant="sectionTextMedium">
              {getTimeFromDate(startTime)} - {getTimeFromDate(endTime)}
            </Text>
            <Text variant="sectionTextMedium" className="item-type">
              {itemInfo[type].label}
            </Text>
          </ExtraInfoContainer>
          <MainContainer>
            <Text variant="scheduleItemTitle">{name}</Text>
            <Text variant="scheduleItemLoc">{location}</Text>
          </MainContainer>
          {status && (
            <StatusContainer color={statusInfo[status].color}>
              <Text variant="sectionTextMedium" className="status">
                {statusInfo[status].label}
              </Text>
            </StatusContainer>
          )}
        </div>
      </UnstyledButton>
    </Container>
  );
};

export default Item;
