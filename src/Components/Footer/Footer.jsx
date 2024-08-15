import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* <footer className="fixed bottom-0 footer p-10 bg-black text-white"> */}
            <footer className=" footer p-10 bg-black text-white">
                <aside>
                    <img className="h-24 w-28" src="https://i.ibb.co/rZPZKrr/shobuy.png" alt="" />
                    <p>SHOBUY Ltd.<br />Providing since 2000</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Pages</h6>
                    <Link to={'/congratulations'}><a className="link link-hover">Congratulations</a></Link>
                    <Link to={'/setupPayment'}><a className="link link-hover">Setup Payment</a></Link>
                    <Link to={'/setupPaymentMethod'}><a className="link link-hover">Setup Payment Method</a></Link>
                    <Link to={'/plan'}><a className="link link-hover">Plan</a></Link>
                    <Link to={'/membership'}><a className="link link-hover">Membership</a></Link>
                    <Link to={'/login'}><a className="link link-hover">Log In</a></Link>
                    <Link to={'/favorites'}><a className="link link-hover">Favorites</a></Link>
                    <Link to={'/trackPurchase'}><a className="link link-hover">Track Purchase</a></Link>
                    <Link to={'/purchased'}><a className="link link-hover">Purchased</a></Link>
                    <Link to={'/refund'}><a className="link link-hover">Refund</a></Link>
                    <Link to={'/notCanceled'}><a className="link link-hover">Not Canceled</a></Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={'/productPage'}><a className="link link-hover">Product</a></Link>
                    <Link to={'/productCollection'}><a className="link link-hover">Product Collection</a></Link>
                    <Link to={'/tellMeMore'}><a className="link link-hover">Tell Me More</a></Link>
                    <Link to={'/otpLoading'}><a className="link link-hover">OTP Loading</a></Link>
                    <Link to={'/otpVerify'}><a className="link link-hover">OTP Verify</a></Link>
                    <Link to={'/comingSoon'}><a className="link link-hover">Coming Soon</a></Link>
                    <Link to={'/settings'}><a className="link link-hover">Settings</a></Link>
                    <Link to={'/payment'}><a className="link link-hover">Payment</a></Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;