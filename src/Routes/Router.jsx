
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import FAQs from "../Pages/FAQs/FAQs";
import App from "../App";
export const router = createBrowserRouter([
    {
        path: "/",
        // element: <Main></Main>,
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "aboutUs",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "FAQs",
                element: <FAQs></FAQs>,
            }
        ]
    },
]);