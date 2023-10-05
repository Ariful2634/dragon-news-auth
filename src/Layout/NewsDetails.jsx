import React from 'react';
import Header from './Header';
import RightsideNavbar from './RightsideNavbar';
import Navbar from './Navbar';

const NewsDetails = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
           <div className='grid grid-cols-4'>
            <div className='col-span-3'>
            <h2>News Details</h2>
            </div>
            <div>
                <RightsideNavbar></RightsideNavbar>
            </div>
           </div>
        </div>
    );
};

export default NewsDetails;