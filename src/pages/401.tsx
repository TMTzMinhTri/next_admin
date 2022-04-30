import * as React from 'react'
import { BlankLayout, PageNotAuthorize } from '@/components'

const Error401 = () => {
  return <PageNotAuthorize />
}

Error401.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error401
