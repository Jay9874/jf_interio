import React from 'react'
import './review.css'
import RevCard from '../RevCard/RevCard'

export default function Review () {
  const [reviews, setReviews] = React.useState([
    {
      id: 1,
      name: 'Shubham',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, nec ultricies nisl nunc eget nisl. Sed vitae nisl eget nisl ultricies ultrices. Sed vitae nisl eget nisl ultricies ultrices.',
      rating: 5
    },
    {
      id: 3,
      name: 'Kirti',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, nec ultricies nisl nunc eget nisl. Sed vitae nisl eget nisl ultricies ultrices. Sed vitae nisl eget nisl ultricies ultrices.',
      rating: 3
    },
    {
      id: 4,
      name: 'Jay',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, nec ultricies nisl nunc eget nisl. Sed vitae nisl eget nisl ultricies ultrices. Sed vitae nisl eget nisl ultricies ultrices.',
      rating: 4
    }
  ])

  React.useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => {
        setReviews(data)
      })
  }, [])

  return (
    <div className='review-section'>
      <div className='review-container '>
        <div className='review-header-container section-padding'>
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
