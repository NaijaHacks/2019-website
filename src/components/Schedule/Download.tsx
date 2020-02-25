import React from "react";
import styled from "styled-components";

import { fetchSchedule } from "./utils/fetchSchedule";
import { saveFile } from "./utils/saveFile";

const CALENDAR_STATIC_ASSET_FILE_NAME = "event-schedule.ics";
const CALENDAR_SAVE_FILE_NAME = "NaijaHacks 2019 Calendar.ics";

// gets schedule from .ics file in static assets and saves it to disk
const saveScheduleFromStatic = () => {
  try {
    saveFile(CALENDAR_STATIC_ASSET_FILE_NAME, CALENDAR_SAVE_FILE_NAME);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    throw e;
  }
};

// gets schedule from endpoint and saves it to disk
const saveScheduleFromAPI = async () => {
  try {
    // fetch the schedule, convert it to ics, and make it into a blob
    const cal = await fetchSchedule();
    const blob = new Blob([cal], { type: "text/calendar;charset=utf-8" });

    // create a blobURI pointing to our Blob
    const saveURL = URL.createObjectURL(blob);
    saveFile(saveURL, CALENDAR_SAVE_FILE_NAME);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    saveScheduleFromStatic(); // fallback
    throw e;
  }
};

const Button = styled.button`
  font-family: ${props => props.theme.globalConstants.fontFamily.text};
  font-size: 14px;

  border: 3px solid ${props => props.theme.globalConstants.color.action};
  border-radius: 8px;
  padding: 15px 20px;
  background-color: white;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.globalConstants.color.greyL};
  }

  ${props => props.theme.mediaQueries.medium`
    font-size: 12px;
    padding: 10px 15px;
  `}
`;

const DownloadButton = () => (
  <Button onClick={() => saveScheduleFromAPI()}>Download</Button>
);

export default DownloadButton;
