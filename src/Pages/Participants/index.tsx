/* eslint-disable no-console */
import React, { Suspense } from "react";
import Schedule from "sections/Schedule";

import copy from "copy";
import CollapsibleList from "components/CollapsibleList";

const Participants: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <div style={{ paddingTop: "100px" }}></div>
      <CollapsibleList listItem={copy.prizes} openAll={1}></CollapsibleList>

      {/* <Schedule /> */}
    </Suspense>
  );
};

export default Participants;
