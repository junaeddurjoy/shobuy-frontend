
const OTPVerify = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[url('https://i.ibb.co/pPdpM5V/background-2.jpg')] p-10 min-h-screen bg-opacity-30">
            <div className="text-3xl md:text-5xl lg:text-7xl text-white font-semibold md:p-10 lg:p-10">
                welcome to the club. claim your membership
            </div>
            <div className="bg-gradient-to-t from-[#222222] to-[#050505] shadow-2xl rounded-2xl w-[w-[316px]] lg:w-[616px] h-[360px] lg:h-[720px]">
                <div className="text-3xl md:text-5xl lg:text-5xl px-10 pt-10 text-white font-semibold">
                    enter your verification <span className="text-[#E1E1E161]">code</span>
                </div>
                <p className="text-[#B3B3B3] pl-10 pt-5">we have sent a verification code to 01992****18</p>
                <p className="text-[#B3B3B3] pt-5 text-center">Enter OTP</p>
                <div className="mt-3 ml-48 max-w-xs mx-auto">
                    <input type="number" placeholder="number" className=" input input-bordered bg-black text-white input-accent " />
                </div>
                <div className="mt-3 ml-[15rem] max-w-xs mx-auto">
                    <button className="btn btn-outline rounded-3xl px-9 bg-[#505050] text-white">Verify</button>
                </div>
                <p className="text-[#B3B3B3] text-center pt-10">Didn’t receive an OTP? </p>
                <p className="text-[#FFDA00] text-center pt-5 text-xl font-semibold">Send the code again </p>
                <p className="text-[#BEA300] text-center pt-5 text-xl font-semibold">Change phone number </p>
            </div>
        </div>
    );
};

export default OTPVerify;