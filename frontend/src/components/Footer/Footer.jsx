import React from 'react'
import './footer.css'
import { App_Store_Badge, Google_Play_Badge } from '../../assets'

export default function Footer () {
  const getYear = () => {
    return new Date().getFullYear()
  }
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
                <li>
                  <a href='#'>About Us</a>
                </li>
                <li>
                  <a href='#'>Categories</a>
                </li>
                <li>
                  <a href='#'>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='column support-column'>
            <div className='support-head-container'>
              <h4>Support</h4>
            </div>
            <div className='support-list-container'>
              <ul>
                <li>
                  <a href='#'>Help Center</a>
                </li>
                <li>
                  <a href='#'>Safety Center</a>
                </li>
                <li>
                  <a href='#'>Community Guidlines</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='column legal-column'>
            <div className='legal-head-container'>
              <h4>Legal</h4>
            </div>
            <div className='legal-list-container'>
              <ul>
                <li>
                  <a href='#'>Cookies Policy</a>
                </li>
                <li>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#'>Terms Of Service</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='column download-column'>
            <ul className='download-list-container'>
              <li>
                <img
                  src={App_Store_Badge}
                  alt='App Store'
                  width={108}
                  height={32}
                />
              </li>
              <li>
                <img
                  src={Google_Play_Badge}
                  alt='Google Play'
                  width={108}
                  height={32}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-copy-container'>
          <p>Copyright © {getYear()} JSF interio </p>
        </div>
      </div>
    </footer>
  )
}
