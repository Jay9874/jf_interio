import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Bed,
  SideTable,
  Sofa,
  Wardrobe,
  Cabinet,
  DressingTable,
  TVUnit,
  Showcase,
  Chair,
  Table
} from '../IndividualCatalogues'

export default function Routes () {
  const { categorie } = useParams()
  return (
    <>
      {categorie === 'bed' ? (
        <Bed />
      ) : categorie === 'sidetable' ? (
        <SideTable />
      ) : categorie === 'sofa' ? (
        <Sofa />
      ) : categorie === 'wardrobe' ? (
        <Wardrobe />
      ) : categorie === 'cabinet' ? (
        <Cabinet />
      ) : categorie === 'dressingtable' ? (
        <DressingTable />
      ) : categorie === 'tvunit' ? (
        <TVUnit />
      ) : categorie === 'showcase' ? (
        <Showcase />
      ) : categorie === 'chair' ? (
        <Chair />
      ) : categorie === 'table' ? (
        <Table />
      ) : (
        <h1
          style={{
            height: 200,
            width: '50%',
            margin: '0 auto',
            fontSize: '1.5rem',
            fontWeight: 200,
            padding: '1rem'
          }}
        >
          This route is still being developed, check back soon.
        </h1>
      )}
    </>
  )
}
