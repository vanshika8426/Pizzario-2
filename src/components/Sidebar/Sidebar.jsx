import React from 'react'
import './Sidebar.css'
// import { assets } from '../../assets/assets'
import addIcon from "../../assets/addIcon.png"
import orderIcon from "../../assets/orderIcon.png"
import { NavLink } from 'react-router-dom'
// import addIcon from "../../assets/addIcon.png"

const SIdebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to={'/add'} className="sidebar-option">
                    <img src={addIcon} alt="" />
                    <p>Add Items</p>
                </NavLink>
                
                <NavLink to='/list' className="sidebar-option">
                    <img src={orderIcon} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                    <img src={orderIcon} alt="" />
                    <p>Orders</p>
                </NavLink>
        </div>
    </div>
    )
}

export default SIdebar
