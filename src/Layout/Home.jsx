import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import LeftsideNavbar from './LeftsideNavbar';
import RightsideNavbar from './RightsideNavbar';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                <div>
                    <LeftsideNavbar></LeftsideNavbar>
                </div>
                <div className='lg:col-span-2'>
                    <h2>News Coming Soon...</h2>
                </div>
                <div>
                    <RightsideNavbar></RightsideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;