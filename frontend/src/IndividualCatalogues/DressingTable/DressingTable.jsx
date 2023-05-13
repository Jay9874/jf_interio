import React from 'react'
import './dressing.css'
import CatalogueSpecs from '../../IndividualCatalogues/CatalogueSpecs/CatalogueSpecs'

export default function DressingTable () {
  const allCatalogues = [
    { title: 'Dressing Table' },
    {
      links: [
        'Attached Wardrobe',
        'Single Person',
        'Double Person',
        'With Lights',
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
