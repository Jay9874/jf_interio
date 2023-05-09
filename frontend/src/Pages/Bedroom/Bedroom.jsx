import React from 'react'
import './bedroom.css'

export default function Bedroom () {
  return (
    <div className='bedroom-main'>
      <div className='bedroom-wrapper'>
        <div className='bedroom-head-container'>
          <h1>Bedroom.</h1>
          <span className='goto-bedroom-heading'>
            {' '}
            Travel through catalogues
          </span>
        </div>
        <div className='bedroom-catalogue-container'>
          <div className='bedroom-catalogue-wrapper'>
            <div className='bedroom-catalogue-card'>
              <div className='bedroom-catalogue-name'>
                <h3>Bed</h3>
              </div>
            </div>
            <div className='bedroom-catalogue-card'>
              <div className='bedroom-catalogue-name'>
                <h3>Wardrobe</h3>
              </div>
            </div>
            <div className='bedroom-catalogue-card'>
              <div className='bedroom-catalogue-name'>
                <h3>Side Table</h3>
              </div>
            </div>
            <div className='bedroom-catalogue-card'>
              <div className='bedroom-catalogue-name'>
                <h3>Dressing Table</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
