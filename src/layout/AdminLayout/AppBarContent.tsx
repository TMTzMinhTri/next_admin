import * as React from 'react'
import { IconButton, TextField, Theme, useMediaQuery, Box, InputAdornment } from '@mui/material'
import {
  DehazeRounded as MenuIcon,
  Search as SearchIcon,
  Brightness4 as LightIcon,
  DarkMode as DarkIcon
} from '@mui/icons-material'
import NotificationDropdown from '@/containers/NotificationDropdown'

interface IAppBarContentProps {
  hidden: boolean
  settings: Settings
  toggleNavVisibility: () => void
  saveSettings: (values: Settings) => void
}

const AppBarContent: React.FunctionComponent<IAppBarContentProps> = ({
  hidden,
  settings,
  saveSettings,
  toggleNavVisibility
}) => {
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  const toggleTheme = React.useCallback(() => {
    saveSettings({
      ...settings,
      mode: settings.mode === 'light' ? 'dark' : 'light'
    })
  }, [settings])

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
          {settings.mode === 'dark' ? <LightIcon /> : <DarkIcon />}
        </IconButton>
        <NotificationDropdown />
      </Box>
    </Box>
  )
}

export default AppBarContent
