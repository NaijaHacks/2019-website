/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import { Text } from "@hackthenorth/north";

import useWindowWidth from "hooks/useWindowWidth";
import SectionWrapper from "components/SectionWrapper";

import Column from "./Column";

const FAQWrapper = styled(SectionWrapper)`
  padding-top: 26px;
  color: ${({ theme }) => theme.globalConstants.color.textDark};
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

const FAQ: React.FC<any> = ({ listItem, openAll }) => {
  const left = listItem.body.filter((_question: any, i: number) => !(i % 2));
  const right = listItem.body.filter((_question: any, i: number) => i % 2);
  const isMobile = useWindowWidth() <= 768;
  return (
    <FAQWrapper id="faq">
      <Text as="h1" variant="sectionHeading">
        {listItem.title}
      </Text>
      <Body>
        {isMobile ? (
          <Column questions={listItem.body} openAll={openAll} />
        ) : (
          <>
            <Column questions={left} openAll={openAll} />
            <Column questions={right} openAll={openAll} />
          </>
        )}
      </Body>
    </FAQWrapper>
  );
};

export default FAQ;
