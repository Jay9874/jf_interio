import React from 'react'
import './review.css'
import RevCard from '../RevCard/RevCard'

export default function Review () {
  const reviews = [
    {
      id: 1,
      name: 'Shubham',
      review: 'This is our store, we love to craft memories and marvels.',
      rating: 4
    },
    {
      id: 3,
      name: 'Kirti',
      review: 'As Bhaiya said in previous review, "We love to craft memories"',
      rating: 3
    },
    {
      id: 4,
      name: 'Jay',
      review:
        'We have engineered and pioneered this craft since centuries now.',
      rating: 4
    }
  ]

  return (
    <div className='review-section'>
      <div className='review-container '>
        <div className='review-header-container'>
          <h1>Our Reviews</h1>
        </div>
        <div className='review-card-container'>
          {reviews.length !== 0 ? (
            reviews.map(review => {
              return (
                <RevCard
                  key={review.id}
                  id={review.id}
                  name={review.name}
                  review={review.review}
                  rating={review.rating}
                />
              )
            })
          ) : (
            <h1>No reviews yet</h1>
          )}
        </div>
      </div>
    </div>
  )
}
