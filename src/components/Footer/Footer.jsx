import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto vero dolorem libero animi voluptatibus voluptate fugit eveniet quas corrupti? C
                upiditate placeat corporis libero iure nobis ipsum provident aperiam sunt illum?</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
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
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>08066008669</li>
                <li>oliviaoguelina@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copywright">
        copywright 2020 @ Livia.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
