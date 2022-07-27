import { ACCESS_TOKEN_NAME, CSRF_TOKEN_NAME, REFRESH_TOKEN_NAME } from '@/constants/session'
import { userApiPath } from '@/constants/user'
import apiService from '@/libs/axios'
import { IUserReducer } from '@/store/user/types'
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult, Redirect } from 'next'
import { applyServerSideCookie } from 'next-universal-cookie'

type WrapperOptions = { isProtected: false } | { isProtected: true; redirect?: Redirect }

type WrapperGetServerSideProps = <P extends Record<string, unknown> = Record<string, unknown>>(
  options: WrapperOptions
) => (callback: GetServerSideProps<P>) => (context: GetServerSidePropsContext) => Promise<
  GetServerSidePropsResult<
    P & {
      session?: IUserReducer
    }
  >
>

async function getSession({ req, res }: GetServerSidePropsContext) {
  applyServerSideCookie(req, res)
  const accessToken = req.cookies[ACCESS_TOKEN_NAME]
  if (accessToken) {
    // const response = await userApi.getProfile()
    console.log(req.headers)

    const response = await apiService.get(userApiPath.getProfileUser, {
      headers: {
        Cookie: req.headers.cookie || '',
      },
    })
    console.log(response)
    try {
    } catch (error) {
      res.clearCookie(ACCESS_TOKEN_NAME)
      res.clearCookie(REFRESH_TOKEN_NAME)
      res.clearCookie(CSRF_TOKEN_NAME)
    }
  }

  return null
}

export const withAuth: WrapperGetServerSideProps = options => callback => {
  return async context => {
    const session = await getSession(context)
    console.log(session)
    if (options.isProtected && !session) {
      return {
        redirect: {
          destination: `/admin/sign-in?next=${encodeURIComponent(context.resolvedUrl)}`,
          permanent: false,
          ...options.redirect,
        },
      }
    }

    const result = await callback(context)

    if ('props' in result) {
      return {
        ...result,
        props: {
          ...result.props,
          session,
        },
      }
    }

    return {
      ...result,
      props: {
        session,
      },
    }
  }
}
