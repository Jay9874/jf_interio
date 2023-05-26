import React from 'react'
import './chair.css'
import CatalogueSpecs from '../CatalogueSpecs/CatalogueSpecs'

export default function Chair () {
  const allCatalogues = [
    { title: 'Chair' },
    {
      links: [
        'Dining Chair',
        'Study Chair',
        'Office Chair',
        'Computer Chair',
        'Rocking Chair',
        'Lounge Chair',
        'Arm Chair',
        'Recliner',
        'Folding Chair',
        'Stool',
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
