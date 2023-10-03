import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <h2 className='btn btn-secondary'>Breaking News</h2>
            <Marquee pauseOnHover={true} speed={150}>
                <Link className='mr-8'>I can be a React component, multiple React components, or just some text...</Link>
                <Link className='mr-8'>I can be a React component, multiple React components, or just some text...</Link>
                <Link className='mr-8'>I can be a React component, multiple React components, or just some text...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;