import * as React from 'react'
import { AxiosError } from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { selectCurrentUser } from '@/store/user/selecters'
import { userAction } from '@/store/user'

let globalFetching = false

export const useSession = () => {
  const router = useRouter()
  const currentUser = useSelector(selectCurrentUser)
  const dispatch = useDispatch()
  const loggedIn = !!currentUser

  const getCurrentUser = React.useCallback(async () => {
    try {
      globalFetching = true
      await dispatch(userAction.getProfileUser()).unwrap()
    } catch (error) {
      if (error instanceof AxiosError<IApiError>) {
        const status = error.response?.status
        if (status === 401) {
          router.replace(`/admin/sign-in?next=${encodeURIComponent(router.asPath)}`)
        }
      }
    } finally {
      globalFetching = false
    }
  }, [dispatch, router])

  React.useEffect(() => {
    if (globalFetching === false && loggedIn === false) {
      getCurrentUser()
    }
  }, [getCurrentUser, loggedIn])

  return null
}
