import App from "@/App";
import { Main } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />,
            },
            {
                path: "/professors",
                element: <></>,
            },
        ],
    },
], {basename: "/history/",});
