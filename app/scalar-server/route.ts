// app/reference/route.ts
import { ApiReference } from '@scalar/nextjs-api-reference'

const config = {
  url: 'https://petstore.swagger.io/v2/swagger.json',
}

export const GET = ApiReference(config)