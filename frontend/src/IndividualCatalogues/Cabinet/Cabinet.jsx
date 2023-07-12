import React from 'react'
import './cabinet.css'
import CatalogueSpecs from '../CatalogueSpecs/CatalogueSpecs'
export default function Cabinet () {
  const allCatalogues = [
    { title: 'Cabinet' },
    {
      links: [
        'Shoe Rack',
        'TV Unit',
        'Showcase',
        'Chest of Drawers',
        'Bookshelf',
        'Crockery Unit'
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
