import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit laborum quae aliquid earum, enim perspiciatis doloremque dolores ipsam magnam qui mollitia, molestias tenetur accusamus culpa quia iure consectetur! Officia, quidem.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>123-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-text'>Copyright &copy; 2024. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
