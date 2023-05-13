import React from 'react'
import './wardrobe.css'
import CatalogueSpecs from '../../IndividualCatalogues/CatalogueSpecs/CatalogueSpecs'

export default function Wardrobe() {
    const allCatalogues = [
        { title: 'Wardrobe' },
        {
          links: [
            'Single Door',
            'Double Door',
            'Triple Door',
            'Multi Door',
            'With Mirror'
          ]
        }
      ] 
  return (
    <CatalogueSpecs specsHeading={allCatalogues} />
  )
}
