import React from 'react'
import './sidetable.css'
import CatalogueSpecs from '../../IndividualCatalogues/CatalogueSpecs/CatalogueSpecs'

export default function SideTable () {
  const allCatalogues = [
    { title: 'Side Table' },
    {
      links: ['Bedside Table', 'Paper Table', 'Stool']
    }
  ]
  return <CatalogueSpecs specsHeading={allCatalogues} />
}
