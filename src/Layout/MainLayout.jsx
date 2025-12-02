import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className='bg-linear-to-b from-white to-[#f8f8f8] flex flex-col min-h-screen '>
            
            <Header></Header>
            <div className='flex-1 container mx-auto'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;