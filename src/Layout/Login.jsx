import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {logIn}=useContext(AuthContext)

    const handleLogin = e=>{
        e.preventDefault()
        const form  = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
       
        // console.log(email,password)

        logIn(email,password)
        .then(res=>{
            const user=res.user;
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
                        <h1 className="text-5xl font-bold">Login Your Account</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
            <p className='text-center mt-4'>Do not have an account? <Link to={'/register'} className='text-blue-800'>Register</Link></p>

                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;