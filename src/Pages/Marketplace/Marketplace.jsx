
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
                        <h1 className="ml-5 text-left text-3xl md:text-4xl lg:text-3xl font-bold">Maybe a bike can solve all your ploblems</h1>
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
                <div className="col-span-3 flex bg-[#DEFFE9] rounded-xl shadow-2xl m-5 ">
                    <div className="p-5">
                        <h1 className="ml-5 text-left text-3xl md:text-3xl lg:text-6xl font-bold">Plan your <br />dream <br />wedding</h1>
                    </div>
                    <div className="">
                        <img className="ml-[43px] mt-[40px] w-[38rem] h-[28rem] rounded-xl" src="https://i.ibb.co/416F0bL/marketplace-6.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;