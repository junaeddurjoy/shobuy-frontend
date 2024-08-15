
const Payment = () => {
    return (
        <div className="my-[2px] min-h-screen bg-black">
            <div className="flex justify-center gap-10 lg:gap-20 bg-black py-10">
                <p className="text-xl font-semibold text-white">Profile</p>
                <p className="text-xl font-semibold text-white">Track purchase</p>
                <p className="text-2xl font-bold text-white">Settings</p>
            </div>
            <div className="py-10 px-10 lg:px-20 bg-black text-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                    <div className="border border-[#2F2F2F] p-5 rounded-3xl">
                        <p className="bg-[#252525] pl-10 py-3 rounded-3xl text-lg hover:opacity-75 mb-3">edit profile</p>
                        <p className="bg-[#252525] pl-10 py-3 rounded-3xl text-lg hover:opacity-75 mb-3">payment settings</p>
                        <p className="bg-[#252525] pl-10 py-3 rounded-3xl text-lg hover:opacity-75 mb-3">shipping settings</p>
                    </div>
                    <div className="lg:col-span-2 ">
                        <div className="border border-[#2F2F2F] bg-gradient-to-b rounded-3xl from-[#1A1A1A] to-[#000000] flex items-center justify-around py-3 mb-5">
                            <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/Jv1463h/payment-method-3.png" alt="" />
                            <p className="text-2xl font-light">Junaed Hossain</p>
                            <button className="bg-[#FF0F00] w-28 py-2 text-white font-semibold rounded-xl" onClick={() => document.getElementById('my_modal_2').showModal()}>Remove</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box bg-[#1A1A1A] text-white text-center">
                                    <h3 className="font-bold text-lg">Add another payment method first</h3>
                                    <p className="py-4 text-xl font-light">To remove the current payment method, you need to add another payment method first in order to continue your plan.</p>
                                    <button className="bg-[#FFDA00] w-28 py-2 text-black font-semibold rounded-xl">Add</button>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                        <div className="border border-[#2F2F2F] bg-gradient-to-b rounded-3xl from-[#1A1A1A] to-[#000000] flex items-center justify-around py-3">
                            <p className="text-2xl font-light">Add another payment method</p>
                            <button className="bg-[#FFDA00] w-28 py-2 text-black font-semibold rounded-xl " onClick={() => document.getElementById('my_modal_3').showModal()}>Add</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box bg-gradient-to-b from-[#011226] to-[#000000]">
                                    <div className="my-10 ml-3 lg:ml-10">
                                        <h1 className=" text-white text-3xl md:text-4xl lg:text-5xl pb-10">Set up payment method</h1>
                                        <div className="flex items-center gap-5 pt-2 pb-10">
                                            <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/dBfrTvZ/payment-method-1.png" alt="" />
                                            <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/VvkzdnH/payment-method-2.png" alt="" />
                                            <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/Jv1463h/payment-method-3.png" alt="" />
                                            <img className="h-10 w-14 rounded-xl hover:border-2 ]" src="https://i.ibb.co/72G859q/payment-method-4.png" alt="" />
                                        </div>
                                        <label className="form-control pt-5 w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text text-white text-xl">Enter your bKash number</span>
                                            </div>
                                            <input type="text" placeholder="Number" className="input input-bordered bg-black text-white input-accent w-full max-w-xs mb-5" />
                                            <button className="btn btn-outline btn-accent w-28 rounded-3xl hover:font-bold mx-auto mt-4" onClick={() => document.getElementById('my_modal_5').showModal()}>Next</button>
                                            <dialog id="my_modal_5" className="modal">
                                                <div className="modal-box bg-gradient-to-b from-[#011226] to-[#000000]">
                                                    <form method="dialog">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                                    </form>
                                                    <div className="my-10 ml-3 lg:ml-10">
                                                        <h1 className=" text-white text-4xl pb-5">Set up payment method</h1>
                                                        <div className="flex items-center gap-5 pt-2 pb-5">
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
                                                            <button className="btn btn-outline btn-accent w-28 rounded-3xl hover:font-bold mx-auto mt-4">Confirm</button>
                                                        </label>
                                                    </div>
                                                </div>
                                            </dialog>
                                        </label>
                                    </div>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                        <div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Payment;