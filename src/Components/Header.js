import React from 'react'
import Logo from "../img/Netflix_Logo.png";
const Header = () => {
  return (
    <div className='absolute w-screen pl-32 py-5 bg-gradient-to-b z-30  from-black' >
        <img className="w-40"  src={Logo} alt='logo'/>
        
    </div> 
  )
}

export default Header