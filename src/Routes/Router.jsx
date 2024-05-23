
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
import TellMeMore from "../Pages/TellMeMore/TellMeMore";
import ComingSoon from "../Pages/ComingSoon/ComingSoon";
import Favorites from "../Pages/Favorites/Favorites";
import TrackPurchase from "../Pages/TrackPurchase/TrackPurchase";
import Purchased from "../Pages/TrackPurchase/Purchased";
import Refund from "../Pages/Refund/Refund";
import NotCanceled from "../Pages/TrackPurchase/NotCanceled";
import Settings from "../Pages/Settings/Settings";
import Payment from "../Pages/Settings/Payment";

export const router = createBrowserRouter([
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
            {
                path: "/tellMeMore",
                element: <TellMeMore></TellMeMore>,
            },
            {
                path: "/comingSoon",
                element: <ComingSoon></ComingSoon>,
            },
            {
                path: "/favorites",
                element: <Favorites></Favorites>,
            },
            {
                path: "/trackPurchase",
                element: <TrackPurchase></TrackPurchase>,
            },
            {
                path: "/purchased",
                element: <Purchased></Purchased>,
            },
            {
                path: "/refund",
                element: <Refund></Refund>,
            },
            {
                path: "/notCanceled",
                element: <NotCanceled></NotCanceled>,
            },
            {
                path: "/settings",
                element: <Settings></Settings>,
            },
            {
                path: "/payment",
                element: <Payment></Payment>,
            },
        ]
    },
]);