import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ScrollToTop smooth/>
            <Footer></Footer>
        </div>
    );
};

export default Main;