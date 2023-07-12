import React from 'react'
import './cataloguespecs.css'

export default function CatalogueSpecs({ specsHeading }) {
    const [tag, spec] = specsHeading
  return (
    <div className='catalogue-specs'>
      <div className='catalogue-specs-container'>
        <div className='catalogue-specs-heading'>
          <h1>
            {tag.title}.{' '}
            <span className='goto-heading'>Which one you looking for?</span>
          </h1>
        </div>
        <div className='specs-container'>
          <div className='specs-wrapper'>
          {spec.links.map((heading, index) => (
            <div className='specs-item' key={index}>
                <p>{heading}</p>
            </div>
            ))}
          </div>
          <div className='specs-scroll-fade left-fade'></div>
          <div className='specs-scroll-fade right-fade'></div>
          <hr style={{backgroundColor: 'gray'}}/>
        </div>
      </div>
    </div>
  )
}
