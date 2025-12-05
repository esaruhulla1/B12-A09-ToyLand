import React from "react";
import { LuBadgeCheck } from "react-icons/lu";

const TopProduct = () => {
    const artists = [
        {
            name: "Baby Water bottle",
            specialty: "Unique Design",
            image:
                // "https://images.unsplash.com/photo-1738892248232-a5fd26a98ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFieSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                // "https://images.pexels.com/photos/7440053/pexels-photo-7440053.jpeg?_gl=1*tneiuo*_ga*OTM0MjgyMTcuMTc2Mjc4MjU1MQ..*_ga_8JE65Q40S6*czE3NjQ4NDc5NDAkbzIkZzEkdDE3NjQ4NDgwMTgkajQzJGwwJGgw"
                "https://images.pexels.com/photos/5632326/pexels-photo-5632326.jpeg?_gl=1*1b5ji24*_ga*OTM0MjgyMTcuMTc2Mjc4MjU1MQ..*_ga_8JE65Q40S6*czE3NjQ4NDc5NDAkbzIkZzEkdDE3NjQ4NDgxMzAkajU1JGwwJGgw"
        },
        {
            name: "Cold Cream",
            specialty: "Orginal Product",
            image:
                "https://cdn.pixabay.com/photo/2015/07/01/03/16/skin-care-827153_1280.jpg",
        },
        {
            name: "Baby Dress and Bear",
            specialty: "White Tshirt",
            image:
                "https://cdn.pixabay.com/photo/2018/05/12/06/04/onesie-3392517_1280.jpg",
        },
        {
            name: "Baby Care",
            specialty: "Orginal Products",
            image:
                "https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?_gl=1*1a5jun1*_ga*OTM0MjgyMTcuMTc2Mjc4MjU1MQ..*_ga_8JE65Q40S6*czE3NjQ4NDc5NDAkbzIkZzEkdDE3NjQ4NDc5NzQkajI2JGwwJGgw",
        },
    ];

    return (
        <section className="py-35  text-base-content transition-colors duration-500">
            <div className="">
                <h2 className="text-2xl font-semibold md:text-3xl playfair">
                    Top Products of the Week
                </h2>
                <p className=" font-medium mt-3 mb-10  w-full md:w-150">
                    Experience the brilliance of this week’s most inspiring products and
                    their unique beutifull Design .
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {artists.map((artist, index) => (
                        <div
                            key={index}
                            className="relative  group rounded-2xl overflow-hidden bg-base-100 border border-accent/20 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={artist.image}
                                    alt={artist.name}
                                    className="w-full h-90 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                            </div>
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-base-100/90 via-base-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                                <div className="shine" />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 text-left">
                                <h3 className="text-lg font-semibold text-primary mb-1">
                                    {artist.name}
                                </h3>
                                <p className="text-sm text-info mb-3">{artist.specialty}</p>
                                <span className="inline-flex gap-1 items-center px-3 py-1 text-xs font-medium uppercase rounded-full bg-primary text-base-100">
                                    <LuBadgeCheck size={15} /> Top sell Product
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopProduct;