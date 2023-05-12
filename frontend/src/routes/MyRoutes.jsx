import React from 'react'
import { useParams } from 'react-router-dom'
import Bed from '../IndividualCatalogues/Bed/Bed'

export default function Routes () {
  const { categorie } = useParams()
  return (
    <>
      {categorie === 'bed' ? (
        <Bed />
      ) : (
        <h1
          style={{
            height: 200,
            width: '50%',
            margin: '0 auto',
            fontSize: '1.5rem',
            fontWeight: 200,
            padding: '1rem',
          }}
        >
          This route is still being developed, check back soon.
        </h1>
      )}
    </>
  )
}
