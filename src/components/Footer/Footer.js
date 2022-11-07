import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
      <div className='footer'>
          <div className="footerBox">
              <div className="linktype">Quick Links
              </div>
              <ul className='links'>
                  <li>Decor</li>
                  <li>Figurines</li>
                  <li>Divine Essentials</li>
                  <li>Corporate Giftings</li>
                  <li>Wooden Handicrafts</li>
              </ul>
          </div>
          <div className="footerBox">
              <div className="linktype">Browse Product By
              </div>
              <ul className='links'>
                  <li>Special Offers</li>
                  <li>New Arrivals</li>
                  <li>Timeless Collection</li>
                  <li>Our Favorites</li>
              </ul>
          </div>
          <div className="footerBox">
              <div className="linktype">Customer Service
              </div>
              <ul className='links'>
                  <li>Track Order</li>
                  <li>Return Product</li>
                  <li>Shipping Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Privacy Policy</li>
              </ul>
          </div>
          <div className="footerBox">
              <div className="linktype">Connect Us
              </div>
              <ul className='links'>
                  <li>Contact Us</li>
                  <li>About Us</li>
                  <li>About Us</li>
              </ul>
              <div className="socialLink">
                  <FontAwesomeIcon icon={faLinkedin} />
                  <FontAwesomeIcon icon={faFacebook} />
                  <FontAwesomeIcon icon={faInstagram}/>
              </div>
          </div>
          <div className='lastHr'/>
    </div>
  )
}
