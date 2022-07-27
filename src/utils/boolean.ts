import { NextRouter } from 'next/router'

export const handleURLQueries = (router: NextRouter, path: string | undefined): boolean => {
  if (Object.keys(router.query).length && path) {
    const arr = Object.keys(router.query)

    return router.asPath.includes(path) && router.asPath.includes(router.query[arr[0]] as string) && path !== '/'
  }

  return false
}

export const isActiveLink = (router: NextRouter, path: string | undefined) => {
  if (router.pathname === path || handleURLQueries(router, path)) {
    return true
  } else {
    return false
  }
}
