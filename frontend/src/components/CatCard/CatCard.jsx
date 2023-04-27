import React from 'react'
import './catcard.css'

export default function CatCard ({ cat_img, cat_class, alt }) {
  return (
    <div className={`cat-card ${cat_class}`}>
      <div className='cat-bg-color' />
      <div className='cat-img-ttl-cont'>
        <div className='cat-img-cont'>
          <img src={cat_img} alt={alt} />
        </div>
        <div className='cat-ttl-cont' style={{ padding: 0 }}>
          <h3>{alt}</h3>
        </div>
      </div>
    </div>
  )
}
