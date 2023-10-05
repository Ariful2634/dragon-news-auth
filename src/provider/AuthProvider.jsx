import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const  logIn = (email,password)=>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }




    // log out

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    // set observer
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
    },[])
    // console.log(user)



    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;