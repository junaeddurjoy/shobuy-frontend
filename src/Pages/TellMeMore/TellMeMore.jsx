
const TellMeMore = () => {
    return (
        <div>
            <div className="bg-[#0C0C0C] p-10 md:p-16 lg:p-20 flex-none lg:flex items-center">
                <div className="lg:w-1/2 text-4xl md:text-6xl lg:text-8xl font-bold text-white pb-10">
                    current spending models
                </div>
                <div className="lg:w-1/2 text-white text-2xl">
                    <div className="flex items-center gap-5 pb-10">
                        <img className="w-20" src="/public/assets/images/icons/return.png" alt="" />
                        <p>no/low returns</p>
                    </div>
                    <div className="flex items-center gap-5 pb-10">
                        <img className="w-20" src="/public/assets/images/icons/debt.png" alt="" />
                        <p>debt trap</p>
                    </div>
                    <div className="flex items-center gap-5 pb-10">
                        <img className="w-20" src="/public/assets/images/icons/interest-rate.png" alt="" />
                        <p>interest penalty</p>
                    </div>
                    <div className="flex items-center gap-5">
                        <img className="w-20" src="/public/assets/images/icons/save-money.png" alt="" />
                        <p>mindless spending</p>
                    </div>
                </div>
            </div>
            {/* hero section */}
            <div className="hero text-white bg-black py-10 lg:py-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src="https://i.ibb.co/kXdQCBV/tellmemore-1.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className="lg:w-1/2">
                        <h1 className="text-5xl font-bold">let’s understand through a story</h1>
                        <h1 className="text-3xl font-bold pt-5">background.</h1>
                        <p className="pt-3 pb-6 font-normal">A couple decided to get married and starts saving money in the bank for their wedding. Born into a middle-class household, both of them have great aspirations for a wedding ceremony. They want to create a luxurious ceremony to surprises and exceed expectations from friends, and families, and their social media accounts. </p>
                        <h1 className="text-3xl font-bold">reality.</h1>
                        <p className="pt-3 pb-6 font-normal">Back when the couple started saving they only needed 15 lacs BDT to arrange their dream wedding. But now after a year when they sit down to calculate the expenses again they realize they are short about 1.5 lacs BDT. That’s right! Inflation!
                            <br />
                            <br />
                            So they to take out a loan from a bank to meet their expenses, and thus bear a 10% interest. </p>
                    </div>
                </div>
            </div>
            {/* know shobuy */}
            <div className="bg-[#0A0012] px-10 lg:px-20 py-10 lg:py-16">
                <h1 className="text-center text-5xl lg:text-7xl text-white font-semibold">if only they knew <span className="text-[#FFDA00]">shobuy</span></h1>
                <div className="hero pt-10">
                    <div className="hero-content text-white text-right flex-col lg:flex-row gap-10">
                        <img src="https://i.ibb.co/nCG0pK0/tellmemore-gift.jpg" className="lg:max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-3xl font-bold">had they invested in shobuy</h1>
                            <p className="py-6 text-xl">
                                Investment timeline = 1 year
                                <br />Total budget = 15 lacs BDT
                                <br />Monthly installment = 1.25 lacs BDT
                                <br />(1.25 lacs X 12 months = 15 lacs)
                                <br />
                                <br />Save up to 10%
                                <br />After the completion of plan,
                                <br />Get the dream wedding + 1.5 lacs BDT
                                <br />
                                <br />You earn extra 1.5 lacs BDT!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* strategy */}
            <div className="bg-black text-white p-20">
                <h1 className="text-center text-4xl md:text-5xl lg:text-7xl text-white font-semibold">our investment strategy</h1>
                <div className="pt-10 lg:flex gap-10 lg:gap-40 justify-center">
                    <div>
                        <img className="w-44 mx-auto" src="https://i.ibb.co/qmVzZGF/buildings.png" alt="" />
                        <p className="pt-4 font-medium text-xl text-center">partnered with country’s <br /> finest asset management <br /> companies and securities</p>
                    </div>
                    <div>
                        <img className="w-44 pt-8 lg:pt-0 mx-auto" src="https://i.ibb.co/PwMPNPB/compliance.png" alt="" />
                        <p className="pt-4 font-medium text-xl text-center">advanced risk management <br /> through experienced  <br /> money managers</p>
                    </div>
                    <div>
                        <img className="w-44 pt-8 lg:pt-0 mx-auto" src="https://i.ibb.co/jhZxFDp/paint.png" alt="" />
                        <p className="pt-4 font-medium text-xl text-center">enough cash at hand to <br /> return your investment in <br /> any period of time</p>
                    </div>
                </div>
            </div>
            {/* shobuy impact */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/WkztCww/banner-2.png)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl lg:text-6xl font-bold">why <span className="text-[#FFDA00]">shobuy</span> impacts you positively</h1>
                        <div className="mt-10 md:flex lg:fle items-center justify-center gap-10">
                            <div className="w-36 h-36 mx-auto mb-5 md:mb-0 lg:mb-0 border-2 rounded-full bg-black hover:bg-slate-800 text-[#FFDA00]"><p className="mt-10">build superior money habit</p></div>
                            <div className="w-36 h-36 mx-auto mb-5 md:mb-0 lg:mb-0 border-2 rounded-full bg-black hover:bg-slate-800 text-[#FFDA00]"><p className="mt-9">zero commission on payments & withdrawals</p></div>
                            <div className="w-36 h-36 mx-auto mb-5 md:mb-0 lg:mb-0 border-2 rounded-full bg-black hover:bg-slate-800 text-[#FFDA00]"><p className="mt-11">earn your purchase & cash rewards</p></div>
                            <div className="w-36 h-36 mx-auto mb-5 md:mb-0 lg:mb-0 border-2 rounded-full bg-black hover:bg-slate-800 text-[#FFDA00]"><p className="mt-14">no interest</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TellMeMore;