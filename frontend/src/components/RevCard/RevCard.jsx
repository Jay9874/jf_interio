import React from 'react'
import './revcard.css'

export default function RevCard ({ id, name, review, rating }) {
  // Render email input fields
  const renderEmailList = () => {
    const listItems = []
    for (let i = 0; i < Number(rating); i++) {
      listItems.push(<span key={i}>⭐️</span>)
    }
    return listItems
  }
  return (
    <div className={`review-card`}>
      <div className='review'>
        <h4>{name}</h4>
        <h3 style={{ paddingTop: 5 }}>{renderEmailList()}</h3>
        <p style={{ paddingTop: 10 }}>{review}</p>
      </div>
    </div>
  )
}
