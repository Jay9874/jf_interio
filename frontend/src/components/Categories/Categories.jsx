import React from 'react'
import './categories.css'
import { cat_chair, cat_sofa, cat_cabinet, cat_lamp } from '../../assets'

export default function Categories () {
  return (
    <div className='categories'>
      <div className='categories-container'>
        <div className='category-header-container'>
          <div className='category-header'>
            <p>Popular Categories</p>
          </div>
        </div>
        <div className='category-card-container'>
          <div className='cat-card cat-chair'>
            <div className='cat-bg-color' />
            <div className='cat-img-ttl-cont'>
              <div className='cat-img-cont'>
                <img src={cat_chair} alt='chair' />
              </div>
              <div className='cat-ttl-cont' style={{ padding: 0 }}>
                <h3>Chair</h3>
              </div>
            </div>
          </div>
          <div className='cat-card cat-lamp'>
            <div className='cat-bg-color' />
            <div className='cat-img-ttl-cont'>
              <div className='cat-img-cont'>
                <img src={cat_sofa} alt='lamp' />
              </div>
              <div className='cat-ttl-cont'>
                <h3>Lamp</h3>
              </div>
            </div>
          </div>
          <div className='cat-card cat-lamp'>
            <div className='cat-bg-color' />
            <div className='cat-img-ttl-cont'>
              <div className='cat-img-cont' style={{ padding: 0 }}>
                <img src={cat_lamp} alt='lamp' />
              </div>
              <div className='cat-ttl-cont' style={{ padding: 0 }}>
                <h3>Lamp</h3>
              </div>
            </div>
          </div>
          <div className='cat-card cat-cabinet'>
            <div className='cat-bg-color' />
            <div className='cat-img-ttl-cont'>
              <div className='cat-img-cont' style={{ padding: 0 }}>
                <img src={cat_cabinet} alt='cabinet' />
              </div>
              <div className='cat-ttl-cont' style={{ padding: 0 }}>
                <h3>Cabinet</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
