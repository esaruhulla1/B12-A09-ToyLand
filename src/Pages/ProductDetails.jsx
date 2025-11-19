import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { id } = useParams();
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterData, setFilterData] = useState([]);

    const [formData, setFormData] = useState({ name: "", email: "" });
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        document.title = "Product-Details | ToyLand";
    }, []);
    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => {
                setdata(data);
                setLoading(false);

            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const RightData = data.find((eachData) => eachData.toyId == id);
        setFilterData(RightData);
    }, [data, id]);
    // console.log(data);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage(`Thank you, ${formData.name}! Your request has been submitted.`);
        setFormData({ name: "", email: "" }); 
    };


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold text-gray-500 animate-pulse">
                    Loading data...
                </p>
            </div>
        );
    }
    if (!filterData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl text-red-500">Product not found!</p>
            </div>
        );
    }
    // console.log(filterData);


    return (
        <div className="min-h-screen  p-6 pt-16">
            <div className="max-w-7xl mx-auto  flex flex-col md:flex-row gap-8  bg-white rounded-3xl p-8">
                {/* Product Image here*/}
                <div className="md:w-2/3  flex -ml-30 shadow  items-center">
                    <img
                        src={filterData.pictureURL}
                        alt={filterData.toyName}
                        className="w-full h-auto max-h-[500px] object-contain  "
                    />
                </div>

                {/* Product Details here*/}

                <div className="md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold text-[#00c1a6] mb-4">
                            {filterData.toyName}
                        </h1>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Seller:</span> {filterData.sellerName} ({filterData.sellerEmail})
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Price:</span> ${filterData.price}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Rating:</span> {filterData.rating} ⭐
                        </p>
                        <p className="text-gray-600 mb-4">
                            <span className="font-semibold">Available Quantity:</span> {filterData.availableQuantity}
                        </p>
                        <p className="text-gray-700 mb-6">{filterData.description}</p>
                        <p className="text-gray-500 mb-6 italic">
                            <span className="font-semibold">Category:</span> {filterData.subCategory}
                        </p>
                    </div>

                    {/* Try Now Form here*/}
                    
                    <div className="bg-[#ecf6f4] p-6 rounded-2xl shadow-md">
                        <h2 className="text-2xl font-bold text-[#00c1a6] mb-4">Try Now</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="p-3 border border-[#00a88f] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a88f]"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="p-3 border border-[#00a88f] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00a88f]"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#00c1a6] text-white hover:bg-[#00a88f] py-3 font-semibold rounded-xl  transition-colors"
                            >
                                Try Now
                            </button>
                        </form>

                        {successMessage && (
                            <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;