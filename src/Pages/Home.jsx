import React, { useEffect } from 'react';
import Slider from '../Components/Home/Slider';
import PopulerToys from '../Components/Home/PopulerToys';
import CustomerReview from '../Components/Home/CustomerReview';
import WhyChooseUS from '../Components/Home/WhyChooseUS';


const Home = () => {
    useEffect(() => {
        document.title = "Home | ToyLand";
    }, []);
    return (

        <div className='container mx-auto pt-16'>

            <Slider></Slider>
            <PopulerToys></PopulerToys>
            <CustomerReview></CustomerReview>
            <WhyChooseUS></WhyChooseUS>


        </div>
    );
};

export default Home;