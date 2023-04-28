import React from 'react'
import { Link } from 'react-router-dom'
import Brand from '../Brand/Brand'
import './navbar.css'

export default function Navbar ({ navlinks }) {
  return (
    <div className='navbar'>
      <div className='navbar-overlay' />
      <div className='navbar-flex-container'>
        <div className='navbar-flex-item brand'>
          <Brand />
        </div>
        <div className='navbar-flex-item links'>
          {navlinks.map((item, index) => {
            return item.type === 'text' ? (
              <div className='navlink-item' key={index}>
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
        </div>
      </div>
    </div>
  )
}
