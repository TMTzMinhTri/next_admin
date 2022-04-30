import * as React from 'react'
import { IconButton, TextField, Theme, useMediaQuery, Box, InputAdornment } from '@mui/material'
import {
  DehazeRounded as MenuIcon,
  Search as SearchIcon,
  Brightness4 as LightIcon,
  DarkMode as DarkIcon
} from '@mui/icons-material'
import { ISetting } from '@/store/global/types'

interface IAppBarContentProps {
  hidden: boolean
  setting: ISetting
  toggleNavVisibility: () => void
  saveSetting: (setting: ISetting) => void
}

const AppBarContent: React.FunctionComponent<IAppBarContentProps> = ({
  hidden,
  setting,
  saveSetting,
  toggleNavVisibility
}) => {
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const toggleTheme = React.useCallback(() => {
    saveSetting({
      ...setting,
      mode: setting.mode === 'light' ? 'dark' : 'light'
    })
  }, [setting])

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton
            color='inherit'
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        <TextField
          size='small'
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon fontSize='small' />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton color='inherit' aria-haspopup='true' onClick={toggleTheme}>
          {setting.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
        </IconButton>
        {/* <ModeToggler settings={settings} saveSettings={saveSettings} />
        <NotificationDropdown />
        <UserDropdown /> */}
      </Box>
    </Box>
  )
}

export default AppBarContent
