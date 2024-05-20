
const Congratulations = () => {
    return (
        <div className="bg-[#040404] py-32">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl lg:text-8xl font-bold">congratulations</h1>
                <img className="h-20 md:h-32 lg:h-56 w-20 md:w-32 lg:w-56" src="https://i.ibb.co/4pjd4F6/icon-4.png" alt="" />
            </div>
            <p className="text-center text-lg md:text-xl lg:text-2xl text-white">on planning ahead for the future!
                <br />
                <span className="loading loading-spinner text-white loading-lg pt-5"></span>
            </p>
        </div>
    );
};

export default Congratulations;