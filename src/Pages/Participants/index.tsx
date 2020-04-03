/* eslint-disable no-console */
import React, { Suspense } from "react";

import copy from "copy";
import CollapsibleList from "components/CollapsibleList";

const Participants: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <div style={{ paddingTop: "100px" }}></div>
      <CollapsibleList listItem={copy.prizes} openAll={1}></CollapsibleList>
    </Suspense>
  );
};

export default Participants;
