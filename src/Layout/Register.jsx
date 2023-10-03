import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    

    const {createUser}=useContext(AuthContext)

    const handleRegister = e=>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,photo,email,password)

        // create user

        createUser(email,password)
        .then(res=>{
          const  user = res.user
            console.log(user)
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div>
           <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Your Account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
            <p className='text-center mt-4'>Already Have An Account? <Link to={'/Login'} className='text-blue-800'>Login</Link></p>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;