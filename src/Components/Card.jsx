import React from 'react';
import { FaRegStarHalfStroke } from 'react-icons/fa6';
import { Link } from 'react-router';

const Card = ({ singleData }) => {
    const { toyId, toyName, price, rating, availableQuantity, pictureURL, description } = singleData

 
    return (
        <div className=''>
            
            <div className="card bg-base-100  shadow-lg ">
                <figure>
                    <img className='w-[250px] h-[200px] '
                        src={pictureURL}
                        alt="img" />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title">
                        {toyName}
                        <div className="badge badge-secondary ">
                            <div className='flex gap-1 items-center'>
                                <span>{rating}</span>
                                <span className='-mt-1'><FaRegStarHalfStroke /></span>
                            </div>

                        </div>
                    </h2>
                    <p className=''>{description.slice(0, 85)}</p>
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-semibold text-[15px]'>Available Quantity: </span>
                            <span className='font-bold text-lg'>{availableQuantity}</span>
                        </div>

                        
                    </div>

                    <div className="card-actions justify-between">
                        <div className='text-2xl font-bold'>
                            <span>$ </span>{price}
                        </div>
                        <Link to={`/productDetails/${toyId}`}  className=" border-0 btn bg-[#00c1a6] rounded-xl  text-white ">View More</Link>
                        {/* <p className=" border-0  rounded-xl   w-full">View More...</p> */}

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;