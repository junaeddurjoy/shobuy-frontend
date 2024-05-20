import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            {/* <footer className="fixed bottom-0 footer p-10 bg-black text-white"> */}
            <footer className=" footer p-10 bg-black text-white">
                <aside>
                    <img className="h-24 w-28" src="/public/assets/images/logo/shobuy.png" alt="" />
                    <p>SHOBUY Ltd.<br />Providing since 2000</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Pages</h6>
                    <Link to={'/shobuy-frontend/congratulations'}><a className="link link-hover">Congratulations</a></Link>
                    <Link to={'/shobuy-frontend/setupPayment'}><a className="link link-hover">Setup Payment</a></Link>
                    <Link to={'/shobuy-frontend/setupPaymentMethod'}><a className="link link-hover">Setup Payment Method</a></Link>
                    <Link to={'/shobuy-frontend/plan'}><a className="link link-hover">Plan</a></Link>
                    <Link to={'/shobuy-frontend/membership'}><a className="link link-hover">Membership</a></Link>
                    <Link to={'/shobuy-frontend/login'}><a className="link link-hover">Log In</a></Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <Link to={'/shobuy-frontend/productPage'}><a className="link link-hover">Product</a></Link>
                    <Link to={'/shobuy-frontend/productCollection'}><a className="link link-hover">Product Collection</a></Link>
                    <Link to={'/shobuy-frontend/marketplace'}><a className="link link-hover">Marketplace</a></Link>
                    <Link to={'/shobuy-frontend/otpLoading'}><a className="link link-hover">OTP Loading</a></Link>
                    <Link to={'/shobuy-frontend/otpVerify'}><a className="link link-hover">OTP Verify</a></Link>
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