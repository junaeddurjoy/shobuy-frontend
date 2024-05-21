import { FaHeart } from "react-icons/fa";

const Favorites = () => {
    return (
        <div className="min-h-screen">
            <div className="p-20">
                <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl">you favourites</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 gap-10">
                    <div>
                        <FaHeart className="absolute z-10 ml-5 mt-5 text-red-600 text-3xl" />
                        <img className="relative z-0 rounded-xl hover:opacity-80" src="https://i.ibb.co/LgnGdvN/product-1.jpg" alt="" />
                    </div>
                    <div>
                        <FaHeart className="absolute z-10 ml-5 mt-5 text-red-600 text-3xl" />
                        <img className="relative z-0 rounded-xl hover:opacity-80" src="https://i.ibb.co/2K8kgcY/modal-1.jpg" alt="" />
                    </div>
                    <div>
                        <FaHeart className="absolute z-10 ml-5 mt-5 text-red-600 text-3xl" />
                        <img className="relative z-0 rounded-xl hover:opacity-80" src="https://i.ibb.co/QMmtLQF/fav-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;