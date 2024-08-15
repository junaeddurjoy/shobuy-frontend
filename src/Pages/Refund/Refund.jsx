
const Refund = () => {
    return (
        <div className="bg-[#040404] py-32">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-bold">wrong timing</h1>
            </div>
            <p className="text-center w-1/2 mx-auto text-lg md:text-xl lg:text-2xl text-white pt-10">
            <span className="text-[#FFDA00]">Note:</span> You will only get back your saved amount. Shobuy will take maximum 7 days to refund your money upon completing due diligence.
            </p>
            <p className="text-center w-1/2 mx-auto text-lg md:text-xl lg:text-2xl text-white">Stay tuned</p>
            <p className="text-center w-1/2 mx-auto text-lg md:text-xl lg:text-2xl pt-5 font-bold text-[#FFDA00]">Cancellation is processing
            <br />
            <span className="loading loading-spinner loading-lg mx-auto text-[#FFDA00]"></span>
            </p>
            

        </div>
    );
};

export default Refund;