import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BidPostCard = ({ post }) => {
    const { _id, image, product_name, title, category, price } = post;

    return (
        <div className="max-w-xs w-full bg-white shadow-lg rounded-lg overflow-hidden m-4 transition-transform duration-300 transform hover:scale-105">
            <div className="relative overflow-hidden">
                <FaHeart className="absolute top-0 left-0 mt-2 ml-2 text-red-500 text-xl z-10 opacity-0 transition-opacity duration-300" />
                <div className="font-bold text-xl mb-2 absolute top-16 left-8">{product_name} @ <h1 className="text-xl md:text-2xl text-white font-bold"><span className="text-orange-600">Bid</span><span className="text-purple-600">Day</span></h1></div>
                <img className="w-full" src={image} alt={title} />
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">Bid start from: ${price}</p>
            </div>
            <div className="px-6 py-4">
                <Link to={`/details/${_id}`} className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default BidPostCard;