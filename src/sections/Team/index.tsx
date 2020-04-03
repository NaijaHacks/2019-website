import React from "react";
import styled from "styled-components";
import { Text } from "@hackthenorth/north";

import copy from "copy";
import SectionWrapper from "components/SectionWrapper";
import Keynote from "components/Keynote";

const JudgeWrapper = styled(SectionWrapper)`
  color: ${props => props.theme.globalConstants.color.textLight};
`;

const GridWrapper = styled.div`
  margin-top: 50px;
  width: 93vw;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-items: flex-start;
  column-gap: 125px;

  ${props => props.theme.mediaQueries.large`
    grid-template-columns: repeat(auto-fit, 300px);
    column-gap: 75px;
  `}
`;

const PersonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  width: 300px;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  object-position: 50% 0;
`;

const Description = styled.div`
  margin-left: 15px;
`;

const Team = () => (
  <JudgeWrapper id="team">
    <p style={{ color: "black" }}>
      {" "}
      <Text className="heading" as="h3" variant="sectionHeading">
        Team
      </Text>
    </p>

    <GridWrapper>
      <Grid>
        {copy.team.map(({ text, alt, img, title }) => (
          <PersonWrapper key={text}>
            <Image src={img} alt={text} />
            <Description>
              <p
                style={{
                  color: "black",
                  marginBottom: "-10px"
                }}
              >
                {text}
              </p>
              <p style={{ color: "black" }}> {title}</p>
              {/* <Text as="p" variant="leaderName">
                {text}
              </Text>
              <Text as="p" variant="leaderTitle">
                {title}
              </Text> */}
            </Description>
          </PersonWrapper>
        ))}
      </Grid>
    </GridWrapper>
  </JudgeWrapper>
);

export default Team;
