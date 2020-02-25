import React from "react";
import styled from "styled-components";
import { UnstyledButton, Text } from "@hackthenorth/north";

import copy from "copy";
import { getTimeFromDate } from "./utils/time";
import { ScheduleItem } from "./Item";

export interface ToastManagerProps {
  displayedItem: ScheduleItem | null;
  closeToast: () => void;
}

const itemInfo = copy.scheduleSection.itemTypeInfo;

const dayToString = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const Container = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: ${({ show }) => (show ? 1000000 : -1)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  z-index: 2;

  background-color: rgba(0, 0, 0, 0.7);
`;

const ToastCard = styled.div`
  position: relative;
  max-width: 500px;
  padding: 35px 45px;

  border-radius: 8px;
  background-color: white;

  z-index: 3;

  ${props => props.theme.mediaQueries.tabletMobile`
    max-width: 250px;
    padding: 30px 35px;
  `}
`;

const BoldText = styled.span`
  font-weight: bold !important;
`;

const DescText = styled(Text)`
  margin: 15px 0 0 0 !important;
`;

const Separator = styled.span`
  margin: 0 10px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  z-index: 2;
  top: -60px;
  right: 0px;
  display: inline-block;

  &:focus {
    opacity: 0.8;
  }

  img {
    width: 35px;
    height: 35px;
  }
`;

const ToastManager: React.FC<ToastManagerProps> = ({
  displayedItem,
  closeToast
}) => (
  <Container show={displayedItem !== null}>
    <Background onClick={closeToast} />
    {displayedItem && (
      <ToastCard>
        <CloseButton onClick={closeToast}>
          <img
            src={copy.scheduleSection.toastCloseIcon}
            alt="An X, representing a close button"
          />
        </CloseButton>
        <div>
          <Text variant="sectionTextMedium" as="span">
            {dayToString[new Date(displayedItem.startTime).getDay()]}{" "}
            {getTimeFromDate(displayedItem.startTime)} -{" "}
            {getTimeFromDate(displayedItem.endTime)}
          </Text>
          <Separator>|</Separator>
          <Text variant="sectionTextMedium" as="span">
            {itemInfo[displayedItem.type].label}
          </Text>
        </div>

        <Text variant="scheduleItemTitle">
          <BoldText>{displayedItem.name}</BoldText>
        </Text>
        <Text variant="scheduleItemLoc">{displayedItem.location}</Text>

        <DescText variant="sectionText">{displayedItem.desc}</DescText>
      </ToastCard>
    )}
  </Container>
);

export default ToastManager;
