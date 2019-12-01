import React, { Suspense } from "react";

/* Sections */
import Hero from "sections/Hero";
const LazyLoadedSections = React.lazy(() =>
  import("sections/LazyLoadedSections")
);

const Home = () => (
  <>
    <Hero />
    <Suspense fallback={null}>
      <LazyLoadedSections />
    </Suspense>
  </>
);

export default Home;
