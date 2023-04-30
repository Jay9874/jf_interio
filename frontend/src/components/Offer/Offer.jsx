import React from 'react'
import './offer.css'
import { offer_bg } from '../../assets'

export default function Offer () {
  return (
    <div className='offer-section'>
      <div className='offer-container section-padding'>
        <div className='offer-bg-container'>
          <img src={offer_bg} alt='Offer' />
          <div className='offer-gradient-container' />
          <div className='offer-content-container'>
            <div className='offer-content'>
              <h2>Get Upto 25% Off</h2>
              <h3>On Your First Order</h3>
              <div className='offer-btn-container'>
                <button className='offer-btn'>More Offers</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
