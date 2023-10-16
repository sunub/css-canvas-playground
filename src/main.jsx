import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Tree from "./routes/Tree";
import Stories from "./routes/Stories";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
