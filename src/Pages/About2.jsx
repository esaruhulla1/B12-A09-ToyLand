import React from 'react';

const About2 = () => {
    return (
        <div className="">

            {/* OUR STORY */}
            <section className="py-20 px-6 ">
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg leading-8">
                    Our Baby Shop began with one simple idea — to bring comfort, safety, and joy to every child.
                    What started as a small collection of newborn essentials has now grown into a trusted baby
                    marketplace where parents can find everything they need — from clothes, toys, and feeding
                    accessories to baby care and nursery items.
                    <br /><br />

                    We understand how precious and delicate a child’s early years are. 
                    That’s why we handpick every product with extra love and care, ensuring your baby receives 
                    the comfort they deserve. Our goal has always been to make parenting easier, safer, and more joyful.
                    <br /><br />

                    Over the years, we’ve served thousands of happy families, always focusing on quality, 
                    affordability, and trust. We believe that every baby deserves the best — soft fabrics, safe toys, 
                    and products that make both parents and babies smile.
                    <br /><br />

                    <span className="font-bold">👶 Trusted by Parents:</span> Every product is tested, selected, and reviewed to ensure the 
                    highest safety and comfort standards for your little one.
                    <br />
                    <span className="font-bold">🛍️ Hassle-Free Shopping:</span> From browsing to checkout, we make your shopping experience simple, smooth, and enjoyable.
                    <br />
                    <span className="font-bold">🚚 Fast & Safe Delivery:</span> We ensure your baby essentials reach you quickly and safely, without any hassle.
                </p>
            </section>

            {/* OUR MISSION */}
            <section className="py-20 px-6">
                <h2 className="text-4xl font-bold mb-8 text-center">Our Mission</h2>
                <div className="space-y-12">

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Safe & Quality Products</h3>
                        <p className="leading-7">
                            Your baby’s health and safety are our first priority. Every product in our store is 
                            sourced from trusted brands and manufacturers. Soft fabrics, non-toxic toys, 
                            and baby-safe materials are at the heart of what we provide.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Comfort for Your Baby</h3>
                        <p className="leading-7">
                            Babies deserve comfort during every stage of growth — from feeding to sleeping 
                            to playing. We focus on products that support your child's development and 
                            offer maximum ease and comfort throughout the day.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Support for Parents</h3>
                        <p className="leading-7">
                            Parenting can be challenging, especially in the early months. That’s why we’re here 
                            to support you with reliable essentials, thoughtful collections, and helpful guidance.
                            Our shop aims to make parenting joyful, organized, and stress-free.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Affordable Baby Essentials</h3>
                        <p className="leading-7">
                            We believe every family deserves access to high-quality baby items without worrying 
                            about cost. That’s why we offer competitive prices, seasonal discounts, and deals 
                            that help parents shop smart while giving their babies the best.
                        </p>
                    </div>

                </div>
            </section>

            {/* STATS */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
                <div className="flex flex-col sm:flex-row justify-around gap-12">
                    <div>
                        <p className="text-5xl font-bold">10K+</p>
                        <p className="mt-2">Happy Parents</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold">500+</p>
                        <p className="mt-2">Baby Products</p>
                    </div>
                    <div>
                        <p className="text-5xl font-bold">100%</p>
                        <p className="mt-2">Quality Guarantee</p>
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="py-20 px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Want to Know More?</h2>
                <p className="text-gray-400 mb-6">
                    Whether you’re a new parent or preparing for your baby’s first steps, 
                    we’re always here to help you find the perfect products.  
                    Contact us anytime — your baby’s comfort is our priority!
                </p>

                <a
                    href="#"
                    className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
};

export default About2;
