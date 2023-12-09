import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
// import Analytics from "react-router-ga";

// Main Pages Imports
import Homepage from "./Pages/Homepage/Homepage";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";

// Font Import
import "./Fonts/customFonts.css";
import "./index.css";

import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";

function Website() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* TODO: Fix Analytics */}
      {/* <Analytics id="UA-90234720-2"> */}
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        {/* <Route path="/About" element={<About/>} /> */}
        {/* <Route path="/Contact" element={<Contact/>} /> */}

        <Route path="/UnderConstruction" component={<UnderConstruction />} />
      </Routes>
      {/* </Analytics> */}
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Website />);
// ReactDOM.render(<Website />, document.getElementById("root"));
