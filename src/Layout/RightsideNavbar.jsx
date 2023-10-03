import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'

const RightsideNavbar = () => {
    return (
        <div >
            <div className='space-y-4'>
                <h2 className='text-3xl'>Login With</h2>
                <button className='btn btn-outline w-full'>
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className='btn btn-outline w-full'>
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>

            <div className='mt-4'>
                <h2 className='text-3xl mb-3'>Find Us On</h2>

                <a className='flex items-center gap-3 border p-4 justify-center rounded-t-lg' href="">
                    <FaFacebook></FaFacebook>
                    <span>FaceBook</span>
                </a>
                <a className='flex items-center gap-3 border-x p-4 justify-center' href="">
                    <FaTwitter></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a className='flex items-center gap-3 border p-4 justify-center rounded-b-lg' href="">
                    <FaInstagram></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>

            {/* c zone */}

            <div className='space-y-4 '>
                <h2 className='text-3xl mt-6'>Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightsideNavbar;