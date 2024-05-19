
const ProductCollection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            <div className="md:row-span-2 lg:row-span-2 md:col-span-2 lg:col-span-2 h-[20rem] md:h-[20rem] lg:h-[40rem] hero" style={{ backgroundImage: 'url(https://i.ibb.co/xqYL7xp/collection-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-left text-neutral-content ">
                    <div className="">
                        <h1 className="mb-5 text-2xl lg:text-5xl font-bold text-white shadow-2xl">Suzuki Gixxer 150</h1>
                        <button className="btn btn-warning font-bold bg-yellow-400 hover:bg-yellow-500 rounded-3xl px-6">Plan purchase</button>
                    </div>
                </div>
            </div>
            <div>
                <div className=" hero -z-10 h-[20rem] md:h-[10rem] lg:h-[20rem]" style={{ backgroundImage: 'url(https://i.ibb.co/wysTPT2/collection-2.jpg.jpg)' }}>
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-left text-neutral-content ">
                        <div className="">
                            <h1 className="mb-5 text-2xl lg:text-5xl font-bold text-white shadow-2xl">Suzuki Gixxer SB</h1>
                            <button className="btn btn-warning font-bold bg-yellow-400 hover:bg-yellow-500 rounded-3xl px-6">Plan purchase</button>
                        </div>
                    </div>
                </div>
                <div className="hero -z-10 h-[20rem] md:h-[10rem] lg:h-[20rem]" style={{ backgroundImage: 'url(https://i.ibb.co/6JGyXKw/collection-3.png)' }}>
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-left text-neutral-content ">
                        <div className="">
                            <h1 className="mb-5 text-2xl lg:text-5xl font-bold text-white shadow-2xl">Yamaha Fazer F1</h1>
                            <button className="btn btn-warning font-bold bg-yellow-400 hover:bg-yellow-500 rounded-3xl px-6">Plan purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCollection;