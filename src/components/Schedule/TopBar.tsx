import React from "react";
import styled from "styled-components";
import { Text } from "@hackthenorth/north";

export interface TabInfo {
  title: string;
  subtitle: string;
}

export interface TopBarProps {
  tabs: TabInfo[];
  curTab: number; // index of current tab
  onClick: (clickedTab: number) => void;
}

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;

  background-color: white;
`;

const TabsContainer = styled.div<{ numTabs: number }>`
  display: flex;
  justify-content: space-between;

  position: relative;

  border-bottom: 1px solid ${({ theme }) => theme.globalConstants.color.grey};

  & > div {
    width: ${({ numTabs }) => 100 / numTabs}%;
  }
`;

const Tab = styled.div<{ isCurTab: boolean }>`
  text-align: center;

  & > p {
    margin: 15px auto;
    font-weight: ${({ isCurTab }) => (isCurTab ? "bold !important" : "normal")};
    ${({ isCurTab, theme }) =>
      isCurTab && `color: ${theme.globalConstants.color.blueM} !important`};
  }
`;

// the bottom border that highlights the current tab
const TabHighlight = styled.span<{ numTabs: number; curTab: number }>`
  position: absolute;
  width: ${({ numTabs }) => 100 / numTabs}%;
  height: 3px;
  background-color: ${({ theme }) => theme.globalConstants.color.blueM};
  bottom: 0;

  transition: margin-left 500ms;
  margin-left: ${({ numTabs, curTab }) => (100 / numTabs) * curTab}%;
`;

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 0;

  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.globalConstants.color.grey};

  & > span.title {
    font-weight: bold;
    margin-right: 10px;
  }
`;

const TopBar: React.FC<TopBarProps> = ({ tabs, curTab, onClick }) => (
  <Container>
    <TabsContainer numTabs={tabs.length}>
      {tabs.map((tabInfo, i) => (
        <Tab
          key={tabInfo.title}
          isCurTab={i === curTab}
          onClick={() => onClick(i)}
        >
          <Text variant="sectionText">{tabInfo.title}</Text>
        </Tab>
      ))}
      <TabHighlight numTabs={tabs.length} curTab={curTab} />
    </TabsContainer>

    <TitleContainer>
      <Text variant="sectionText" as="span" className="title">
        {tabs[curTab].title}
      </Text>
      <Text variant="sectionText" as="span">
        {tabs[curTab].subtitle}
      </Text>
    </TitleContainer>
  </Container>
);

export default TopBar;
