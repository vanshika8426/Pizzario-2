import React from 'react'
import './Navbar.css'
import pizzario from "../../assets/pizzario.png"
import profileImage from "../../assets/profileImage.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='pizzario' src={pizzario} alt="" />
      <img className='profileImage' src={profileImage} alt="" />
    </div>
  )
}

export default Navbar
