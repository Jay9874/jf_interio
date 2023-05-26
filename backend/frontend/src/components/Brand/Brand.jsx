import React from 'react'
import { Link } from 'react-router-dom'
import './brand.css'


export default function Brand({ brandClick }) {
  return (
    <div className='brand-container'>
        <Link to='/' onClick={brandClick} name='Home'>
        <h4 className='brand-name'>JSF interio</h4>
        </Link>
    </div>
  )
}
