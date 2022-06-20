import * as React from 'react'
import { Theme, useMediaQuery } from '@mui/material'

import VerticalLayout from '@/containers/VerticalLayout'
import { useSettings } from '@/hooks/useSettings'
import { sidebarDashBoardMenus } from '@/constants/sidebar'
import AppBarContent from './AppBarContent'
import { ConfirmDialogProvider } from '@/contexts/confirmDialogContext'

const AdminLayout: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const { settings, saveSettings } = useSettings()
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  return (
    <ConfirmDialogProvider>
      <VerticalLayout
        hidden={hidden}
        settings={settings}
        saveSettings={saveSettings}
        verticalNavItems={sidebarDashBoardMenus}
        verticalAppBarContent={props => (
          <AppBarContent
            hidden={hidden}
            settings={settings}
            saveSettings={saveSettings}
            toggleNavVisibility={props.toggleNavVisibility}
          />
        )}
      >
        {children}
      </VerticalLayout>
    </ConfirmDialogProvider>
  )
}

export default AdminLayout
