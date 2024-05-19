
const SetupPayment = () => {
    return (
        <div className="p-10 lg:p-20 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-[#011226] to-[#000000] rounded-2xl">
                <div className="p-10 md:p-16 lg:p-20">
                    <h1 className=" text-white text-3xl md:text-4xl lg:text-7xl pb-10">Set up payment method</h1>
                    <div className="flex items-center gap-5 pt-2 pb-10">
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="/public/assets/images/payment/payment-method-1.png" alt="" />
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="/public/assets/images/payment/payment-method-2.png" alt="" />
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="/public/assets/images/payment/payment-method-3.png" alt="" />
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="/public/assets/images/payment/payment-method-4.png" alt="" />
                    </div>
                    <label className="form-control pt-5 w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-white text-xl">Card holder name</span>
                        </div>
                        <input type="text" placeholder="Name" className="input input-bordered bg-black text-white input-accent w-full max-w-xs mb-5" />
                        <div className="label">
                            <span className="label-text text-white text-xl">Card number</span>
                        </div>
                        <input type="text" placeholder="XXXX   XXXX   XXXX   XXXX  " className="input input-bordered bg-black text-white input-accent w-full max-w-xs mb-5" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                            <div>
                                <div className="label">
                                    <span className="label-text text-white text-xl">Expiry date</span>
                                </div>
                                <input type="date" placeholder="dd/mm/yyyy" className="input input-bordered bg-black text-white input-accent w-full max-w-xs mb-5" />
                            </div>
                            <div>
                                <div className="label">
                                    <span className="label-text text-white text-xl">CVV</span>
                                </div>
                                <input type="number" placeholder="XXX" className="input input-bordered bg-black text-white input-accent w-full max-w-xs" />
                            </div>
                        </div>
                        <button className="btn btn-outline btn-accent w-28 rounded-3xl hover:font-bold mx-auto mt-4">Next</button>
                    </label>
                </div>
                <div className="p-10 md:p-16 lg:p-20 lg:mt-7">
                    <img className="h-[25rem] w-[32rem]" src="/public/assets/images/payment/payment-1.jpg" alt="" />
                    <div className="bg-[#2C2C2C] border-2 border-gray-500 p-5 mt-5 rounded-lg">
                        <h1 className="text-4xl font-semibold text-white">Plan price: <span className="text-yellow-400">1,50,000 BDT</span></h1>
                        <div className="pt-7 flex gap-2">
                            <img className="h-7 w-7" src="/public/assets/images/payment/piggy-bank.png" alt="" />
                            <div>
                                <h1 className="-mt-2 text-3xl text-white">you invest</h1>
                                <h1 className="text-2xl font-semibold text-white"><span className="text-yellow-400">৳25,000</span> per month</h1>
                                <h1 className="text-2xl font-light text-yellow-400">Total ৳1,50,000</h1>

                            </div>
                        </div>
                        <div className="pt-7 flex gap-2">
                            <img className="h-7 w-7" src="/public/assets/images/payment/currency.png" alt="" />
                            <div>
                                <h1 className="-mt-2 text-3xl text-white">you get</h1>
                                <div className="pt-5 md:flex lg:flex gap-2">
                                    <img className="h-14 w-14 pt-" src="/public/assets/images/payment/payment-1.jpg" alt="" />
                                    <h1 className="text-3xl font-bold text-white">+ <span className="text-yellow-400">৳15,000</span> <span className="font-extralight text-xl">(from brand deal & ROI)</span></h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetupPayment;