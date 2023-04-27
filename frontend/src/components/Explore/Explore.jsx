import React from 'react'
import './explore.css'
import { explore } from '../../assets'

export default function Explore () {
  return (
    <div className='explore-section'>
      <div className='explore-container'>
        <div className='explore-text-container'>
          <div className='explore-text-btn'>
            <h1>Design your dream home with the perfect furniture.</h1>
            <p>We are making it easy for you to find your perfect match.</p>
            <button className='explore-btn'>Explore All Product</button>
          </div>
        </div>
        <div className='explore-img-container'>
          <div className='explore-img-bg' />
          <div className='explore-img'>
            <img src={explore} alt='explore-img' />
          </div>
        </div>
      </div>
    </div>
  )
}
