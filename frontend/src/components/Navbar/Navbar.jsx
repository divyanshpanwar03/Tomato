import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

  const [menu,setmenu]= useState("home")
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" />
        <ul className="navbar-menu">
          <li onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</li>
          <li onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</li>
          <li onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</li>
          <li onClick={()=>setmenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" /> 
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar