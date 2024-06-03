// import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaSpotify, FaTwitter } from 'react-icons/fa';

import './Footer.css';
// import images from '../../constants/images';

const Footer = () => {
  return (
    <>
      <div className="Footer_Container">
        <div className="Footer_AboutUs_Section">
          <ul>
            <li className='Footer_AboutUs_title'>
              About Us
            </li>
            <li><Link to="/about" className='text-dark'>About Us Overview</Link></li>
            <li><Link to="/leadership" className='text-dark'>Leadership Team</Link></li>
            <li><Link to="/values" className='text-dark'>Values In Action</Link></li>
            <li><Link to="/investor" className='text-dark'>Investor Relations</Link></li>
            <li><Link to="/news" className='text-dark'>News & Notifications</Link></li>
          </ul>
        </div>
        <div className="Footer_Services_Section">
          <ul>
            <li className="Footer_Services_title">
              Services
            </li>
            <li><Link to="/services"  className='text-dark'>Services Overview</Link></li>
            <li><Link to="/mobile-order" className='text-dark'>Mobile Order & Pay</Link></li>
            <li><Link to="/trending" className='text-dark'>Trending Now</Link></li>
            <li><Link to="/playplaces" className='text-dark'>PlayPlaces & Parties</Link></li>
            <li><Link to="/merchandise" className='text-dark'>Merchandise</Link></li>
          </ul>
        </div>
        <div className="Footer_ContactUs_Section">
          <ul>
            <li className="Footer_ContactUs_title">
              ContactUs
            </li>
            <li><Link to="/contact" className='text-dark'>Contact Us Overview</Link></li>
            <li><Link to="/gift-card" className='text-dark'>Gift Card FAQs</Link></li>
            <li><Link to="/donations" className='text-dark'>Donations</Link></li>
            <li><Link to="/employment" className='text-dark'>Employment</Link></li>
            <li><Link to="/faqs" className='text-dark'>faqs</Link></li>
          </ul>
        </div>
        {/* <div className="Footer_Images_Section">
          <Link to="">
            <img src={images.AppStoreImageOne} alt="VisualOne" className='appStoreImageOne' /></Link>
          <Link to="">
            <img src={images.AppStoreImageTwo} alt="VisualTwo" className='appStoreImageTwo' /></Link>
        </div> */}

      </div>
      <div className="Footer_SocialMedia_Section_cont">
        <div className="Footer_SocialMedia_Section">
          <ul className='Footer_SocialMedia_Ul'>
            <li>
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <FaYoutube />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.spotify.com">
                <FaSpotify />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>

        <li className='AllRightReserve'>
         <h6> © 2017 - 2023 Qari.io All Rights Reserved</h6>
          
          </li>

      </div>
    </>
  );
}

export default Footer;