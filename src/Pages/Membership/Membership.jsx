
const Membership = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-[url('https://i.ibb.co/pPdpM5V/background-2.jpg')] p-10 min-h-screen bg-opacity-30">
            <div className="text-3xl md:text-5xl lg:text-7xl text-white font-semibold md:p-10 lg:p-10">
                welcome to the club. claim your membership
            </div>
            <div className="bg-gradient-to-t from-[#222222] to-[#050505] shadow-2xl rounded-2xl w-[w-[316px]] lg:w-[616px] h-[360px] lg:h-[720px]">
                <div className="text-3xl md:text-5xl lg:text-5xl px-10 pt-10 text-white font-semibold">
                    verify your details and <span className="text-[#E1E1E161]">claim what’s yours</span>
                </div>
                <div className="flex items-center gap-2">
                    <p className="text-[#B3B3B3] pl-10 pt-5">already a member? </p>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-warning mt-5" />
                </div>
                <label className="form-control w-full max-w-xs mx-auto pt-10">
                    <div className="label">
                        <span className="label-text text-white text-xl">Name</span>
                    </div>
                    <input type="text" placeholder="Name" className="input input-bordered bg-black text-white input-warning w-full max-w-xs " />
                    <div className="label">
                        <span className="label-text text-white text-xl">Email ID</span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered bg-black text-white input-warning w-full max-w-xs" />
                    <div className="label">
                        <span className="label-text text-white text-xl">Phone Number</span>
                    </div>
                    <input type="text" placeholder="Email" className="input input-bordered bg-black text-white input-warning w-full max-w-xs" />

                    <button className="btn btn-outline btn-warning w-28 rounded-3xl hover:font-bold mx-auto mt-4">Next</button>
                </label>
            </div>
        </div>
    );
};

export default Membership;