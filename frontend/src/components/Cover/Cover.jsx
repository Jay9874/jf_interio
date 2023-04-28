import React from 'react'
import './cover.css'
import { landing_img } from '../../assets'
import { PriceTag } from '../index'

export default function Cover () {
  return (
    <div className='bg-img-container'>
      <img src={landing_img} alt='main-page-bg' />
      <div className='cover-text-container'>
        <div className='cover-text'>
          <div className='cover-text-title cover-text-item'>
            <h1>
              Now, Furniture
              <br />
              Shopping Is Simple
            </h1>
          </div>
          <div className='cover-text-desc cover-text-item'>
            <p>
              We've got the furniture you need to fill your new home. Browse now
              for free and get big discounts on everything from tables to lamps!
            </p>
          </div>
        </div>
        <div className='cover-search-container'>
          <div className='cover-search'>
            <form className='cover-search-form'>
              <div className='cover-search-btn-cont'>
                <input
                  type='search'
                  id='cover-search-bar'
                  autoComplete='off'
                  placeholder='Search Furniture'
                />
                <button type='submit'>Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='cover-tag-container'>
        <div className='cover-tag'>
            {/* <PriceTag /> */}
        </div>
      </div>
    </div>
  )
}
