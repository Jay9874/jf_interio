import React from 'react'
import './tvunit.css'
import CatalogueSpecs from '../CatalogueSpecs/CatalogueSpecs'

export default function TVUnit () {
  const allCatalogues = [
    { title: 'TV Unit' },
    {
      links: [
        'Just Stand',
        'With Storage',
        'With showcase',
        'Wall Mount',
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
