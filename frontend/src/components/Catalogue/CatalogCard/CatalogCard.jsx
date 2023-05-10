import React from 'react'
import './catalogcard.css'

export default function CatalogCard ({ name, img, btnText }) {
  return (
    <div className='bedroom-catalogue-card'>
      <div className='bedroom-catalogue-name'>
        <h3>{name}</h3>
      </div>
      <div className='bedroom-catalogue-img-container'>
        <div className='bedroom-catalogue-img'>
          <img src={img} alt='wardrobe' />
        </div>
      </div>
      <div className='catalogue-card-goto-cont'>
        <div className='catalogue-card-goto'>
          <p>{btnText}</p>
          <div className='bedroom-catalogue-btn'>
            <ion-icon name='arrow-forward-outline'></ion-icon>
          </div>
        </div>
      </div>
    </div>
  )
}
