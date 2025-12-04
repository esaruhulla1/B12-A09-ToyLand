import React from "react";
import { motion } from "framer-motion";

const Status = () => {
    const stats = [
        { number: "20+", label: "Years of Experience" },
        { number: "160+", label: "Brand Product Available" },
        { number: "10K", label: "Product Reviews" },
    ];

    const partners = [
        "https://cdn.dribbble.com/userupload/17526548/file/original-6830d3c8d502546d6eeb559f65852ebb.jpg?format=webp&resize=400x300&vertical=center",
        "https://t4.ftcdn.net/jpg/03/23/91/57/360_F_323915727_pGJQjKMNqpvpOMVqZ5Z2iCDGEVSd5Upk.jpg",
        "https://cdn.logojoy.com/wp-content/uploads/2018/05/30143400/210.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOL0d0kA8vogGDePITBK4VRSo4z0V0AYvdK2XNoCzqQkE0igBC910xO-eNN1ilcHo_JU&usqp=CAU",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimal-ecommerce-icon-logo-template-design-62f4c3687c3af2846479af4cf1fe1ea6_screen.jpg?ts=1606053940",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RGjk54qBsPM-MoKN_2rv2seyMC92jJsxVg&s",
        "https://png.pngtree.com/png-clipart/20250110/original/pngtree-shop-logo-vector-template-design-illustration-png-image_4146470.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCmQq32Zdpo3iKzr0q-94_xz6n45tY0Tynl0crw9K-0FxJ7i7kzob823FnYZIk-QqE5o&usqp=CAU",
        "https://cdn-s3.funnelliner.com/media/shop-logo/2165/vsWhZQfm2kWROvQ1UVkPxgAFTrtI0wvV9b60A36O.jpg?v=1729882062",
        "https://image.similarpng.com/file/similarpng/original-picture/2021/09/Online-shop-logo-design-on-transparent-background-PNG.png",
        "https://cdn.dribbble.com/userupload/17526548/file/original-6830d3c8d502546d6eeb559f65852ebb.jpg?format=webp&resize=400x300&vertical=center",
        "https://t4.ftcdn.net/jpg/03/23/91/57/360_F_323915727_pGJQjKMNqpvpOMVqZ5Z2iCDGEVSd5Upk.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOL0d0kA8vogGDePITBK4VRSo4z0V0AYvdK2XNoCzqQkE0igBC910xO-eNN1ilcHo_JU&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOL0d0kA8vogGDePITBK4VRSo4z0V0AYvdK2XNoCzqQkE0igBC910xO-eNN1ilcHo_JU&usqp=CAU",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimal-ecommerce-icon-logo-template-design-62f4c3687c3af2846479af4cf1fe1ea6_screen.jpg?ts=1606053940",
        "https://cdn.dribbble.com/userupload/17526548/file/original-6830d3c8d502546d6eeb559f65852ebb.jpg?format=webp&resize=400x300&vertical=center",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpOL0d0kA8vogGDePITBK4VRSo4z0V0AYvdK2XNoCzqQkE0igBC910xO-eNN1ilcHo_JU&usqp=CAU",
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimal-ecommerce-icon-logo-template-design-62f4c3687c3af2846479af4cf1fe1ea6_screen.jpg?ts=1606053940",

    ];

    // Variants for stats numbers
    const statVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 100 },
        }),
    };

    // Variants for partners logos
    const partnerVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.1, duration: 0.4 },
        }),
    };

    return (
        <div className=" py-16 px-6 md:px-">
            {/* Stats Section */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Status</h2>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="max-w-xl mb-12">
                    <p className="text-gray-600">
                        From newborn essentials like diapers, bottles, and soft clothing to engaging toddler toys that stimulate learning and creativity, our store offers a wide range of products tailored to meet the needs of children
                    </p>
                </div>

                {/* Stats Numbers */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={statVariant}
                        >
                            <p className="text-4xl font-extrabold">{stat.number}</p>
                            <p className="text-gray-600 mt-2">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <hr className="border-gray-300 mb-12" />

            {/* Partners Section */}
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
                    Our Partners
                </h3>
                <div className="flex justify-center md:justify-start items-center gap-8 flex-wrap">
                    {partners.map((logo, index) => (
                        <motion.img
                            key={index}
                            src={logo}
                            alt={`Partner ${index}`}
                            className="h-12 object-contain"
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={partnerVariant}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Status;
