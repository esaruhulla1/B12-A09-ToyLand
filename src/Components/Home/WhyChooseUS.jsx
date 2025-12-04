import React from "react";
import { FaThumbsUp, FaTruckFast, FaStar, FaUserShield } from "react-icons/fa6";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const cardVariant = {
        hidden: { opacity: 0, y: 40 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2 },
        }),
    };

    return (
        <div className="mb-30 px-6 md:px-">

            {/* Top Small Title */}
            <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-pink-400 font-semibold mb-3 text-lg"
            >
                Why Choose Us
            </motion.p>

            {/* Section Title */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center md:justify-between gap-6 mb-20"
            >
                {/* Left Title */}
                <div className="max-w-2xl text-center md:text-left">
                    <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4">
                        Why Choose Us for <br /> Your Baby's Needs
                    </h2>
                </div>

                {/* Right Description */}
                <p className="text-gray-500 max-w-2xl leading-7 text-base text-center md:text-left">
                    We provide premium baby products with utmost care and attention. 
                    From essentials to toys, we ensure safety, quality, and comfort in every item we offer, making parenting easier and more enjoyable.
                </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Card 1 */}
                <motion.div
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="show"
                    custom={0}
                    viewport={{ once: true }}
                    className="border border-[#E7E7E7] rounded-2xl p-8 relative bg-white shadow-sm hover:shadow-lg transition"
                >
                    <div className="absolute -top-6 left-6 bg-pink-200 rounded-full p-4">
                        <FaThumbsUp className="text-pink-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mt-10 mb-3">Affordable Prices</h3>
                    <p className="text-gray-500 text-sm leading-6">
                        We offer high-quality baby products at competitive prices, ensuring value for every parent without compromising on safety or comfort.
                    </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="show"
                    custom={1}
                    viewport={{ once: true }}
                    className="border border-[#E7E7E7] rounded-2xl p-8 relative bg-white shadow-sm hover:shadow-lg transition"
                >
                    <div className="absolute -top-6 left-6 bg-pink-200 rounded-full p-4">
                        <FaTruckFast className="text-pink-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mt-10 mb-3">Fast Delivery</h3>
                    <p className="text-gray-500 text-sm leading-6">
                        Quick and reliable delivery ensures your baby essentials reach you right on time, so you never run out of the products you need.
                    </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="show"
                    custom={2}
                    viewport={{ once: true }}
                    className="border border-[#E7E7E7] rounded-2xl p-8 relative bg-white shadow-sm hover:shadow-lg transition"
                >
                    <div className="absolute -top-6 left-6 bg-pink-200 rounded-full p-4">
                        <FaStar className="text-pink-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mt-10 mb-3">Expert Guidance</h3>
                    <p className="text-gray-500 text-sm leading-6">
                        Our team of baby care experts is always available to provide guidance, helping you make informed decisions for your child’s growth and well-being.
                    </p>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="show"
                    custom={3}
                    viewport={{ once: true }}
                    className="border border-[#E7E7E7] rounded-2xl p-8 relative bg-white shadow-sm hover:shadow-lg transition"
                >
                    <div className="absolute -top-6 left-6 bg-pink-200 rounded-full p-4">
                        <FaUserShield className="text-pink-600 text-xl" />
                    </div>
                    <h3 className="text-xl font-bold mt-10 mb-3">Customer Care</h3>
                    <p className="text-gray-500 text-sm leading-6">
                        We prioritize our customers, offering friendly support and hassle-free assistance to ensure your shopping experience is smooth and satisfying.
                    </p>
                </motion.div>

            </div>
        </div>
    );
};

export default WhyChooseUs;
