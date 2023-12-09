import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages and components
import Homepage from "./Pages/Homepage/Homepage";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";

import Layout from "./layout"; 

// Font and CSS Imports
import "./Fonts/customFonts.css";
import "./index.css";

function Website() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Homepage /> },
        { path: "Resume", element: <Resume /> },
        { path: "Projects", element: <Projects /> },
        { path: "UnderConstruction", element: <UnderConstruction /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Website />);
