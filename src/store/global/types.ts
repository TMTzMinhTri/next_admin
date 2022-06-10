import { PaletteMode } from '@mui/material'

export interface IGlobalReducer {
  isShowMenu: boolean
  settings: ISetting
}

export interface ISetting {
  mode: PaletteMode
  themeColor: ThemeColor
  contentWidth: ContentWidth
}

export interface ILocation {
  id: string
  name: string
}
