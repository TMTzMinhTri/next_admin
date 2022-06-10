import Axios, { AxiosInstance } from 'axios'

const apiServiceInstance: AxiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  params: {}
})

const apiService = apiServiceInstance
export default apiService
