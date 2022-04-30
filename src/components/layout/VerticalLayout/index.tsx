import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import { SideBarMenu } from '@/components/organisms'
import themeConfig from '@/constants/themeConfig'
import { ISetting } from '@/store/global/types'
import LayoutAppBar from './LayoutAppBar'
import { ScrollToTop } from '@/components/atoms'
import { Fab } from '@mui/material'
import { ArrowUpward as ArrowUpwardIcon } from '@mui/icons-material'
import LayoutFooter from './LayoutFooter'

interface IVerticalLayoutProps {
  hidden: boolean
  setting: ISetting
  verticalNavItems: VerticalNavItemsType
  saveSetting: (setting: ISetting) => void
  verticalAppBarContent?: (props?: any) => React.ReactNode
  footerContent?: (props?: any) => React.ReactNode
  scrollToTop?: (props: any) => React.ReactNode
}

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

const VerticalLayout: React.FunctionComponent<React.PropsWithChildren<IVerticalLayoutProps>> = props => {
  const { children, setting, scrollToTop } = props
  const { contentWidth } = setting
  const navWidth = themeConfig.navigationSize

  const [navVisible, setNavVisible] = React.useState<boolean>(true)

  const toggleNavVisibility = () => setNavVisible(!navVisible)

  return (
    <React.Fragment>
      <VerticalLayoutWrapper className='layout-wrapper'>
        <SideBarMenu
          navWidth={navWidth}
          navVisible={navVisible}
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
          <LayoutFooter {...props} />
        </MainContentWrapper>
      </VerticalLayoutWrapper>
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUpwardIcon />
          </Fab>
        </ScrollToTop>
      )}
    </React.Fragment>
  )
}

export default VerticalLayout
