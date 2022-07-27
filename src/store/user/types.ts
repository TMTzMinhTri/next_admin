export interface IUserReducer extends IAuthProps {
  isLoading: boolean
  currentUser: ICurrentUser | null
}

export interface ICurrentUser {
  name: string
  phone_number: string
  confirmed_at: string
}

export interface IAuthProps {
  csrf: string
}

export interface ILoginRequest {
  phone_number: string
  password: string
}
