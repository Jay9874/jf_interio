import React from 'react'
import './review.css'
import RevCard from '../RevCard/RevCard'

export default function Review () {
  return (
    <div className='review-section'>
      <div className='review-container'>
        <div className='review-header-container'>
          <h1>Our Reviews</h1>
        </div>
        <div className='review-card-container'>
            <RevCard />
        </div>
      </div>
    </div>
  )
}
