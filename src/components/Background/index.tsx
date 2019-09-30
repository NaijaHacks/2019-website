import React, { memo } from "react";

import BackgroundLayer from "./BackgroundLayer";

type SectionName =
  | "about"
  | "stories"
  | "leaders"
  | "sponsors-cta"
  | "faq"
  | "other";

interface BackgroundSection {
  name: SectionName;
  bg: string;
}

const sections: BackgroundSection[] = [
  // MUST BE DEFINED BOTTOM OF PAGE FIRST FOR STACKING
  {
    name: "faq",
    bg: "#fff"
  },
  {
    name: "sponsors-cta",
    bg: "#fff"
  },
  {
    name: "leaders",
    bg: "linear-gradient(180deg, #ffd6dc 0%, #ff775f 51%)"
  },
  {
    name: "stories",
    bg: "linear-gradient(180deg, #ffd6dc 0%, #ff775f 51%)"
  },
  {
    name: "about",
    bg: "linear-gradient(180deg, #ffd6dc 0%, #ff775f 20%)"
  }
];

const Background = () => (
  <>
    {sections.map((section, i) => (
      <BackgroundLayer
        key={section.name}
        first={i === sections.length - 1}
        {...section}
      />
    ))}
  </>
);

export default memo(Background);
