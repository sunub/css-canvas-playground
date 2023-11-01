import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Tree from "./routes/Tree";
import Stories from "./routes/Stories";
import Background from './routes/Background';

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
		path: "/background",
		element: <Background />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
