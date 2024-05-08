import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black text-white px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-auto font-bold">
                            <li><a>Marketplace</a></li>
                            <hr />
                            <li><a>Membership</a></li>
                            <hr />
                            <li><a>About Us</a></li>
                            <hr />
                            <li><a>FAQs</a></li>
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <div className="flex items-center gap-1 btn btn-ghost">
                            <img src="../../../public/assets/images/logo/shobuy.png" className="h-10 w-15" alt="" />
                            <p className=" text-xl font-bold">shobuy</p>
                        </div>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li className="hover:underline"><a>Marketplace</a></li>
                        <li className="hover:underline"><a>Membership</a></li>
                        <li className="hover:underline"><a>About Us</a></li>
                        <li className="hover:underline"><a>FAQs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;