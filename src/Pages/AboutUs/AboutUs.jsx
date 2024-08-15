
const AboutUs = () => {
    return (
        <div>
            <div className="p-10  lg:p-20">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">about <span className="text-yellow-400">shobuy</span></h1>
                <p className="py-5 lg:py-10">
                    shobuy is the first “save now, buy later” platform in Bangladesh that rewards individuals to invest in purchasing plans for any goals, whether it is shopping, traveling, or a wedding, by providing them with exclusive brand offers and investment returns. It is a platform that allows everyday people to plan future purchases and invest money in monthly installments, saving individuals from debt and interest. Users planning their tours, weddings, or shopping with shobuy can expect more while paying less. Among many of the features in the app are shobuy’s spending calculator to enhance users’ understanding of the money flow, smart tracking and reminding, and auto-investment for a hassle-free experience that increases efficiency as a whole.
                </p>
                <p className="pb-5 lg:pb-10">
                    shobuy is also equipped with an AI backed system that keeps track of every single purchasing plan you make and keeps you updated on the journey - right from due date reminders, spend patterns and other usage statistics. Additionally, when a user reaches a certain credit score, they are eligible to a variety of rewards of various forms such as access to events, experiences, gift cards, etc.
                </p>
                <p>
                    shobuy is on a mission to become a company that earns the most benefits for its consumers when planning their purchases. Because less than 1% of the total population in Bangladesh has access to credit cards, even those who do are paying heavy interest. Those who  don’t , save money in the bank to make high-ticket purchases at a later date, only to wash away all their savings in inflation. shobuy is increasing its purchasing power. So you and I can enjoy the luxury with ease.
                </p>
            </div>
            <div className="text-center pb-20 px-10 lg:px-20 rounded-3xl">
                <div className="join join-vertical lg:join-horizontal w">
                    <div className="lg:w-1/2 join-item p-10 md:p-20 lg:p-20 bg-[#D9E4FC] hover:bg-[#D9E4FC]">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-left pb-5">mission</h2>
                        <p className="text-xl text-left">
                            To become a company that earns the most benefits for its consumers on their purchases
                        </p>
                    </div>
                    <div className="lg:w-1/2 join-item p-10 md:p-20 lg:p-20  bg-[#E8F9EF] hover:bg-[#E8F9EF]">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-left pb-5">vision</h2>
                        <p className="text-xl text-left">
                            To build a marketplace where people can invest and plan to buy anything they might want to own
                        </p>
                    </div>
                </div>

            </div>

            {/* <div className="px-10 lg:px-20 pb-20 pt-10 bg-[#EFEFEF]">
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center pb-10">save your money with sales and discounts</h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-0 gap-y-0">
                    <img className="h-[30rem] md:h-[60rem] lg:h-[30rem] w-full" src="public/assets/images/about/about-6.jpg" alt="" />
                    <img className="col-span-2 h-[16rem] md:h-[30rem] lg:h-[30rem] w-full" src="public/assets/images/about/about-10.avif" alt="" />
                    <img className="h-[30rem] md:h-[60rem] lg:h-[30rem] w-full" src="public/assets/images/about/about-9.jpg" alt="" />
                    <img className="col-span-2 h-[16rem] md:h-[30rem] lg:h-[30rem] w-full" src="public/assets/images/about/about-6.avif" alt="" />
                    <img className="col-span-2 h-[16rem] md:h-[30rem] lg:h-[30rem] w-full" src="public/assets/images/about/about-3.avif" alt="" />
                    <img className="col-span-2 h-[16rem] md:h-[30rem] lg:h-[30rem] w-full" src="public/assets/images/about/about-2.jpg" alt="" />
                    <img className="col-span-2 h-[16rem] md:h-[30rem] lg:h-[30rem] w-full" src="public/assets/images/about/about-5.jpg" alt="" />
                </div>
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold text-center text-base-300 -mb-[5px] md:-mb-1 lg:-mb-3">Save With SHOBUY!</h1>
            <div className="px-10 lg:px-20 pb-10 bg-[#EFEFEF]">
                {/* <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center">save your money with sales and discounts</h1> */}
                <div className="p-10 lg:p-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center">
                    <div className="bg-[#FFE6FB]">
                        <figure>
                            <img src="https://i.ibb.co/b68yBLQ/person-1.png" alt="" />
                        </figure>
                        <figcaption className="text-xl bg-black text-white">Responsibility</figcaption>
                    </div>
                    <div className="bg-[#C6FFF5] pt-0 md:pt-[0.8px] lg:pt-0">
                        <figure>
                            <img src="https://i.ibb.co/VtH8qzz/person-2.png" alt="" />
                        </figure>
                        <figcaption className="text-xl bg-black text-white">Trust</figcaption>
                    </div>
                    <div className="bg-[#bee2cd]">
                        <figure>
                            <img src="https://i.ibb.co/NTHNMgz/person-3.png" alt="" />
                        </figure>
                        <figcaption className="text-xl bg-black text-white">Togetherness</figcaption>
                    </div>
                    <div className="bg-[#f8fccc]">
                        <figure>
                            <img src="https://i.ibb.co/TDQmj1p/person-4.png" alt="" />
                        </figure>
                        <figcaption className="text-xl bg-black text-white">Commitment</figcaption>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;