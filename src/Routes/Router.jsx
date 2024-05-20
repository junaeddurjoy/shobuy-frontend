
import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";
import FAQs from "../Pages/FAQs/FAQs";
import Congratulations from "../Pages/Congratulations/Congratulations";
import SetupPayment from "../Pages/SetupPayment/SetupPayment";
import SetupPaymentMethod from "../Pages/SetupPayment/SetupPaymentMethod";
import Plan from "../Pages/Plan/Plan";
import ProductPage from "../Pages/Product/ProductPage";
import ProductCollection from "../Pages/Product/ProductCollection";
import Marketplace from "../Pages/Marketplace/Marketplace";
import OTPLoading from "../Pages/OTPLayout/OTPLoading";
import OTPVerify from "../Pages/OTPLayout/OTPVerify";
import Membership from "../Pages/Membership/Membership";
import LogIn from "../Pages/LogIn/LogIn";

export const router = createBrowserRouter([
    // {
    //     path: "/shobuy-frontend",
    //     element: <Main></Main>,
    //     children: [
    //         {
    //             path: "/shobuy-frontend",
    //             element: <Home></Home>,
    //         },
    //         {
    //             path: "/shobuy-frontend/aboutUs",
    //             element: <AboutUs></AboutUs>,
    //         },
    //         {
    //             path: "/shobuy-frontend/FAQs",
    //             element: <FAQs></FAQs>,
    //         }
    //     ]
    // },
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/aboutUs",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/FAQs",
                element: <FAQs></FAQs>,
            },
            {
                path: "/congratulations",
                element: <Congratulations></Congratulations>,
            },
            {
                path: "/setupPayment",
                element: <SetupPayment></SetupPayment>,
            },
            {
                path: "/setupPaymentMethod",
                element: <SetupPaymentMethod></SetupPaymentMethod>,
            },
            {
                path: "/plan",
                element: <Plan></Plan>,
            },
            {
                path: "/productPage",
                element: <ProductPage></ProductPage>,
            },
            {
                path: "/productCollection",
                element: <ProductCollection></ProductCollection>,
            },
            {
                path: "/marketplace",
                element: <Marketplace></Marketplace>,
            },
            {
                path: "/otpLoading",
                element: <OTPLoading></OTPLoading>,
            },
            {
                path: "/otpVerify",
                element: <OTPVerify></OTPVerify>,
            },
            {
                path: "/membership",
                element: <Membership></Membership>,
            },
            {
                path: "/login",
                element: <LogIn></LogIn>,
            },
        ]
    },
]);