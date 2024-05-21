
const Marketplace = () => {
    return (
        <div className="py-10 lg:py-20 px-10 lg:px-20">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold">jump into any <br /> desire</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="col-span-2 row-span-2 rounded-xl shadow-2xl p-5 m-5">
                    <div>
                        <img className="rounded-xl" src="https://i.ibb.co/xMFf3MS/marketplace-1.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className="text-center text-3xl md:text-4xl lg:text-6xl font-bold">Travel to any destination </h1>
                    </div>
                </div>
                <div className="col-span-2 flex items-center bg-[#E6E5FF] rounded-xl shadow-2xl p-5 m-5">
                    <div>
                        <h1 className="ml-5 text-left text-2xl md:text-4xl lg:text-3xl font-bold">Maybe a bike can solve all your ploblems</h1>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/VtSGdbM/marketplace-2.png" alt="" />
                    </div>
                </div>
                <div className=" bg-[#FEEB9D] rounded-xl shadow-2xl m-5 ">
                    <div className="p-5">
                        <h1 className="ml-5 text-left text-3xl md:text-4xl lg:text-3xl font-bold">Plan your next iPhone or PS5</h1>
                    </div>
                    <div>
                        <img className="rounded-xl" src="https://i.ibb.co/ykjXpvm/marketplace-3.png" alt="" />
                    </div>
                </div>
                <div className=" bg-pink-200 rounded-xl shadow-2xl m-5 ">
                    <div className="p-5">
                        <h1 className="ml-5 text-left text-3xl md:text-4xl lg:text-3xl font-bold">Plan a romantic date night</h1>
                    </div>
                    <div>
                        <img className="rounded-xl" src="https://i.ibb.co/LrB2SdX/marketplace-4.png" alt="" />
                    </div>
                </div>
                <div className="h-[30rem]  bg-[#E6E5FF] rounded-xl shadow-2xl m-5 ">
                    <div>
                        <img className="rounded-xl" src="https://i.ibb.co/ZV3f7mN/marketplace-5.png" alt="" />
                    </div>
                    <div className="p-5">
                        <h1 className="ml-5 text-left text-3xl md:text-4xl lg:text-3xl font-bold">Plan gifts for your special someone</h1>
                    </div>
                </div>
                <div className="h-[30rem]   rounded-xl shadow-2xl m-5 ">
                    <div className="absolute h-[80%]">
                        <img className="rounded-xl h-[30rem] shadow-2xl w-[84%]" src="https://i.ibb.co/7Y4xQK4/marketplace-7.jpg" alt="" />
                    </div>
                    <div className="p-5 relative">
                        <h1 className="ml-5 text-left text-3xl md:text-4xl lg:text-3xl font-bold">Buy your gadgets</h1>
                    </div>
                </div>
                <div className="col-span-2 flex bg-[#DEFFE9] rounded-xl shadow-2xl m-5 ">
                    <div className="pl-2 md:pl-5 lg:pl-5 pt-2 md:pt-5 lg:pt-5 absolute">
                        <h1 className="text-left text-2xl md:text-4xl lg:text-4xl font-bold">Plan your dream wedding</h1>
                    </div>
                    <div className="relative items-end">
                        <img className="mt-9 md:mt-[66px] lg:mt-6 h-[85%] lg:h-[95%] w-full ml-0 md:ml-[56px] lg:ml-0 rounded-xl" src="https://i.ibb.co/416F0bL/marketplace-6.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Marketplace;