
const Purchased = () => {
    return (
        <div>
            <div className="my-[2px] min-h-screen pb-20 bg-black">
                <div className="flex justify-center gap-10 lg:gap-20 bg-black py-10">
                    <p className="text-xl font-semibold text-white">Profile</p>
                    <p className="text-2xl font-bold text-white">Track purchase</p>
                    <p className="text-xl font-semibold text-white">Settings</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 py-10 mx-10 lg:mx-20 rounded-2xl bg-gradient-to-b from-[#F6F6F6] to-[#656565]">
                    <div className="lg:pl-10 py-10 col-span-2">
                        <h1 className="text-4xl lg:text-6xl font-bold pl-5">running plan</h1>
                        <div className="hero pt-5">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://i.ibb.co/LgnGdvN/product-1.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">Suzuki Gixxer 150</h1>
                                    <p className="py-6 text-4xl font-bold">Regular price</p>
                                    <p className="py-6 text-3xl font-bold">1,50,000 BDT</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full lg:w-1/2 mx-auto bg-[#FFDA00] text-black font-bold px-5 py-2 rounded-3xl">Pay next installment in advance</button>
                    </div>
                    <div className="pr-10 py-10 pl-5 lg:pl-0 my-auto">
                        <h3 className="text-3xl font-light">you’ve made it so far. just a little more.</h3>
                        <h1 className="text-4xl lg:text-6xl font-bold">progress bar</h1>
                        <input type="range" min={0} max="100" value="40" className="range range-warning mt-10 mb-5" />
                        <p className="py-3">more than 2 months has been completed</p>
                        <p className="text-xl font-bold">invested: 50,000 BDT</p>
                        <p className="py-6 text-xl font-bold">after 6 months you purchase the plan and earn 15,000 BDT. beating inflation alright! </p>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="content-end bg-[#B00000] text-white font-bold px-5 py-2 rounded-3xl">Cancel Plan</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box bg-black text-white">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg text-center">You were doing so great. <br />What happened!</h3>
                                <h3 className="font-bold text-lg">Warning: <span className="font-light"> Cancelling plan won’t earn you any rewards!</span> </h3>
                                <p className="py-4">Are you sure you want to cancel on your dream?</p>
                                <div className="text-center">
                                    <button className="mr-5 bg-[#FFDA00] text-black font-bold px-5 py-2 rounded-2xl">Keep Plan</button>
                                    <button className="ml-5 bg-[#B00000] text-white font-bold px-5 py-2 rounded-2xl" onClick={() => document.getElementById('my_modal_4').showModal()}>Cancel Plan</button>
                                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                                    <dialog id="my_modal_4" className="modal">
                                        <div className="modal-box bg-black text-white">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                            </form>
                                            <h3 className="font-bold text-lg text-center">Refund your installments</h3>
                                            <p className="py-4 text-center">You will only get back your saved amount.
                                                Shobuy will take maximum 7 days to refund your money upon completing due diligence. </p>
                                            <button className=" bg-[#FFDA00] text-black font-bold px-5 py-2 rounded-3xl">Call for refund</button>
                                        </div>
                                    </dialog>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchased;