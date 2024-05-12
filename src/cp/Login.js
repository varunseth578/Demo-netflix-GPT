import React, { useState ,useRef } from "react";
import Header from "./Header";
import {checkValiDate} from "./utils/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "./Firebase";

export default function Login() {
  const [isSignForm, setisSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message=checkValiDate(email.current.value,password.current.value)
    setErrorMessage(message);
    if(message) return;

    if(!isSignForm){
      //signup 
    
createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"---"+errorMessage);
  });



      

    }else{
      //sign in 
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"---"+errorMessage);
  });






    }

      
      
    
    
  };
  const toggleSignForm = () => {
    setisSignForm(!isSignForm);
  };
  return (
    <div>
      <div className="absolute">
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 my-36 mx-auto right-0 left-0 absolute p-12 bg-black text-white bg-opacity-80 hover:cursor-pointer">
        <h1 className="font-bold text-3xl py-4">
          {isSignForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignForm && ( <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 w-full bg-slate-800"
        />) }
       
        <input
        ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-slate-800"
        />
        <input
        ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-slate-800"
        />
         <p className="text-red-500 font-bold text-lg py-2" >
          {errorMessage}
        </p>
       
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" 
        onClick={handleButtonClick}>
          {isSignForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 " onClick={toggleSignForm}>
          {isSignForm ? "New to Netflix? Sign up now" : "Al? Sign in now"}
        </p>
       
      </form>
    </div>
  );
}
