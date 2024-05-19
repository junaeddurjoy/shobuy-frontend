
const OTPLoading = () => {
    return (
        <div className="bg-[#040404] py-32">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-bold">smart decision</h1>
            </div>
            <p className="text-center text-lg md:text-xl lg:text-2xl text-white pt-5">plan purchase, for less
                <br />
                <span className="loading loading-spinner text-white loading-lg pt-5"></span>
            </p>
        </div>
    );
};

export default OTPLoading;