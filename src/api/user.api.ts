import { userApiPath } from '@/constants/user'
import apiService from '@/libs/axios'
import { IAuthProps, ILoginRequest } from '@/store/user/types'

class UserApi {
  async login(params: ILoginRequest): Promise<ICommonResponse<IAuthProps>> {
    return apiService.post(userApiPath.login, params)
  }
  async getProfile() {
    return apiService.get(userApiPath.getProfileUser)
  }
  async refreshToken() {
    return apiService.get(userApiPath.refreshToken)
  }
}
export default new UserApi()
