import * as React from 'react'
import { PageInternalServerError } from '@/components/organisms'
import { BlankLayout } from '@/components'

const Error500 = () => {
  return <PageInternalServerError />
}

Error500.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error500
