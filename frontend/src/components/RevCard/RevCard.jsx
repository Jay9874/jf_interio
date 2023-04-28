import React from 'react'
import './revcard.css'

export default function RevCard ({ id, name, review, rating }) {
  return (
    <div className={`review-card`}>
      <div className='review'>
        <h4>{name}</h4>
        <h3 style={{paddingTop: 5}}>⭐️⭐️⭐️⭐️</h3>
        <p style={{paddingTop: 10}}>{review}</p>
      </div>
    </div>
  )
}
