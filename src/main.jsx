import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Tree from "./routes/Tree";
import Stories from "./routes/Stories";
import Background from "./routes/Background";
import Keyboard from "./routes/Keyboard";
import FormPage from "./routes/FormPage";
import SvgPage from "./routes/SVG/SvgPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/tree",
    element: <Tree />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/rain",
    element: <Background />,
  },
  {
    path: "/keyboard",
    element: <Keyboard />,
  },
  {
    path: "/form",
    element: <FormPage />,
  },
  {
    path: "/svg-page",
    element: <SvgPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
