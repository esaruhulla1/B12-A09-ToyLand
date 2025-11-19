import React from 'react';
import { FaHandshake, FaTruckFast, FaShieldHalved, } from 'react-icons/fa6';

const WhyChooseUs = () => {
    const reasons = [
        {
            id: 1,
            icon: <FaHandshake className="text-pink-500 text-4xl mb-4" />,
            title: "Support Local Sellers",
            desc: "We connect families with trusted local toy shops, helping small businesses thrive while providing high-quality toys for your kids."
        },
        {
            id: 2,
            icon: <FaShieldHalved className="text-blue-500 text-4xl mb-4" />,
            title: "Safe & Verified Toys",
            desc: "Each toy is quality-checked to ensure it is safe, durable, and perfect for your child’s playtime."
        },
        {
            id: 3,
            icon: <FaTruckFast className="text-green-500 text-4xl mb-4" />,
            title: "Fast & Reliable Delivery",
            desc: "Get your orders delivered quickly and securely—because your child’s happiness is our priority."
        },
        {
            id: 4,
            icon: <FaShieldHalved className="text-yellow-500 text-4xl mb-4" />,
            title: "Happy Kids, Happy Parents",
            desc: "Our mission is simple — to bring joy and learning to every child through fun and play."
        },
    ];

    return (
        <div className=" to-white mb-30 px-6 md:px-1 text-center">
            <h2 className="text-3xl md:text-4xl font-bold  mb-15">
                Why Choose Us 💖
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {reasons.map((item) => (
                    <div
                    
                        key={item.id}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300"
                    >
                        <div className="flex flex-col items-center">
                            {item.icon}
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
