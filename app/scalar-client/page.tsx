'use client'

import { ApiReferenceReact } from '@scalar/api-reference-react'
import orderApiSwagger from './order-api-swagger.json'

import '@scalar/api-reference-react/style.css'
import './scalar-overrides-2.css'

export default function References() {
  return (
    <ApiReferenceReact
      configuration={{
        content: orderApiSwagger,
      }}
    />
  )
}