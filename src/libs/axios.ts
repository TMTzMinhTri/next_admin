import Axios, { AxiosError, AxiosInstance } from 'axios'
import { ACCESS_TOKEN_NAME, CSRF_TOKEN_NAME, REFRESH_TOKEN_NAME } from '@/constants/session'
import { getCookie } from './cookies'
import userApi from '@/api/user.api'
import { setCookie } from '@/libs/cookies'

const axiosInstance: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 30000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {},
})

axiosInstance.interceptors.response.use(
  response => {
    console.log(response)

    return response.data
  },
  async (err: AxiosError) => {
    const error = err.response
    if (error?.status === 401) {
      const refreshToken = getCookie(REFRESH_TOKEN_NAME)
      const accessToken = getCookie(ACCESS_TOKEN_NAME)

      if (refreshToken && !accessToken) {
        const response = (await userApi.refreshToken()) as any
        const { csrf } = response.data
        setCookie(CSRF_TOKEN_NAME, csrf)

        return axiosInstance(err.config)
      }

      return Promise.reject(err)
    }

    return Promise.reject(err)
  }
)

const apiService = axiosInstance
export default apiService
