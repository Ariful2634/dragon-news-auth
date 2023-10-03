import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftsideNavbar = () => {
    const [load,setLoad]=useState([])
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setLoad(data))
    },[])
    return (
        <div>
            <h2>
                All Category
            </h2>
            <div className='mt-4 bg-[#E7E7E7] w-[180px] py-4 text-center'>
            <h2>National News</h2>
            </div>
            <div className='space-y-5 mt-8 ml-8'>
                {
                    load.map(load=><Link to={`/load/${load.id}`} className='block' >{load.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftsideNavbar;