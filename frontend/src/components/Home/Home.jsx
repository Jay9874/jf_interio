import React from 'react'
import './home.css'
import { Quality , Categories, Explore, Review } from '../index'
import { landing_img } from '../../assets'

export default function Home () {
  return (
    <main>
      <div className='home-main-container'>
        <div className='bg-img-container'>
          <img src={landing_img} alt='main-page-bg' />
        </div>
        <Categories />
        <Quality />
        <Explore />
        <Review />
      </div>
    </main>
  )
}
