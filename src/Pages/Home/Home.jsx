import Marquee from "react-fast-marquee";

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

            {/* banner-4 start */}
            <div className="bg-[#E8F9EF]">
                <div className="py-20 px-16">
                    <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold pb-16">shopping’s new normal.</h1>
                    <div className=" lg:px-32 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                        <div>
                            <img className="h-32 w-32 mx-auto lg:mx-0" src="https://i.ibb.co/VWx0GKr/icon-1.png" alt="" />
                            <h3 className="font-extrabold text-2xl text-center lg:text-left">never pay interest</h3>
                            <p className="text-center lg:text-left">loans and EMIs drain away to hard earned money. rather save with us to live in luxury</p>
                        </div>
                        <div>
                            <img className="h-32 w-32 mx-auto lg:mx-0" src="https://i.ibb.co/5BHGRLd/icon-2.png" alt="" />
                            <h3 className="font-extrabold text-2xl text-center lg:text-left">never save in banks</h3>
                            <p className="text-center lg:text-left">saving in banks might put you in a loss because of the rising inflation. better buy what you want and earn money</p>
                        </div>
                        <div>
                            <img className="h-32 w-32 mx-auto lg:mx-0" src="https://i.ibb.co/h9kt7sy/icon-3.png" alt="" />
                            <h3 className="font-extrabold text-2xl text-center lg:text-left">no one give you extra but us</h3>
                            <p className="text-center lg:text-left">while you invest with us to buy luxury, we increase your money, delivering your desire with extra cash for you. so buy more for less </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner-4 end */}

            {/* banner-5 start */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/BsR7P1Y/banner-2.png)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-4xl md:text-6xl lg:text-8xl font-bold">beat interest & win inflation in 4 steps</h1>
                    </div>
                </div>
            </div>
            {/* banner-5 end */}

            {/* banner-6 start */}
            <div className="py-20 px-10 lg:px-20">
                <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold pb-10">earn whenever spending</h1>
                <img src="https://i.ibb.co/YLLh72q/banner-3.jpg"
                    className="mx-auto h-80 w-80 md:h-[480px] md:w-[480px] lg:h-[580px] lg:w-[580px] rounded-3xl" alt="" />
                {/* <p className="pt-16 text-center pb-10">The values are calculated based on 6 months, Average 8% ROI and 10% brand deal. The actual values may vary.</p> */}
                <div className="text-center py-10">
                    <button onClick={() => document.getElementById('my_modal').showModal()} className="btn text-white rounded-3xl px-14 text-xl bg-orange-500 font-bold hover:underline hover:bg-orange-600">Best Offer</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-2xl md:text-4xl lg:text-4xl">earn whenever spending</h3>
                            <div className="px-10 pt-2 pb-5">
                                <img className="rounded-2xl shadow-blue-300 shadow-xl" src="https://i.ibb.co/2K8kgcY/modal-1.jpg" alt="" />
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center">
                                    <h1 className="text-xl font-medium bg-black text-white">Market Price</h1>
                                    <h3 className="font-bold text-xl border-2 border-black">50,000 BDT</h3>
                                </div>
                                <div className="text-center">
                                    <h1 className="text-xl font-medium bg-black text-white">Discount Price</h1>
                                    <h3 className="font-bold text-xl border-2 border-black">40,000 BDT</h3>
                                </div>
                                <div className="text-center bg-red-600 text-white justify-center">
                                    <h3 className=" ">You Saved 
                                    <br />
                                    <span className="text-3xl font-mono">20%</span></h3>
                                </div>
                            </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>
                </div>
                <div className="pb-10">
                    <h1 className="text-center text-3xl md:text-6xl lg:text-7xl">brands supporting you</h1>
                </div>
                <Marquee>
                    <div className="flex gap-10">
                        <img className="h-20" src="https://i.ibb.co/GpppDfx/logo-1.jpg" alt="" />
                        <img className="h-20" src="https://i.ibb.co/ScvJvNR/logo-2.png" alt="" />
                        <img className="h-20" src="https://i.ibb.co/bJxFSdC/logo-3.png" alt="" />
                        <img className="h-20" src="https://i.ibb.co/hFb1Rfd/logo-4.png" alt="" />
                        <img className="h-20" src="https://i.ibb.co/SPSVF0n/logo-5.png" alt="" />
                        <img className="h-20" src="https://i.ibb.co/bvNcsJ2/logo-6.png" alt="" />
                        <img className="h-20 w-36 pr-8" src="https://i.ibb.co/12xM7Y5/logo-7.jpg" alt="" />
                    </div>
                </Marquee>
            </div>
            {/* banner-6 end */}

            {/* banner-7 start */}
            <div className="bg-black p-16">
                {/* slide-1 */}
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/XZSfQjW/slide-1.jpg"
                            className="md:h-[550px] md:w-[500px] lg:h-[600px] lg:w-[650px] rounded-lg shadow-2xl" />
                        <div className="md:px-16 lg:px-0">
                            <h1 className=" text-3xl md:text-4xl lg:text-7xl font-bold text-white">choose the product you desire</h1>
                            <p className="py-6  text-white lg:text-2xl">make that high-ticket purchase that will uplift you lifestyle. don’t worry about spending too much because we will make sure to return as much money as possible</p>

                        </div>
                    </div>
                </div>
                {/* slide-2 */}
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/bsWf76M/slide-2.jpg" className="md:h-[550px] md:w-[500px] lg:h-[600px] lg:w-[650px] rounded-lg shadow-2xl" />
                        <div className="md:px-16 lg:px-0">
                            <h1 className="text-3xl text-right md:text-4xl lg:text-7xl font-bold text-white">schedule your monthly auto-investments</h1>
                            <p className="py-6 text-right text-white lg:text-2xl">select auto-investment at ease. don’t put too much pressure and setup the timeline that benefits you</p>
                        </div>
                    </div>
                </div>
                {/* slide-3 */}
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/zJ4BgzQ/slide-3.webp"
                            className="md:h-[550px] md:w-[500px] lg:h-[600px] lg:w-[650px] rounded-lg shadow-2xl" />
                        <div className="md:px-16 lg:px-0">
                            <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-white">see your fund grow</h1>
                            <p className="py-6 text-white lg:text-2xl">enjoy excellent returns from Mutual funds that grow and grow every month you had setup the purchase plan for</p>

                        </div>
                    </div>
                </div>
                {/* slide-4 */}
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="https://i.ibb.co/p4CmsZR/slide-4.jpg" className="md:h-[550px] md:w-[500px] lg:h-[600px] lg:w-[650px] rounded-lg shadow-2xl" />
                        <div className="md:px-16 lg:px-0">
                            <h1 className="text-3xl text-right md:text-4xl lg:text-7xl font-bold text-white">in the end, you win big</h1>
                            <p className="py-6 text-right text-white lg:text-2xl">after the completion of your purchasing plan you get the high-ticket product and cash rewards from brand deals and investments</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner-7 end */}

            {/* banner-8 start */}
            <div className="bg-[#D9E4FC] py-10">
                <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold pb-10">meet smart spenders</h1>
                <Marquee>
                    <img className="h-96" src="https://i.ibb.co/yW9wM40/slide-5.jpg" alt="" />
                    <img className="h-96" src="https://i.ibb.co/yW9wM40/slide-5.jpg" alt="" />
                    <img className="h-96" src="https://i.ibb.co/yW9wM40/slide-5.jpg" alt="" />
                </Marquee>
                <div className="text-center pt-10">
                    <button className="btn btn-warning rounded-3xl px-14 text-xl bg-[#FFDA00] font-bold hover:underline hover:bg-[#FFDA00]">Marketplace</button>
                </div>
            </div>
            {/* banner-8 end */}
        </div>

    );
};

export default Home;