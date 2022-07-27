import * as React from 'react'
import { IconButton, TextField, Theme, useMediaQuery, Box, InputAdornment } from '@mui/material'
import { DehazeRounded as MenuIcon, Search as SearchIcon } from '@mui/icons-material'
import NotificationDropdown from '@/containers/NotificationDropdown'
import ThemeModeDropdown from '@/containers/ThemeModeDropdown'
import ProfileDropDown from '@/containers/ProfileDropDown'
import { ISetting } from '@/contexts/settingsContext'

interface IAppBarContentProps {
  hidden: boolean
  settings: ISetting
  toggleNavVisibility: () => void
  saveSettings: (values: ISetting) => void
}

const AppBarContent: React.FunctionComponent<IAppBarContentProps> = props => {
  const { hidden, toggleNavVisibility } = props
  const hiddenSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
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
            ),
          }}
        />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <ThemeModeDropdown {...props} />
        <NotificationDropdown />
        <ProfileDropDown />
      </Box>
    </Box>
  )
}

export default AppBarContent
