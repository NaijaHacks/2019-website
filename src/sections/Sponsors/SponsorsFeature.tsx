import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Text, Gallery } from "@hackthenorth/north";

const sponsorsWithFeatures = [
  {
    name: "Apply to Participate",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Submit your application at naijahacks.com/submit. Enter all required details & create a team.",
      link: "#",
      linkLabel: "by Oct. 31, 2019"
    }
  },
  {
    name: "Get accepted",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Get acceptance email & log into your application to confirm you participation. Enter additional information & upload CV/Resume for job opportunities.",
      link: "#",
      linkLabel: "by Nov. 15, 2019"
    }
  },
  {
    name: "Pick a project",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Working with your teamates, come up with an idea or pick one from the ideas board. ",
      link: "#",
      linkLabel: "by Dec. 1, 2019"
    }
  },

  {
    name: "Join Slack and learn our process",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Join the NaijaHacks Slack team, create a private channel for your team.",
      link: "#",
      linkLabel: "Dec. 5, 2019"
    }
  },

  {
    name: "Attend remote talks, workshops and demos",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Sponsors, speakers and mentors will be presenting remotely. All sessions will be recorded and shared",
      link: "#",
      linkLabel: "Dec. 7, 2019"
    }
  },

  {
    name: "Build. Ask questions. Push",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Work with your team on your project. Ask mentors questions on slack. Ensure you push your changes regularly to Github.",
      link: "#",
      linkLabel: "Dec. 7, 2019"
    }
  },
  {
    name: "Submit your project",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text: "Submit your project on DevPost and include the github link.",
      link: "#",
      linkLabel: "Dec. 14, 2019"
    }
  },
  {
    name: "Meet, Learn, Eat, get Swag & Demo",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Meet in Zone Tech Park & listen to talks from speakers speaking from around the world. Be one of top teams to demo your project in expo-style setting to esteemed judges. Get your personalized NaijaHacks Goodie bag.",
      link: "#",
      linkLabel: "Dec. 17, 2019"
    }
  },
  {
    name: "Pitch",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Return to venue to pitch to VCs & Execs from Nigeria & around the world.",
      link: "#",
      linkLabel: "Dec. 17, 2019"
    }
  },
  {
    name: "Get prizes",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text: "Get more swag. Prizes announced and given to winners.",
      link: "#",
      linkLabel: "Dec. 17, 2019"
    }
  },
  {
    name: "Pilot. Incubate. Interviews",
    tier: "bronze",
    imgSrc: "",
    link: "#",
    feature: {
      text:
        "Continue working on project as pilot. Join one of our Incubation partners. Do job interviews with our partners.",

      link: "#",
      linkLabel: "After event"
    }
  }
];

const Feature = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: center;

  height: 325px;
  margin: 25px auto;

  ${props => props.theme.mediaQueries.tabletMobile`
    height: 520px;
    flex-direction: column;
  `}
`;

const FeatureImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;

  ${props => props.theme.mediaQueries.tabletMobile`
    height: 90px;
    width: 90%;
    margin: auto;
  `}
`;

const FeatureImg = styled.img`
  margin: auto;
  max-width: 100%;

  ${props => props.theme.mediaQueries.tabletMobile`
    max-height: 90px;
    margin: 20px 0;
  `}
`;

const FeatureGallery = styled(Gallery)`
  height: 100%;
  width: 600px;

  & > .gallery__slider {
    width: 90%;
    margin-bottom: 20px;
  }

  ${props => props.theme.mediaQueries.tabletMobile`
    height: auto;
    width: 100%;
  `}
`;

const GalleryBubbleContainer = styled.div`
  display: flex;
`;

const GalleryBubble = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 90&;
  margin: auto;
  padding: 20px 30px;

  background-color: rgba(243, 243, 243, 0.8);
  color: ${props => props.theme.globalConstants.color.textDark};
  border-radius: 8px;


    ${props => props.theme.mediaQueries.tabletMobile`
      top: -7px;
      left: 30px;
      transform: rotate(45deg);
    `}
  }

  & > * {
    margin: 10px 0;
  }

  ${props => props.theme.mediaQueries.tablet`
    width: 400px;
  `}

  ${props => props.theme.mediaQueries.tabletMobile`
    top: 10px;
    width: 100%;
  `}
`;

const SponsorsFeature = () => {
  const randomizedSponsors = useMemo(() => {
    // randomize sponsors on mount using Durstenfeld shuffle algorithm.
    let randomizedSponsors = [...sponsorsWithFeatures];
    for (let i = sponsorsWithFeatures.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = sponsorsWithFeatures[i];
      sponsorsWithFeatures[i] = sponsorsWithFeatures[j];
      sponsorsWithFeatures[j] = tmp;
    }

    return randomizedSponsors;
  }, []);
  const randFeatIndex = Math.floor(Math.random() * sponsorsWithFeatures.length);
  const [curFeatureIndex, updateCurFeatureIndex] = useState(randFeatIndex);
  const [interactedWith, updateInteractedWith] = useState(false);

  return (
    <>
      <Text as="h3" variant="subheading">
        Our Process
      </Text>
      <Feature onClick={() => updateInteractedWith(true)}>
        {/* <FeatureImgContainer>
          <FeatureImg
            src={randomizedSponsors[curFeatureIndex].imgSrc}
            alt={`Logo of ${randomizedSponsors[curFeatureIndex].name}`}
          />
        </FeatureImgContainer> */}

        <FeatureGallery
          className="website-feature-gallery"
          startIndex={randFeatIndex}
          showIndicators={randomizedSponsors.length > 1}
          autoScroll={!interactedWith}
          loop
          draggable
          onChange={({ to }) => updateCurFeatureIndex(to)}
        >
          {randomizedSponsors.map(sponsor => (
            <GalleryBubbleContainer
              key={sponsor.name}
              onMouseOver={() => updateInteractedWith(true)}
              onMouseOut={() => updateInteractedWith(false)}
            >
              <GalleryBubble>
                <h2>{sponsor.name}</h2>
                <Text as="p" variant="sectionText">
                  {sponsor.feature && sponsor.feature.text}
                </Text>
                <h3>{sponsor.feature && sponsor.feature.linkLabel}</h3>
              </GalleryBubble>
            </GalleryBubbleContainer>
          ))}
        </FeatureGallery>
      </Feature>
    </>
  );
};

export default SponsorsFeature;
