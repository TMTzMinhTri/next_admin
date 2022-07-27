import * as React from 'react'
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material'
import { Logout as LogoutIcon, PersonOutline as PersonOutlineIcon } from '@mui/icons-material'
import NextLink from 'next/link'

import { useToggleDropdown } from '@/hooks/useToggleDropdown'
import routes from '@/constants/routes'
import { sleep } from '@/utils/sleep'

const menus = [
  {
    label: 'Thông tin tài khoản',
    icon: <PersonOutlineIcon fontSize='small' />,
    key: 'account-info',
    path: routes.admin.accountSettings.profile(),
  },
  {
    label: 'Đăng xuất',
    key: 'logout',
    icon: <LogoutIcon fontSize='small' />,
  },
]

const ProfileDropDown: React.FunctionComponent = () => {
  const [anchorEl, { open, close }] = useToggleDropdown()

  const handleMenuItemClick = React.useCallback(() => {
    sleep(1000).then(() => close())
  }, [close])

  const renderMenu = React.useMemo(
    () =>
      menus.map(menu => {
        if (menu.path) {
          return (
            <NextLink passHref href={menu.path} key={menu.key}>
              <MenuItem onClick={close}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                {menu.label}
              </MenuItem>
            </NextLink>
          )
        } else {
          return (
            <MenuItem onClick={() => handleMenuItemClick()} key={menu.key}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              {menu.label}
            </MenuItem>
          )
        }
      }),
    [close, handleMenuItemClick]
  )

  return (
    <React.Fragment>
      <IconButton color='inherit' aria-haspopup='true' onClick={open} size='small'>
        <Avatar sx={{ width: 30, height: 30 }} src='/images/default/default_avatar.jpeg' />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={close}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {renderMenu}
      </Menu>
    </React.Fragment>
  )
}

export default ProfileDropDown
