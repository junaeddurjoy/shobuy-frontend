import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black text-white px-10 py-4">
                <div className="navbar-start">
                    <div className="drawer drawer-end lg:hidden">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button"><MdOutlineMenu className="text-2xl" /></label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-gray-800 text-white text-center  font-bold text-lg">
                                <li className="pb-5">
                                    <div className="flex items-center gap-1 btn btn-ghost w-40 -ml-5">
                                        <div>
                                            <img src="https://i.ibb.co/rZPZKrr/shobuy.png" className="h-10 w-15" alt="" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">shobuy</p>
                                        </div>
                                    </div>
                                </li>
                                {/* Sidebar content here */}
                                <li><a>Marketplace</a></li>
                                <hr />
                                <li><a>Membership</a></li>
                                <hr />
                                <li><Link to={'/shobuy-frontend/aboutUs'}>About Us</Link></li>
                                <hr />
                                <li className="hover:underline"><Link to={'/shobuy-frontend/FAQs'}>FAQs</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="-ml-0 md:-ml-[19rem] lg:-ml-0">
                        <Link to={'/shobuy-frontend'}>
                            <div className="flex items-center gap-1 btn btn-ghost w-40 -ml-5">
                                <div>
                                    <img src="public/assets/images/logo/shobuy.png" className="h-10 w-15" alt="" />
                                </div>
                                <div>
                                    <p className="text-xl font-bold">shobuy</p>
                                </div>
                            </div>
                        </Link>
                        {/* <Link>
                            <div className="avatar">
                                <div className="w-10 rounded-xl">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                        </Link> */}
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li className="hover:underline"><a>Marketplace</a></li>
                        <li className="hover:underline"><a>Membership</a></li>
                        <li className="hover:underline"><Link to={'/shobuy-frontend/aboutUs'}>About Us</Link></li>
                        <li className="hover:underline"><Link to={'/shobuy-frontend/FAQs'}>FAQs</Link></li>
                        <div className="avatar">
                            <div className="w-10 rounded-xl">
                                <img src="https://i.ibb.co/7XbXYW3/profile-1.png" />
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;