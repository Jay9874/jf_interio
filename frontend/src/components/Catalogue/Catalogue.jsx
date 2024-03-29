import React from 'react'
import './catalogue.css'
import CatalogCard from './CatalogCard/CatalogCard'

export default function Catalogue ({ sectionName, allCatalogues }) {
  return (
    <div className='bedroom-main'>
      <div className='bedroom-wrapper'>
        <div className='bedroom-head-container'>
          <h1>{sectionName}.</h1>
          <span className='goto-heading'>
            {' '}
            Travel through catalogues
          </span>
        </div>
        <div className='bedroom-catalogue-container'>
          <div className='bedroom-catalogue-wrapper'>
            {allCatalogues.map((catalogue, index) => (
              <CatalogCard
                key={index}
                name={catalogue.tag}
                img={catalogue.src}
                btnText={catalogue.goto}
                url={catalogue.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
