import * as React from "react";
import { createAsyncComponent } from "@shopify/react-async";

import Background from "components/Background";

import About from "sections/About";
import Judges from "sections/Judges";
import Sponsors from "sections/Sponsors";
import Team from "sections/Team";
// const Schedule = createAsyncComponent({
//   load: () => import("sections/Schedule")
// });
// const Sponsors = createAsyncComponent({
//   load: () => import("sections/Sponsors")
// });
const FAQ = createAsyncComponent({
  load: () => import("sections/FAQ")
});
// const Leaders = createAsyncComponent({
//   load: () => import("./Leaders")
// });

const LazyLoadedSections = () => (
  <>
    <Background />
    <About />
    {/* <Stories /> */}
    <Judges />
    {/* <Leaders /> */}
    <Sponsors />
    <FAQ />
    <Team />
  </>
);

export default LazyLoadedSections;
