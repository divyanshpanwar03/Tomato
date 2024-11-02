import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
const Navbar = ({setShowLogin}) => {
const {getTotalCartAmount} =useContext(StoreContext);
  const [menu,setmenu]= useState("menu");



  return (
    <div className='navbar'>
       <Link to='/'> <img src={assets.logo} alt="" /></Link>
        <ul className="navbar-menu">
          <Link to='/' onClick={()=>setmenu("home")} className={menu==="home"?"active":""}>Home</Link>
          <a href='#explore-menu' onClick={()=>setmenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
          <a href='#app-download' onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</a> 
          <a href='#footer' onClick={()=>setmenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</a>
            </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" /> 
          <div className="navbar-search-icon">
            <Link to='/Cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()?"":"dot"}></div>
          </div>
          <button onClick={()=> setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar