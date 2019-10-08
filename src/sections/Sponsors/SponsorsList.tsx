import React, { memo } from "react";
import styled from "styled-components";
import { Text, Link } from "@hackthenorth/north";

import siteCopy from "copy";

const { sponsors, previousSponsors } = siteCopy.sponsorsSection;
const goldSponsors = sponsors.filter(sponsor => sponsor.tier === "gold");
const silverSponsors = sponsors.filter(sponsor => sponsor.tier === "silver");
const bronzeAndStartupSponsors = sponsors.filter(
  sponsor => sponsor.tier === "bronze" || sponsor.tier === "startup"
);

const partners = sponsors.filter(sponsor => sponsor.tier === "partner");

const media = sponsors.filter(sponsor => sponsor.tier === "media");

const gaming = sponsors.filter(sponsor => sponsor.tier === "gaming");

const sponsorHeights = {
  gold: {
    h: 225,
    wm: 90
  },
  silver: {
    h: 85,
    wm: 65
  },
  bronzeAndStartup: {
    h: 45,
    wm: 35
  },
  partner: {
    h: 45,
    wm: 35
  },
  media: {
    h: 225,
    wm: 90
  },
  gaming: {
    h: 225,
    wm: 90
  }
};

const SponsorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  box-sizing: inherit;

  margin: 30px 0;
`;

const SponsorItem = styled(Link)<{ tier: string }>`
  display: flex;
  position: relative;
  height: ${props => sponsorHeights[props.tier].h}px;
  width: ${props => (props.tier === "gold" ? "100%" : "unset")};
  padding: 40px;
  cursor: pointer;

  transition: opacity 250ms ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  ${props => props.theme.mediaQueries.tabletMobile`
    width: ${sponsorHeights[props.tier].wm}%;
    padding: 25px 0;
  `}
`;

const SponsorImg = styled.img`
  margin: auto;
  height: 100%;
  max-width: 100%;

  ${props => props.theme.mediaQueries.tabletMobile`
    height: unset;
    max-height: 100%;
  `}
`;

const SponsorsList = () => (
  <>
    <Text as="h3" variant="subheading" id="sponsors">
      Our sponsors & Partners
    </Text>
    <SponsorContainer>
      {goldSponsors.map(sponsor => (
        <SponsorItem key={sponsor.name} href={sponsor.link} newTab tier="gold">
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    <SponsorContainer>
      {silverSponsors.map(sponsor => (
        <SponsorItem
          key={sponsor.name}
          href={sponsor.link}
          newTab
          tier="silver"
        >
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    <SponsorContainer>
      {bronzeAndStartupSponsors.map(sponsor => (
        <SponsorItem
          key={sponsor.name}
          href={sponsor.link}
          newTab
          tier="bronzeAndStartup"
        >
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>

    <Text as="h3" variant="subheading">
      Official Media partner
    </Text>
    <SponsorContainer>
      {media.map(media => (
        <SponsorItem key={media.name} href={media.link} newTab tier="media">
          <SponsorImg src={media.imgSrc} alt={media.name} title={media.name} />
        </SponsorItem>
      ))}
    </SponsorContainer>
    <Text as="h3" variant="subheading">
      Official Gaming partner
    </Text>
    <SponsorContainer>
      {gaming.map(gaming => (
        <SponsorItem key={gaming.name} href={gaming.link} newTab tier="gaming">
          <SponsorImg
            src={gaming.imgSrc}
            alt={gaming.name}
            title={gaming.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    <Text as="h3" variant="subheading">
      Previous Sponsors
    </Text>
    <SponsorContainer>
      {previousSponsors.map(sponsor => (
        <SponsorItem
          key={sponsor.name}
          href={sponsor.link}
          newTab
          tier="bronzeAndStartup"
        >
          <SponsorImg
            src={sponsor.imgSrc}
            alt={sponsor.name}
            title={sponsor.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer>
    {/* <Text as="h3" variant="subheading">
      Our partners
    </Text>
    <SponsorContainer>
      {partners.map(partner => (
        <SponsorItem
          key={partner.name}
          href={partner.link}
          newTab
          tier="partner"
        >
          <SponsorImg
            src={partner.imgSrc}
            alt={partner.name}
            title={partner.name}
          />
        </SponsorItem>
      ))}
    </SponsorContainer> */}
  </>
);

export default memo(SponsorsList);
