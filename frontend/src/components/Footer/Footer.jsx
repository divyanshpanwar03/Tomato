import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus repellat, nostrum sequi non dolores esse earum cupiditate minus dolore eius, temporibus, ad minima modi soluta! Corrupti, recusandae! Asperiores, quam?
                    , nesciunt in est omnis fugiat amet obcaecati quis accusamus earum dolores rerum a laudantium. Praesentium vitae odit iste debitis cumque dolores eveniet quasi reprehenderit nobis!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
                <div className="footer-content-centre">
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
                            <li>aryan.tambe04@gmail.com</li>
                            <li>divyansh.panwar2003@gmail.com</li>
                            <li>anishchoudhary1415@gmail.com</li>
                            <li>arnavkhandelwal1464@gmail.com</li>
                        </ul>
                    </div>
        </div><hr />
        <p className="footer-copy">Copyright 2024 @ Tomato.com -All Rights Reserved.</p>
    </div>
  )
}

export default Footer