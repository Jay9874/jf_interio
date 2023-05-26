import './footer.css'
import { App_Store_Badge, Google_Play_Badge } from '../../assets'
import FooterLink from './FooterLink/FooterLink'
import { footerlinks } from '../../constants'
import { useEffect } from 'react'
import axios from 'axios'

export default function Footer () {
  const getYear = () => {
    return new Date().getFullYear()
  }
  return (
    <footer>
      <div className='footer-container'>
        <div className='main-footer-wrapper'>
          {footerlinks.map((footerlink, index) => (
            <FooterLink
              key={index}
              title={footerlink.title}
              links={footerlink.links}
            />
          ))}
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
