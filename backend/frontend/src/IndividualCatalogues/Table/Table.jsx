import React from 'react'
import './table.css'

import CatalogueSpecs from '../CatalogueSpecs/CatalogueSpecs'
export default function Table () {
  const allCatalogues = [
    { title: 'Table' },
    {
      links: [
        'Dining Table',
        'Coffee Table',
        'Study Table',
        'Office Table',
        'Computer Table',
        'Bedside Table'
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
