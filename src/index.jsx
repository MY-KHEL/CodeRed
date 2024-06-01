import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";

import { LandingPage } from "./components/landingPage";
import { ViewPage } from "./components/viewPage";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/view-all",
    element: <ViewPage />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
]);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
