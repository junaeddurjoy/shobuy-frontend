
const Home = () => {
    return (
        <div>
            {/* banner-1 start*/}
            <div className="bg-[#131313] text-white">
                <p className="text-center pt-20 text-[30px] md:text-[60px] lg:text-[90px] font-bold">now <span className="text-[#FFDA00]">shobuy</span> will earn <br />cash rewards for <br /> planning <span className="text-[#FFDA00]">Travel.</span></p>
                <p className="text-center py-5 text-[14px] md:text-[24px] lg:text-[32px] font-thin">stay ahead of the money game, plan purchase for less</p>
                <div className="text-center pb-28">
                    <button className="btn btn-warning rounded-3xl px-8 bg-[#FFDA00] font-bold hover:underline hover:bg-[#FFDA00]">Marketplace</button>
                </div>
            </div>
            {/* banner-1 end */}

            {/* banner-2 start */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.webbikeworld.com/wp-content/uploads/2021/02/2021-Yamaha-YZ450F-16-1446x813.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="text-white  lg:-ml-[400px]">
                    <p className="pt-20  text-[30px] md:text-[60px] lg:text-[90px] font-bold">
                        we take your money <br /> matters seriously.
                    </p>
                    <p className="pt-3  text-[10px] md:text-[20px] lg:text-[30px] font-bold gap-0">
                        so that you don’t get ruined by <br /> inflation or interest.
                    </p>
                    <p className="py-5 text-[10px] md:text-[15px] lg:text-[20px] font-thin">
                        never again save money in banks to buy your dream wedding or <br /> travel to a distant place. never again pay interest on your desires.
                    </p>
                    <div className="pb-28">
                        <button className="btn btn-warning rounded-3xl px-8 bg-white font-bold hover:underline hover:bg-white">Tell me more</button>
                    </div>
                </div>
            </div>
            {/* banner-2 end */}

            {/* banner-3 start */}
            <div className="bg-black text-white px-10 py-20">
                <p className="text-center text-3xl md:text-4xl lg:text-6xl font-bold">always play for the winning team</p>
                <p className="text-center md:text-xl lg:text-3xl font-thin pt-1 md:pt-2 lg:pt-4 pb-5">get up to 20% discount on your purchasing plans</p>
                {/* grid */}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-5">
                    {/* img 1 */}
                    <div className="hero h-[18rem] rounded-2xl col-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/0c5vThH/banner-grid-1.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <p className="mb-5 text-2xl text-white drop-shadow-xl pb-16 md:pb-24 lg:pb-24">Discount upto <br /> <span className="text-3xl font-bold">18%</span></p>
                                <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Travel anywhere</h1>
                            </div>
                        </div>
                    </div>
                    {/* img 2 */}
                    <div className="hero rounded-2xl col-span-2 row-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/N2Nqqy7/banner-grid-4.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <p className="mb-5 text-2xl text-white drop-shadow-xl pb-96">Discount upto <br /> <span className="text-3xl font-bold">8%</span></p>
                                <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Dream bike</h1>
                            </div>
                        </div>
                    </div>
                    {/* img 3 */}
                    <div className="hero h-[18rem] rounded-2xl col-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/ZRsYCC3/banner-grid-5.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <p className="mb-5 text-2xl text-white drop-shadow-xl pb-20">Discount upto <br /> <span className="text-3xl font-bold">10%</span></p>
                                <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Wedding</h1>
                            </div>
                        </div>
                    </div>
                    {/* img 4 */}
                    <div className="hero h-[18rem] rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/yy4Qj4w/banner-grid-2.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <p className="mb-5 text-xl text-white drop-shadow-xl pb-28">Discount upto <br /> <span className="text-2xl font-bold">20%</span></p>
                                <h1 className="mb-5 text-4xl font-bold text-white drop-shadow-xl">Gadgets</h1>
                            </div>
                        </div>
                    </div>
                    {/* img 5 */}
                    <div className="hero h-[18rem] rounded-2xl" style={{ backgroundImage: 'url(https://i.ibb.co/1TptHkZ/banner-grid-3.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <p className="mb-5 text-xl text-white drop-shadow-xl pb-28">Discount upto <br /> <span className="text-2xl font-bold">6%</span></p>
                                <h1 className="mb-5 text-4xl font-bold text-white drop-shadow-xl">Gifts</h1>
                            </div>
                        </div>
                    </div>
                    {/* img 6 */}
                    <div className="hero h-[18rem] rounded-2xl col-span-2" style={{ backgroundImage: 'url(https://i.ibb.co/60V70wP/banner-grid-6.jpg)' }}>
                        <div className="hero-overlay bg-opacity-20"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <p className="mb-5 text-2xl text-white drop-shadow-xl pb-28">Discount upto <br /> <span className="text-3xl font-bold">12%</span></p>
                                <h1 className="mb-5 text-5xl font-bold text-white drop-shadow-xl">Date night</h1>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* banner-3 end */}
        </div>
    );
};

export default Home;