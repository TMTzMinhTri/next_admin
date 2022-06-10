import { ClientApiPath } from '@/constants/client'
import ApiService from '.'

class ClientService {
  public getListClient() {
    return ApiService.get(ClientApiPath.getListClient)
  }
}

const clientService = new ClientService()

export default clientService
