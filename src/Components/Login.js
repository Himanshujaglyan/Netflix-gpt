import React, { useRef, useState } from 'react'
import Header from './Header'
import BgLogo from "../img/netflix-background-image-25.jpg"
import {checkValidation} from "../Utils/Validation" 
import {auth} from "../Utils/firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom"
import { Eye, EyeOff } from 'lucide-react'  // 👈 install this with: npm install lucide-react

const Login = () => {
  const [IssignIn,setIssignIn] = useState(true);
  const [errorMessage,seterrorMessage] = useState(); 
  const [showPassword, setShowPassword] = useState(false); // 👈 state to toggle password visibility
  const navigate = useNavigate();

  const togalSignButton=()=>{
      setIssignIn(!IssignIn);
  }

  const email = useRef(null);
  const password = useRef(null);
  
  const handleButtonClick = ()=>{
    const Message = checkValidation(email.current.value,password.current.value);
    seterrorMessage(Message);
    if(Message) return;

    if(!IssignIn){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        seterrorMessage(errorCode+"-"+errorMessage)
      });
    
    }else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value )
      .then((userCredential) => {
      const user = userCredential.user;
      navigate("/browse")
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+"-"+errorMessage)  
  });
}
  }

  return (
    <div>
    <Header/>
    <div className='absolute'>
    <img src={BgLogo} alt="Netflix Background" className="w-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
    </div>
    
    <form onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute bg-black p-12 mt-36 mx-auto left-0 right-0 rounded-lg bg-opacity-70'>
        <span className='text-2xl font-bold text-white'>{IssignIn ? "Sign In":"Sign Up"}</span>
       
        {!IssignIn && (
         <input type='text' placeholder='Full Name' className='p-2 mt-5 w-full text-white bg-slate-600 rounded-md'/>
        )}

        <input ref={email} type='text' placeholder='Email Address' className='p-2 w-full text-white bg-slate-600 mt-5 rounded-md'/>

        <div className="relative w-full mt-5">
          <input
            ref={password}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className='p-2 w-full bg-slate-600 text-white rounded-md pr-10'
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        </div>

        <p className='text-sm text-red-600'>{errorMessage}</p>

        <button onClick={()=>{handleButtonClick()}} className='p-2 w-full rounded-md mt-5 text-white bg-red-600'>
          {IssignIn ? "Sign In":"Sign Up"}
        </button>

        <p className='text-white py-4'>
          {IssignIn ? "New to Netflix? ":"Already registered? "}
          <span className='text-blue-500 font-bold cursor-pointer' onClick={togalSignButton}>
            {IssignIn ? "Sign Up":"Sign In"}
          </span> Now
        </p>
    </form>
    </div>
  )
}

export default Login;
