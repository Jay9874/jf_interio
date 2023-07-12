import React from 'react'
import './sofa.css'

import CatalogueSpecs from '../CatalogueSpecs/CatalogueSpecs'

export default function Sofa () {
  const allCatalogues = [
    { title: 'Sofa' },
    {
      links: [
        'Single Seater',
        'Double Seater',
        'Triple Seater',
        'L Shaped',
        'Sofa Cum Bed',
        'With Storage',
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
