import React from 'react'
import './bed.css'
import CatalogueSpecs from '../CatalogueSpecs/CatalogueSpecs'

export default function Bed () {
  const allCatalogues = [
    { title: 'Bed' },
    {
      links: [
        'Single Bed',
        'Double Bed',
        'Wall Mount',
        'Divan',
        'Modern',
        'Classic'
      ]
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
