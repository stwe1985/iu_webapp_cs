//import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [],
        errorElement: <ErrorPage></ErrorPage>,
    },

]);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <RouterProvider router={router} />
);
