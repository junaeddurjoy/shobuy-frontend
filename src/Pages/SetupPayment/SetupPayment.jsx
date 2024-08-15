
const SetupPayment = () => {
    return (
        <div className="p-10 lg:p-20 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-3 bg-gradient-to-b from-[#011226] to-[#000000] rounded-2xl">
                <div className="my-10 ml-3 lg:ml-10">
                    <h1 className=" text-white text-3xl md:text-4xl lg:text-5xl pb-10">Set up payment method</h1>
                    <div className="flex items-center gap-5 pt-2 pb-10">
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/dBfrTvZ/payment-method-1.png" alt="" />
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/VvkzdnH/payment-method-2.png" alt="" />
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/Jv1463h/payment-method-3.png" alt="" />
                        <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/72G859q/payment-method-4.png" alt="" />
                    </div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-white text-xl">Card holder name</span>
                        </div>
                        <input type="text" placeholder="Name" className="input input-bordered bg-black text-white input-accent w-full max-w-xs " />
                        <div className="label">
                            <span className="label-text text-white text-xl">Card number</span>
                        </div>
                        <input type="text" placeholder="XXXX   XXXX   XXXX   XXXX  " className="input input-bordered bg-black text-white input-accent w-full max-w-xs" />
                        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                            <div>
                                <div className="label">
                                    <span className="label-text text-white text-xl">Expiry date</span>
                                </div>
                                <input type="date" placeholder="dd/mm/yyyy" className="input input-bordered bg-black text-white input-accent w-full max-w-xs" />
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
                <div className="lg:-ml-14 mx-5 lg:my-16">
                    <img className="h-[30rem] w-[32rem] rounded-xl" src="https://i.ibb.co/LgnGdvN/product-1.jpg" alt="" />
                </div>
                <div className="lg:my-16 h-[30rem] bg-[#2C2C2C] border-2 border-gray-500 p-5 m-7 rounded-lg">
                    <h1 className="text-4xl font-semibold text-white">Plan price: <span className="text-yellow-400">1,50,000 BDT</span></h1>
                    <div className="pt-7 flex gap-2">
                        <img className="h-7 w-7" src="https://i.ibb.co/3pc7dB5/piggy-bank.png" alt="" />
                        <div>
                            <h1 className="-mt-2 text-3xl text-white">you invest</h1>
                            <h1 className="text-2xl font-semibold text-white"><span className="text-yellow-400">৳25,000</span> per month</h1>
                            <h1 className="text-2xl font-light text-yellow-400">Total ৳1,50,000</h1>
                        </div>
                    </div>
                    <div className="pt-7 flex gap-2">
                        <img className="h-7 w-7" src="https://i.ibb.co/NFVXrM3/currency.png" alt="" />
                        <div>
                            <h1 className="-mt-2 text-3xl text-white">you get</h1>
                            <div className="pt-5 ">
                                <img className="h-14 w-14 pt-" src="https://i.ibb.co/LgnGdvN/product-1.jpg" alt="" />
                                <h1 className="text-3xl font-bold text-white">+ <br /> <span className="text-yellow-400">৳15,000</span> <span className="font-extralight text-xl">(from brand deal & ROI)</span></h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetupPayment;