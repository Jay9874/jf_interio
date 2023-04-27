import React from 'react'
import './categories.css'
import CatCard from '../CatCard/CatCard'
import { cat_chair, cat_sofa, cat_cabinet, cat_lamp } from '../../assets'

export default function Categories () {
  return (
    <div className='categories'>
      <div className='categories-container'>
        <div className='category-header-container'>
          <div className='category-header'>
            <h2>Popular Categories</h2>
          </div>
        </div>
        <div className='category-card-container'>
          <CatCard cat_img={cat_chair} cat_class='cat-chair' alt='Chair' />
          <CatCard cat_img={cat_sofa} cat_class='cat-sofa' alt='Sofa' />
          <CatCard cat_img={cat_lamp} cat_class='cat-lamp' alt='Lamp' />
          <CatCard
            cat_img={cat_cabinet}
            cat_class='cat-cabinet'
            alt='Cabinet'
          />
          <CatCard
            cat_img={cat_cabinet}
            cat_class='cat-cabinet'
            alt='Cabinet'
          />
        </div>
      </div>
    </div>
  )
}
