import React from "react";
import styled from "styled-components";
import { Text } from "@hackthenorth/north";

import copy from "copy";
import { Chude } from "static/img/";

const KeynoteContainer = styled.div`
  display: flex;
  margin: 50px 0;
  align-items: center;

  ${props => props.theme.mediaQueries.tablet`
      flex-direction: column;
  `}
`;

const Image = styled.img`
  width: 300px;

  ${props => props.theme.mediaQueries.tablet`
      align-self: center;
      margin-bottom: 30px;
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  margin-top: -15px;
  width: 100%;

  ${props => props.theme.mediaQueries.tablet`
    margin-left: 0;
    margin-top: 0;
  `}
`;

const KeynoteName = styled(Text)`
  font-family: ${props => props.theme.globalConstants.fontFamily.text};
  font-size: ${props =>
    props.theme.globalConstants.fontSize.smallMobileHeading}px;
  color: #fff;
  margin: 0;
`;
const KeynoteTitle = styled(Text)`
  font-family: ${props => props.theme.globalConstants.fontFamily.text};
  font-size: ${props => props.theme.globalConstants.fontSize.p2}px;
  color: #fff;
  margin: 5px 0 0 0;
`;

const KeynoteDescription = styled(Text)`
  font-family: ${props => props.theme.globalConstants.fontFamily.text};
  font-size: ${props => props.theme.globalConstants.fontSize.p4}px;
  color: #fff;
  line-height: 1.75;
`;

const KeynoteNote = styled.span`
  display: block;
`;

const Keynote = () => (
  <>
    <Text className="heading" as="h3" variant="sectionHeading">
      {copy.keynote.title}
    </Text>

    <KeynoteContainer>
      <Image src={Chude} alt="Jack Dorsey" />
      <TextWrapper>
        <KeynoteName as="p">{copy.keynote.name}</KeynoteName>
        <KeynoteTitle as="p">{copy.keynote.company}</KeynoteTitle>
        <KeynoteDescription as="p">
          {copy.keynote.description}{" "}
          <KeynoteNote>{copy.keynote.note}</KeynoteNote>
        </KeynoteDescription>
      </TextWrapper>
    </KeynoteContainer>
  </>
);

export default Keynote;
