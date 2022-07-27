import Cookie from 'cookie-universal'
import dayjs from 'dayjs'

const cookies = Cookie()

export const setCookie = (name: string, value: string | number, expireTime?: string): void => {
  let expires
  if (expireTime) {
    expires = dayjs(expireTime).toDate()
  }

  cookies.set(name, value, {
    path: '/',
    expires,
    secure: true,
    httpOnly: process.env.NODE_ENV === 'production',
  })
}

export const getCookie = (name: string): string | null => {
  return cookies.get(name)
}

export const deleteCookie = (name: string, path = '/', domain?: string): void => {
  if (cookies.get(name)) {
    cookies.remove(name, { path, domain })
  }
}

export const removeAllCookie = (): void => {
  cookies.removeAll()
}
