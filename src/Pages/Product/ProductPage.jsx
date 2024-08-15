import { FaRegHeart } from "react-icons/fa";

const ProductPage = () => {
    return (
        <div className="">
            <div className="">
                <div className="hero min-h-screen bg-black">
                    <div className="hero-content flex-col lg:flex-row ">
                        <div className="carousel w-full rounded-xl">
                            <div id="slide1" className="carousel-item relative w-full rounded-lg">
                                <img src="https://i.ibb.co/LgnGdvN/product-1.jpg" className="w-full rounded-xl" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide2" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/dp61SMq/product-6.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" className="btn btn-circle">❮</a>
                                    <a href="#slide3" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/ggZj0Dt/product-2.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" className="btn btn-circle">❮</a>
                                    <a href="#slide4" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/928KZRZ/product-4.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide3" className="btn btn-circle">❮</a>
                                    <a href="#slide5" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide5" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/ZfwzBc6/product-3.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" className="btn btn-circle">❮</a>
                                    <a href="#slide6" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide6" className="carousel-item relative w-full">
                                <img src="https://i.ibb.co/7GWPFCm/product-5.jpg" className="w-full" />
                                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide5" className="btn btn-circle">❮</a>
                                    <a href="#slide1" className="btn btn-circle">❯</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-5xl font-bold text-white">Suzuki Gixxer 150</h1>
                            <p className="pb-10 text-white">The Suzuki Gixxer is powered by a 155 cc air-cooled engine which produces 13.6 PS @ 8000 rpm of power. It has a fuel tank of 12 L and a claimed mileage of 45 kmpl. </p>
                            <h1 className="text-3xl font-semibold text-white">Regular price</h1>
                            <h1 className="text-4xl font-semibold text-white">1,50,000 BDT</h1>
                            <div className="pt-10 flex gap-5">
                                <div className=" bg-[#313131] rounded-3xl ">
                                    <button className="btn btn-neutral rounded-xl"><FaRegHeart className="text-3xl text-white" /></button>
                                </div>
                                <button className="btn btn-warning font-bold bg-yellow-400 hover:bg-yellow-500 rounded-3xl px-6">Plan purchase</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ProductPage;