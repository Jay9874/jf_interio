import { useState } from 'react'
import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './navbar.css'

export default function Navbar ({ navlinks, dropdownLinks }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    console.log('menu clicked')
    setMenuOpen(prev => !prev)
  }
  const handleLinkClick = () => {
    console.log('link clicked')
    setMenuOpen(false)
  }

  return (
    <div className='navbar'>
      <div className='navbar-flex-container'>
        <div className='navbar-flex-item brand'>
          <Brand />
        </div>
        <div className='navbar-flex-item links'>
          {navlinks.map((item, index) => {
            return item.type === 'text' ? (
              <div className='navlink-item navlink-text' key={index}>
                <Link to={item.url}>{item.tag}</Link>
              </div>
            ) : (
              <div className='navlink-item' key={index}>
                <Link to={item.url}>
                  <span className='material-symbols-outlined'>{item.icon}</span>
                </Link>
              </div>
            )
          })}
          <div className='navlink-item menu-btn' onClick={handleMenuClick}>
            <div
              className={`menu-btn-line ${
                menuOpen ? 'line-top' : 'top-detach'
              }`}
            />
            <div
              className={`menu-btn-line ${
                menuOpen ? 'line-bottom' : 'bottom-detach'
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`navbar-dropdown ${
          menuOpen ? 'dropdown-open' : 'dropdown-close'
        }`}
      >
        <div className='navbar-dropdown-container'>
          <div className='navbar-dropdown-items'>
            {navlinks.map((item, index) => {
              return (
                item.type === 'text' && (
                  <div
                    className='dropdown-link'
                    onClick={handleLinkClick}
                    key={index}
                  >
                    <Link to={item.url}>{item.tag}</Link>
                  </div>
                )
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
