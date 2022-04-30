import * as React from 'react'
import { PageNotFound } from '@/components/organisms'
import { BlankLayout } from '@/components'

const Error404 = () => {
  return <PageNotFound />
}

Error404.getLayout = (page: React.ReactNode) => <BlankLayout>{page}</BlankLayout>

export default Error404
