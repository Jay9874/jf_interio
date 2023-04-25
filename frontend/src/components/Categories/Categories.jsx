import React from 'react'
import './categories.css'

export default function Categories() {
  return (
    <div className='categories'>
        <div className='categories-container'>
            <div className='category-header-container'>
                <div className='category-header'>
                    <h4>Popular Categories</h4>
                </div>
            </div>
            <div className='category-card-container'>
                <div className='cat-card'>
                    <p>Card</p>
                </div>
                <div className='cat-card'>
                    <p>Card</p>
                </div>
                <div className='cat-card'>
                    <p>Card</p>
                </div>
                <div className='cat-card'>
                    <p>Card</p>
                </div>
            </div>
        </div>
    </div>
  )
}
