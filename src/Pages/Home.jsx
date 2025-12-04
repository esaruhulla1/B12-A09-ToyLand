import React, { useEffect } from 'react';
import Slider from '../Components/Home/Slider';
import PopulerToys from '../Components/Home/PopulerToys';
import CustomerReview from '../Components/Home/CustomerReview';
import WhyChooseUS from '../Components/Home/WhyChooseUS';
import Status from '../Components/Home/Status';


const Home = () => {
    useEffect(() => {
        document.title = "Home | ToyLand";
    }, []);
    return (

        <div className=' pt-16'>

            <Slider></Slider>
            <PopulerToys></PopulerToys>
            <CustomerReview></CustomerReview>
            <WhyChooseUS></WhyChooseUS>
            <Status></Status>


        </div>
    );
};

export default Home;