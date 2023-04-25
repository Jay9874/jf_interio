import React from 'react'
import { Link } from 'react-router-dom'
import './navlink.css'


export default function NavLink({tag, url}) {
  return (
    <div className='navlink-item'>
        <Link to={url}>{tag}</Link>
    </div>
  )
}
