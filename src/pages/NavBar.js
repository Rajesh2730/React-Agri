import React from 'react'
import { Link } from 'react-router-dom'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const refresh = () =>{
    window.location.reload();
}  

const NavBar = () => {
  return (
    <div>
        <div className='navbar'>
        <Link to={'/'} className='logo' onClick={refresh}>Green World !</Link>
          <div className='button'>
            <Link to={'/'} className='link'> Home</Link>
            <Link to={'/signin'} className='link'> Sign-in</Link>
            <Link to={'/signup'} className='link'> Sign-Up</Link>
          </div>
          <div className='contact'>
            <label className='lab'>Contact Us</label>
            <a href='www.instagram.com' className='icons' target='_blank'><FaSquareInstagram /></a>
            <a href='www.whatsapp.com' className='icons' target='_blank'><FaSquareWhatsapp /></a>
            <a href='www.Xtwitter.com' className='icons' target='_blank'><FaSquareXTwitter /></a>
            <a href='www.facebook.com' className='icons' target='_blank'><FaSquareFacebook /></a>
          </div>
          </div>
    </div>
  )
}

export default NavBar