import React from 'react'
import './showcase.css'
import CatalogueSpecs from '../../IndividualCatalogues/CatalogueSpecs/CatalogueSpecs'

export default function Showcase () {
  const allCatalogues = [
    { title: 'Showcase' },
    {
      links: [
        'Open',
        'With Glass',
        'With Glass and Storage',
        'With Drawers',
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
