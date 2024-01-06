'use client'

import Link from "next/link";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from './FirebaseConfig'


const Login = () => {

  const HandleGoogleSignIn = async() => {
    const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user); // Sign-in user object
  } catch (error) {
    console.error(error)
  }
  
};
  
  return (
    <div className="">
    <button onClick={HandleGoogleSignIn} className="hover:bg-white transition-all duration-500 ease-in-out">            
        <p className="text-white hover:text-red-700 cursor-pointer pt-2 text-[12px] h-8">
          Login/Sign Up
        </p>            
    </button>
  </div>
    );
};

export default Login;
