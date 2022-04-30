// ** React Imports
import * as React from 'react'

// ** MUI Imports
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'
import { selectSetting } from '@/store/global/selectors'
import { useSelector } from 'react-redux'

interface ILayoutAppBarProps {
  verticalAppBarContent?: (props?: any) => React.ReactNode
  toggleNavVisibility: () => void
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out'
}))

const LayoutAppBar: React.FunctionComponent<ILayoutAppBarProps> = props => {
  // ** Props
  const { verticalAppBarContent } = props

  // ** Hooks
  const theme = useTheme()
  const setting = useSelector(selectSetting)

  // ** Vars

  const { contentWidth } = setting

  return (
    <AppBar elevation={0} color='default' className='layout-navbar' position='sticky'>
      <Toolbar
        className='navbar-content-container'
        sx={{
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': {
              maxWidth: `calc(1440px - ${theme.spacing(6)} * 2)`
            }
          })
        }}
      >
        {(verticalAppBarContent && verticalAppBarContent(props)) || null}
      </Toolbar>
    </AppBar>
  )
}

export default LayoutAppBar
