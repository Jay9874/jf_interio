import React from 'react'
import './quality.css'
import { check, sofa_chair } from '../../assets'

export default function Quality () {
  return (
    <div className='quality-section'>
      <div className='quality-flex-container'>
        <div className='quality-item quality-img-container'>
          <div className='title-container'>
            <h2>
              Your Modern Home need JSF touch
            </h2>
          </div>
          <div className='para-container'>
            <p>You'll find the perfect home furnishing <br/>without breaking your budget.</p>
          </div>
          <div className='sofa-chair-container'>
            <img src={sofa_chair} alt='sofa_chair' width={400} height={218}/>
          </div>
        </div>
        <div className='quality-item quality-text-container'>
          <div className='text-upper'>
            <div className='text-title-container'>
              <img src={check} alt='check' height={36} width={36} />
              <h2>
                A customized experience
                <br /> for every style
              </h2>
            </div>
            <div className='text-para-container'>
              <p>
                Our customizing tool allow you to filter by size, color, type of
                wood and more!
              </p>
            </div>
          </div>
          <div className='text-lower'>
            <div className='text-title-container'>
              <img src={check} alt='check' height={36} width={36} />
              <h2>Competitive prices</h2>
            </div>
            <div className='text-para-container'>
              <p>
                The majority of our products are priced at under ₹1lac - some as
                low as ₹1,000!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
