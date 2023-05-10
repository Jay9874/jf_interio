import React from 'react'
import './kitchen.css'
import { kitchenCatalogue } from '../../constants'
import Catalogue from '../../components/Catalogue/Catalogue'

export default function Kitchen () {
  return <Catalogue sectionName='Kitchen' allCatalogues={kitchenCatalogue} />
}
