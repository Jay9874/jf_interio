import React from 'react'
import './home.css'
import { Quality, Categories, Explore, Review, Offer, Cover } from '../../components/index'


export default function Home () {
  return (
    <main>
      <div className='home-main-container'>
        <Cover />
        <Categories />
        <Quality />
        <Explore />
        <Review />
        <Offer />
      </div>
    </main>
  )
}
