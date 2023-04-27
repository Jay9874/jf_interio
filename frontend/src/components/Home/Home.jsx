import React from 'react'
import './home.css'
import landing_img from '../../assets/landing_page.jpg'
import Categories from '../Categories/Categories'
import Quality from '../Quality/Quality'

export default function Home () {
  return (
    <main>
      <div className='home-main-container'>
        <div className='bg-img-container'>
          <img src={landing_img} alt='main-page-bg' />
        </div>
        <Categories />
        <Quality />
      </div>
    </main>
  )
}
