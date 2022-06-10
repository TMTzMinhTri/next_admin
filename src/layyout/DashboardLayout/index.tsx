import * as React from 'react'
import { Fab, Theme, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux'

import { FloatingActionButton, LotteryResultModal, VerticalLayout } from '@/components'
import { selectSetting } from '@/store/global/selectors'
import { sidebarDashBoardMenus } from '@/constants/sidebar'
import AppBarContent from './AppBarContent'
import FooterContent from './FooterContent'
import { ISetting } from '@/store/global/types'
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
      fabContent={() => <FloatingActionButton />}
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
      {/* <LotteryResultModal /> */}
    </VerticalLayout>
  )
}

export default DashboardLayout
