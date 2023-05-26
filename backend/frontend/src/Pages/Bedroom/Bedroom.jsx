import React from 'react'
import './bedroom.css'
import { bedroomCatalogue } from '../../constants'
import Catalogue from '../../components/Catalogue/Catalogue'

export default function Bedroom () {
  return <Catalogue sectionName='Bedroom' allCatalogues={bedroomCatalogue} />
}
