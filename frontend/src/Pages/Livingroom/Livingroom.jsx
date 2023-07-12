import React from 'react'
import './livingroom.css'
import { livingCatalogue } from '../../constants'
import Catalogue from '../../components/Catalogue/Catalogue'

export default function Livingroom () {
  return (
    <Catalogue sectionName='Livingroom' allCatalogues={livingCatalogue} />
  )
}
