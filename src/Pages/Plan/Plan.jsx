
const Plan = () => {
    return (
        <div className="p-10 lg:p-20 bg-black">
            <div className="p-10 bg-gradient-to-b from-[#002B5E] to-[#000000] rounded-2xl">
                <div className="flex items-center gap-1 btn btn-ghost w-44 mx-auto">
                    <div>
                        <img src="https://i.ibb.co/rZPZKrr/shobuy.png" className="h-10 w-15" alt="" />
                    </div>
                    <div>
                        <p className="text-2xl text-white font-light">shobuy</p>
                    </div>
                </div>
                <h1 className=" text-white text-3xl md:text-4xl lg:text-5xl pb-5 font-semibold text-center">build your saving plan</h1>
                <h1 className="text-3xl font-semibold text-white text-center">Plan price: <span className="text-yellow-400">15,00,000 BDT</span></h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <div className="hero">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="public/assets/images/payment/payment-1.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl font-semibold text-white">Suzuki Gixxer 150</h1>
                                    <p className="py-6 text-white text-xl">Regular price <br />1,50,000 BDT</p>
                                    <p className="pb-6 text-white text-xl font-light">how long will you invest? <span className="bg-white text-black font-bold px-4 rounded-3xl">6</span> months</p>
                                    <input type="range" min={0} max="100" value="40" className="range range-warning" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5 bg-[#2C2C2C]  hover:border-white hover:border-2  rounded-xl">
                            <div className="pt-7 flex gap-2 w-60 justify-center">
                                <img className="h-7 w-7" src="public/assets/images/payment/piggy-bank.png" alt="" />
                                <div>
                                    <h1 className="-mt-2 text-3xl text-white">you invest</h1>
                                    <h1 className="py-6 text-4xl font-bold text-white">৳1,50,000</h1>
                                    <h1 className="text-xl font-light text-white">(<span className="font-bold">৳</span>25,000/month)</h1>
                                </div>
                            </div>
                            <div className="pt-7 flex gap-2 w-60 justify-center">
                                <img className="h-7 w-7" src="public/assets/images/payment/currency.png" alt="" />
                                <div>
                                    <h1 className="-mt-2 text-3xl text-white">you get</h1>
                                    <div className="pt-5 ">
                                        <h1 className="text-3xl font-bold text-yellow-400">Product </h1>
                                        <h1 className="text-3xl pl-9 text-white font-bold">+</h1>
                                        <h1 className="text-3xl font-bold text-yellow-400">৳15,000</h1>
                                        <h1 className="text-xl font-light text-white">(brand deal & ROI)</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-48 mx-auto">
                    <button className="btn btn-outline text-white font-bold hover:bg-white hover:text-black border-2 border-white px-8 rounded-3xl text-lg">Save this plan</button>
                    <p className="text-center text-white text-xs pt-1">*T&C applied</p>
                </div>
            </div>
        </div>
    );
};

export default Plan;