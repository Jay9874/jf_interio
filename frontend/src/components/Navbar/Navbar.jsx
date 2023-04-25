import React from 'react'
import Brand from '../Brand/Brand'
import NavLink from '../NavLink/NavLink'
import './navbar.css'

export default function Navbar ({ navlinks }) {
  function creatLink ({ tag, url }, indx) {
    return <NavLink key={indx} tag={tag} url={url} />
  }

  return (
    <div className='navbar'>
      <div className='navbar-overlay' />
      <div className='navbar-flex-container'>
        <div className='navbar-flex-item brand'>
          <Brand />
        </div>
        <div className='navbar-flex-item links'>{navlinks.map(creatLink)}</div>
      </div>
    </div>
  )
}
