import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const Main = () => {
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    },[pathname])
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollToTop smooth component={<p style={{ color: "black" }}><FaArrowUp className="ml-[10px]" /></p>} />
            <Footer></Footer>
        </div>
    );
};

export default Main;