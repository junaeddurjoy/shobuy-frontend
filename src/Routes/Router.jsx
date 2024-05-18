
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import FAQs from "../Pages/FAQs/FAQs";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/shobuy-frontend",
                element: <Home></Home>,
            },
            {
                path: "/shobuy-frontend/aboutUs",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/shobuy-frontend/FAQs",
                element: <FAQs></FAQs>,
            }
        ]
    },
]);