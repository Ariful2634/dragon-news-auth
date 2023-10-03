import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-poppins font-[700] max-w-6xl mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;