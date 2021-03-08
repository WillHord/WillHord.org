import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import Analytics from 'react-router-ga';


// Main Pages Imports
import Homepage from "./Pages/Homepage/Homepage";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";

// Font Import
import "./Fonts/customFonts.css";
import "./index.css";

import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import test from "./Pages/Test/test";

function Website() {
  return (
    <Router>
      <ScrollToTop>
        <Analytics id="UA-90234720-2">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Resume" component={Resume} />
            <Route path="/Projects" component={Projects} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Login" component={Login} />
            <Route path="/test" component={test} />
            <Route path="/UnderConstruction" component={UnderConstruction} />
          </Switch>
        </Analytics>
      </ScrollToTop>
    </Router>
  );
}

ReactDOM.render(<Website />, document.getElementById("root"));