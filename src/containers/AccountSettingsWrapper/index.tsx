import * as React from 'react'
import { Grid, List, ListItemButton, ListItemText } from '@mui/material'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

import routes from '@/constants/routes'
import { isActiveLink } from '@/utils/boolean'

const menus = [
  {
    label: 'Thông tin tài khoản',
    path: routes.admin.accountSettings.profile(),
  },
  {
    label: 'Mật khẩu',
    path: routes.admin.accountSettings.password(),
  },
]

const AccountSettingsWrapper: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const renderMenuItem = React.useMemo(
    () =>
      menus.map(menu => (
        <NextLink passHref href={menu.path} key={menu.path}>
          <ListItemButton selected={isActiveLink(router, menu.path)}>
            <ListItemText primary={menu.label} />
          </ListItemButton>
        </NextLink>
      )),
    [router]
  )

  return (
    <Grid container spacing={4}>
      <Grid item xs={2}>
        <List component='nav' aria-label='main mailbox folders'>
          {renderMenuItem}
        </List>
      </Grid>
      <Grid item xs={10}>
        {children}
      </Grid>
    </Grid>
  )
}

export default AccountSettingsWrapper
