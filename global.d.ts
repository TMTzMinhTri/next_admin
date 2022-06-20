import type { ReactNode } from 'react'
import { PaletteMode } from '@mui/material'
import type { NextComponentType, NextPageContext } from 'next/dist/shared/lib/utils'
import { SvgIconComponent } from '@mui/icons-material'

declare global {
  type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    getLayout?: (page: ReactNode) => ReactNode
  }

  type ContentWidth = 'full' | 'boxed'

  type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

  type NavLink = {
    path?: string
    title: string
    action?: string
    subject?: string
    disabled?: boolean
    badgeContent?: string
    externalLink?: boolean
    openInNewTab?: boolean
    icon?: SvgIconComponent
    badgeColor?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  }

  interface NavSectionTitle {
    sectionTitle: string
    action?: string
    subject?: string
  }

  type VerticalNavItemsType = Array<NavLink | NavSectionTitle>

  type Settings = {
    mode: PaletteMode
    themeColor: ThemeColor
    contentWidth: ContentWidth
  }

  interface ICommonRequest<T> {
    data?: T
  }

  interface ICommonResponse<T> {
    data: T
  }

  interface IThunkApiConfig {
    rejectValue: Record<string, any>
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string
      tableHeaderBg: string
      primaryGradient: string
    }
  }
  interface PaletteOptions {
    customColors?: {
      main?: string
      tableHeaderBg?: string
      primaryGradient?: string
    }
  }
}

export {}
