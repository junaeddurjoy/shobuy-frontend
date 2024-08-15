
const ComingSoon = () => {
    return (
        <div className="bg-[#040404] py-32">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-4xl md:text-5xl lg:text-8xl font-bold">coming soon</h1>
            </div>
            <p className="pt-10 pb-5 px-5 text-center text-lg md:text-xl lg:text-2xl text-white">put down your email and we will let you know when the service will be available
            </p>
            <div className="text-center">
                <input type="text" placeholder="Enter your email" className="bg-[#111111] rounded-3xl input input-bordered input-info w-full max-w-xs placeholder-[#A9A9A9]" />
                <button className="btn btn-outline btn-info ml-5 rounded-3xl px-8 mt-5 md:mt-0 lg:mt-0">Submit</button>
            </div>
        </div>
    );
};

export default ComingSoon;