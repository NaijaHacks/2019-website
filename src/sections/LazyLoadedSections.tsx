import * as React from "react";
import { createAsyncComponent } from "@shopify/react-async";

import Background from "components/Background";

const About = createAsyncComponent({
  load: () => import("sections/About")
});
const Stories = createAsyncComponent({
  load: () => import("sections/Stories")
});
const Sponsors = createAsyncComponent({
  load: () => import("sections/Sponsors")
});
const FAQ = createAsyncComponent({
  load: () => import("sections/FAQ")
});
const Footer = createAsyncComponent({
  load: () => import("sections/Footer")
});
const Leaders = createAsyncComponent({
  load: () => import("./Leaders")
});
const Judges = createAsyncComponent({
  load: () => import("./Judges")
});

const LazyLoadedSections = () => (
  <>
    <Background />
    <About />
    {/* <Stories /> */}
    <Judges />
    {/* <Leaders /> */}
    <Sponsors />
    <FAQ />
    <Footer />
  </>
);

export default LazyLoadedSections;
