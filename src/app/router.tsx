import App from "@/App";
import { Main } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <Main />,
            },
            {
                path: "/professors",
                element: <></>,
            },
        ],
    },
]);
