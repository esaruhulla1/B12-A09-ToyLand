import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';


const Product = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "All-Product | ToyLand";
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-xl font-semibold text-gray-500 animate-pulse">
                    Loading data...
                </p>
            </div>
        );
    }
    return (
        <div className=''>

            <div className='my-10'>
                <h1 className='text-2xl font-bold'>All Toys</h1>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        data.map((singleData, index) => (
                            <Card singleData={singleData} key={index}></Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;