import React, { Suspense } from "react";
import { North, ThemeDefinition } from "@hackthenorth/north";
import themeDef from "theme";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { createAsyncComponent } from "@shopify/react-async";

import Navbar from "components/Navbar";
import Home from "Pages/Home";
import Prizes from "Pages/Prizes";
const Footer = createAsyncComponent({
  load: () => import("sections/Footer")
});

const App = () => (
  <North themeDefinition={(themeDef as unknown) as ThemeDefinition}>
    <Router basename="/">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/participants" component={Prizes} exact />
      </Switch>
      <Footer />
    </Router>
  </North>
);

export default App;
