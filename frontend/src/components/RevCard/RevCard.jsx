import React from 'react'
import './revcard.css'

export default function RevCard ({ id, name, review, rating }) {
  return (
    <div className={`review-card`}>
      <div className='review'>
        <h1>{name}</h1>
        <h2>⭐️</h2>
        <p>{review}</p>
      </div>
    </div>
  )
}
