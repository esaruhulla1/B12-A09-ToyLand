import React, { useEffect, useState } from 'react';
import Card from '../Card';

const PopulerToys = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);
    const sliceData = data.slice(0, 8);
    
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

    // console.log(data);

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
        <div>
            <div className='my-10'>
                <h1 className='mb-5 text-2xl font-bold'>Popular Toys</h1>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        sliceData.map((singleData, index) => (
                            <Card singleData={singleData} key={index}></Card>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopulerToys;