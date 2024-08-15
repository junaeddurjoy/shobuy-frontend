import { Link } from "react-router-dom";

const NotCanceled = () => {
    return (
        <div className="my-[2px] min-h-screen bg-black">
            <div className="flex justify-center gap-10 lg:gap-20 bg-black py-10">
                <p className="text-xl font-semibold text-white">Profile</p>
                <p className="text-2xl font-bold text-white">Track purchase</p>
                <p className="text-xl font-semibold text-white">Settings</p>
            </div>
            <div className="py-10 px-10 lg:px-20 bg-black text-white">
                <p className=" text-4xl lg:text-6xl font-bold">Refund your installments</p>
                <button className="text-black bg-[#FFDA00] mt-5 font-bold px-5 py-3 rounded-3xl">Call for refund</button>
                <p className="text-xl lg:w-1/2 pt-5"><span className="text-[#FFDA00] font-bold">Note:</span> You will only get back your saved amount. Shobuy will take maximum 7 days to refund your money upon completing due diligence. </p>
            </div>
            <div className="py-10 px-10 lg:px-20 bg-black text-white text-4xl lg:text-6xl font-normal">
                No plan to track. Visit <span className="font-bold hover:underline"><Link to={'/marketplace'}>Marketplace</Link></span> to plan your dream purchase.
            </div>
        </div>
    );
};

export default NotCanceled;