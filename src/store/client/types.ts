export interface IClientReducer {
  isLoading: boolean
  clients: Array<IClient>
  clientEdit: IClient | null
}

export interface IClient {
  address: string
  district: {
    id: number
    name: string
  }
  ward: {
    id: number
    name: string
  }
  id: number
  name: string
  phone: string
}
