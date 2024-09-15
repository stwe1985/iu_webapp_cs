//import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Root from "./routes/root";
import ErrorPage from "./error";
import Person from "./forms/person";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "spenden",
                element: <Person />,
            }
        ],
        errorElement: <ErrorPage />,
    },

]);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <RouterProvider router={router} />
);
