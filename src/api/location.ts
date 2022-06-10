import { LocationApiPath } from './../constants/location'
import ApiService from '.'

class LocationService {
  public getDistricts() {
    return ApiService.get(LocationApiPath.getDistricts)
  }
  public getWards(params: ICommonRequest<{ district_id: string }>) {
    return ApiService.get(LocationApiPath.getWards, params)
  }
}

const locationService = new LocationService()
export default locationService
