import React, { useContext, useState } from 'react'
import './Navbar.css'
// import { assets } from '../../assets/assets'
// import nonvegpizza  from "../../assets/nonvegpizza.jpg"
// import search_icon from "../../assets/search_icon.png"
import pizzario from "../../assets/pizzario.png"
import search_icon from "../../assets/search_icon.png"
import cart_icon from "../../assets/cart_icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import profile_icon from "../../assets/profile_icon.jpg"
import bag_icon from "../../assets/bag_icon.jpg"
import logout_icon from "../../assets/logout_icon.png"


const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  
  const {getTotalCartAmount,token,setToken} =useContext(StoreContext);

  const navigate=useNavigate();

  const logout=()=>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className='navbar'>
      <Link to='/'><img src={pizzario} alt="" className="logo" style={{ width: '200px', height: 'auto' }} /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='/contactUs' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={search_icon} alt="" style={{ width: '30px', height: 'auto' }} />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={cart_icon} alt="" style={{ width: '50px', height: 'auto' }} /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
          
        </div>
        
        {!token?<button onClick={()=>setShowLogin(true)}>sign in</button>
        :<div className='navbar-profile'>
          <img src={profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div>}
      </div>
    </div>
  )
}

export default Navbar
//{setShowLogin}