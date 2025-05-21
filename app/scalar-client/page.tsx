'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'

import '@scalar/api-reference-react/style.css'
import './scalar-overrides-2.css'

export default function References() {
  return (
    <ApiReferenceReact
      configuration={{
        url: 'https://petstore.swagger.io/v2/swagger.json',
      }}
    />
  )
}