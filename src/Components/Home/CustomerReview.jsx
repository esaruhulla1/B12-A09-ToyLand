import React from 'react';
import { FaStar } from 'react-icons/fa';

const CustomerReview = () => {
    
    const reviews = [
        {
            id: 1,
            name: "Amina Rahman",
            comment: "The toys are amazing! My kids absolutely love them. Delivery was fast and packaging was perfect.",
            rating: 5,
            image: "https://i.pravatar.cc/100?img=1"
        },
        {
            id: 2,
            name: "Rafiq Hasan",
            comment: "Good quality and very safe for children. Highly recommend the educational toys section.",
            rating: 4,
            image: "https://i.pravatar.cc/100?img=5"
        },
        {
            id: 3,
            name: "Sadia Karim",
            comment: "Affordable and colorful toys. My daughter loved the stuffed teddy!",
            rating: 5,
            image: "https://i.pravatar.cc/100?img=8"
        },
    ];

    return (
        <div className=" py-24 px-6 md:px-1 my-15">
            <h2 className="text-3xl font-bold text-center mb-15 ">
                What Our Customers Say 💬
            </h2>
            <div className="  grid grid-cols-1 md:grid-cols-3 gap-5">
                {reviews.map((review) => (
                    <div
                        key={review.id}
                        className="bg-white h-[200px]  rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
                        <div className="flex items-center pt-2 mb-4">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-14 h-14 rounded-full mr-4 border-2 border-pink-400"
                            />

                            <div>
                                <h3 className="font-semibold text-lg">{review.name}</h3>
                                <div className="flex text-yellow-400">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} />
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                        <p className="text-gray-600 text-sm italic">“{review.comment}”</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerReview;
