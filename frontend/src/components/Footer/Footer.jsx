import React from 'react'
import './footer.css'

export default function Footer () {
  return (
    <footer>
      <div className='footer-container'>
        <div className='wrapper'>
          <div className='column company-column'>
            <div className='company-head-container'>
              <h4>Company</h4>
            </div>
            <div className='company-list-container'>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Categories</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='column support-column'>
            <div className='support-head-container'>
              <h4>Support</h4>
            </div>
            <div className='support-list-container'>
              <ul>
                <li>Help Center</li>
                <li>Safety Center</li>
                <li>Community Guidlines</li>
              </ul>
            </div>
          </div>
          <div className='column legal-column'>
            <div className='legal-head-container'>
              <h4>Legal</h4>
            </div>
            <div className='legal-list-container'>
              <ul>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
                <li>Terms Of Service</li>
              </ul>
            </div>
          </div>
          <div className='column download-column'>
            <div className='download-head-container'>
              <h4>Download App</h4>
            </div>
            <div className='download-list-container'>
              <ul>
                <li>Play Store</li>
                <li>Apps Store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
