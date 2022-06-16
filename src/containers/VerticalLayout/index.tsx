import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Box, BoxProps } from '@mui/material'
import Navigation from './Navigation'
import themeConfig from '@/constants/themeConfig'
import LayoutAppBar from './LayoutAppBar'

const VerticalLayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex'
})

const MainContentWrapper = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column'
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

interface IVerticalLayoutProps {
  hidden: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
  verticalNavItems?: VerticalNavItemsType
  verticalAppBarContent?: (props?: any) => React.ReactNode
}

const VerticalLayout: React.FunctionComponent<React.PropsWithChildren<IVerticalLayoutProps>> = props => {
  const { children, settings } = props
  const { contentWidth } = settings
  const navWidth = themeConfig.navigationSize
  // ** States
  const [navVisible, setNavVisible] = React.useState<boolean>(false)

  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <VerticalLayoutWrapper>
      <Navigation
        navVisible={navVisible}
        navWidth={navWidth}
        setNavVisible={setNavVisible}
        toggleNavVisibility={toggleNavVisibility}
        {...props}
      />
      <MainContentWrapper className='layout-content-wrapper'>
        <LayoutAppBar toggleNavVisibility={toggleNavVisibility} {...props} />
        <ContentWrapper
          className='layout-page-content'
          sx={{
            ...(contentWidth === 'boxed' && {
              mx: 'auto',
              '@media (min-width:1440px)': { maxWidth: 1440 },
              '@media (min-width:1200px)': { maxWidth: '100%' }
            })
          }}
        >
          {children}
        </ContentWrapper>
      </MainContentWrapper>
    </VerticalLayoutWrapper>
  )
}

export default VerticalLayout
