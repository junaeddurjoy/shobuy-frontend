
const Settings = () => {
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
                    <div className="lg:col-span-2 border border-[#2F2F2F] bg-gradient-to-b rounded-3xl from-[#1A1A1A] to-[#000000]">
                        <div className=" pl-10">
                            <h1 className="py-5 text-3xl font-light">Image</h1>
                            <input type="file" className="w-2/3 py-3 pl-8 bg-[#060606] border border-[#343434] placeholder-[#343434] rounded-3xl  " placeholder="Choose Image" />
                        </div>
                        <div className=" pl-10">
                            <h1 className="py-5 text-3xl font-light">Name</h1>
                            <input type="text" className="w-2/3 py-3 pl-8 bg-[#060606] border border-[#343434] placeholder-[#343434] rounded-3xl  " placeholder="New Name" />
                        </div>
                        <div className="pl-10">
                            <h1 className="py-5 text-3xl font-light">Email</h1>
                            <input type="text" className="w-2/3 py-3 pl-8 bg-[#060606] border border-[#343434] placeholder-[#343434] rounded-3xl  " placeholder="New Email" />
                        </div>
                        <div className=" pl-10">
                            <h1 className="py-5 text-3xl font-light">Phone No</h1>
                            <input type="text" className="w-2/3 py-3 pl-8 bg-[#060606] border border-[#343434] placeholder-[#343434] rounded-3xl  " placeholder="New Phone Number" />
                        </div>
                        <button className="bg-[#FFDA00] my-5 ml-[80px] md:ml-48 lg:ml-64  px-9 py-3 text-black font-bold rounded-xl">Save</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Settings;