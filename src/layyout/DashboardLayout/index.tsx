import * as React from 'react'
import { Theme, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { VerticalLayout } from '@/components'
import { selectSetting } from '@/store/global/selectors'
import { sidebarDashBoardMenus } from '@/constants/sidebar'
import AppBarContent from './AppBarContent'
import FooterContent from './FooterContent'
import { ISetting } from '@/store/global/types'
import { useDispatch } from 'react-redux'
import { globalActions } from '@/store/global'

interface Props {
  children?: React.ReactNode
}

const DashboardLayout: React.FunctionComponent<Props> = ({ children }) => {
  const dispatch = useDispatch()
  const setting = useSelector(selectSetting)
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  const saveSetting = (setting: ISetting) => dispatch(globalActions.saveSettings(setting))

  return (
    <VerticalLayout
      hidden={hidden}
      setting={setting}
      verticalNavItems={sidebarDashBoardMenus}
      saveSetting={saveSetting}
      footerContent={() => <FooterContent />}
      verticalAppBarContent={props => (
        <AppBarContent
          hidden={hidden}
          setting={setting}
          saveSetting={saveSetting}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  )
}

export default DashboardLayout
