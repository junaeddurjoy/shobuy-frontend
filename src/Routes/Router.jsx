
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
        path: "/shobuy-frontend",
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
            },
            {
                path: "/shobuy-frontend/congratulations",
                element: <Congratulations></Congratulations>,
            },
            {
                path: "/shobuy-frontend/setupPayment",
                element: <SetupPayment></SetupPayment>,
            },
            {
                path: "/shobuy-frontend/setupPaymentMethod",
                element: <SetupPaymentMethod></SetupPaymentMethod>,
            },
            {
                path: "/shobuy-frontend/plan",
                element: <Plan></Plan>,
            },
            {
                path: "/shobuy-frontend/productPage",
                element: <ProductPage></ProductPage>,
            },
            {
                path: "/shobuy-frontend/productCollection",
                element: <ProductCollection></ProductCollection>,
            },
            {
                path: "/shobuy-frontend/marketplace",
                element: <Marketplace></Marketplace>,
            },
            {
                path: "/shobuy-frontend/otpLoading",
                element: <OTPLoading></OTPLoading>,
            },
            {
                path: "/shobuy-frontend/otpVerify",
                element: <OTPVerify></OTPVerify>,
            },
            {
                path: "/shobuy-frontend/membership",
                element: <Membership></Membership>,
            },
            {
                path: "/shobuy-frontend/login",
                element: <LogIn></LogIn>,
            },
        ]
    },
]);