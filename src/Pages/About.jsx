import React from 'react';
import header_img from '../assets/team.png'
import mission from '../assets/mission-vector.png'
// import mission_img from '../assets/helping-vector.png'
import story from '../assets/Our-story-vector.png'



const About = () => {
    return (
        <div className="px-3 pt-30 py-20 ">

            {/* Header */}
            <div className="bbg-[#f5f9fc]  flex flex-col-reverse md:flex-row items-center gap-10 mb-12">

                {/* Left Text */}
                <div className="md:w-1/2 text-center md:text-left  ">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-gray-500 leading-7 mb-6">
                        At Little Steps Baby Shop, we believe every child deserves the best start in life.
                        Our carefully selected products are made with love and care for your little ones.
                        We understand that parenting can be both a joyful and challenging journey, and our mission is to make it as smooth and delightful as possible.
                    </p>
                    <p className="text-gray-500 leading-7 mb-6">
                        From newborn essentials like diapers, bottles, and soft clothing to engaging toddler toys that stimulate learning and creativity,
                        our store offers a wide range of products tailored to meet the needs of children at every stage of growth.
                    </p>
                    {/* <p className="text-gray-500 leading-7">
                        Beyond products, we provide parents with guidance, tips, and trusted recommendations to help make confident choices for their little ones.
                        We are committed to supporting families and creating a community where every parent feels empowered and every child thrives.
                    </p> */}
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src="https://miro.medium.com/1*PBGMJtAjHKczCVLq7wG5og.jpeg"
                        // src={test}
                        // src={header_img}
                        alt="Our Team"
                        className="w-full max-w-md  "
                    />
                </div>

            </div>

            {/* Mission */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                <img src="https://jakijellz.com/wp-content/uploads/2020/09/parenting.jpg" alt="Our Store" className="md:w-1/2 " />
                {/* <img src={mission_img} alt="Our Store" className="md:w-1/2 " /> */}
                {/* <img src={mission} alt="Our Store" className="md:w-1/2 " /> */}
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Our Mission: Making Parenting Easier</h2>
                    <p className="text-gray-600 leading-7">
                        We aim to provide parents with high-quality, safe, and affordable baby products that meet the highest standards of care and design.
                        Every item in our collection is carefully curated to ensure it is both functional and nurturing for children.
                    </p>
                    {/* <p className="text-gray-600 leading-7 mt-4">
                        Our mission extends beyond products. We aspire to simplify the lives of parents by offering helpful resources, insightful articles, and expert advice.
                        Whether you are a new parent navigating your first months or an experienced parent seeking the best developmental tools for your toddler,
                        Little Steps Baby Shop is here to guide and support you at every step.
                    </p> */}
                </div>
            </div>

            {/* Our Story */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-600 leading-7">
                        Founded in 2015 by passionate parents, Little Steps Baby Shop started as a small family-run store with a simple mission: to provide safe, trusted, and high-quality products for babies.
                        What began as a humble endeavor has blossomed into a nationwide brand recognized for quality, reliability, and heartfelt customer service.
                    </p>
                    <p className="text-gray-600 leading-7 mt-4">
                        Our journey has been shaped by the stories and experiences of countless families. Listening to our customers, learning from their feedback, and celebrating their milestones has inspired us to continuously expand our offerings.
                        Today, we are proud to offer an extensive selection of products that cater to every stage of a child’s growth—supporting families from the very first day of a newborn’s life to the energetic toddler years.
                    </p>
                    <p className="text-gray-600 leading-7 mt-4">
                        Beyond products, our vision is to foster a caring community of parents who share tips, celebrate successes, and navigate challenges together. Little Steps Baby Shop is more than a store; it’s a partner in your parenting journey.
                    </p>
                </div>
                <img src='https://s.yimg.com/ny/api/res/1.2/jRiutzueuSsHHuI9WturEQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD04MTc7Y2Y9d2VicA--/https://media.zenfs.com/en/techcrunch_350/c21a39ab931599471c0e22b0e4f5d566' alt="Founders" className="md:w-1/2 " />
                {/* <img src={story} alt="Founders" className="md:w-2/5 " /> */}
            </div>

            {/* STATS */}
            <section className=" py-20 px-6 text-center">
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

        </div>
    );
};

export default About;
