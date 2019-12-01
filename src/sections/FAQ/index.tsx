/* eslint-disable no-console */
import React from "react";

import copy from "copy";
import CollapsibleList from "components/CollapsibleList";

const FAQ: React.FC = () => {
  return <CollapsibleList listItem={copy.faq}></CollapsibleList>;
};

export default FAQ;
