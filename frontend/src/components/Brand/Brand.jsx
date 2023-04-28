import React from 'react'
import { Link } from 'react-router-dom'
import './brand.css'


export default function Brand() {
  return (
    <div className='brand-container'>
        <Link to='/'>
        <h4 className='brand-name'>JSF interio</h4>
        </Link>
    </div>
  )
}
