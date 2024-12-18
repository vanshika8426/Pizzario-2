// import React from 'react'
// import './Footer.css'
// // import { assets } from '../../assets/assets'
// import pizzario from "../../assets/pizzario.png"
// import facebook_icon from "../../assets/facebook_icon.jpg"
// import twitter_icon from "../../assets/twitter_icon.png"
// const Footer = () => {
//   return (
//     <div className='footer' id='footer'>
//       <div className="footer-content">
//         <div className="footer-content-left">
//             <img src={pizzario} alt="" />
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, magni iure ex natus repellendus corrupti quas tempore hic deserunt!</p>
//             <div className="footer-social-icons">
//             <img src={facebook_icon} alt="" />
//             <img src={twitter_icon} alt="" />
//             </div>
//         </div>
//         <div className="footer-content-center">
//           <h2>COMPANY</h2>
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>
//         <div className="footer-content-right">
//             <h2>GET IN TOUCH</h2>
//             <ul>
//               <li>+1-212-456-7890</li>
//               <li>contact@pizzario.com</li>
//             </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">Copyright 2024 # pizzario.com - All Right Reserved</p>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import './Footer.css'
// import { assets } from '../../assets/assets'
import pizzario from "../../assets/pizzario.png"
import facebook_icon from "../../assets/facebook_icon.jpg"
import twitter_icon from "../../assets/twitter_icon.png"

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={pizzario} alt="" className="footer-image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur saepe, magni iure ex natus repellendus corrupti quas tempore hic deserunt!</p>
            <div className="footer-social-icons">
              <img src={facebook_icon} alt="" className="social-icon" />
              <img src={twitter_icon} alt="" className="social-icon" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>+1-212-456-7890</li>
              <li>contact@pizzario.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 # pizzario.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
