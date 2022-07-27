import * as React from 'react'
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, PaletteMode } from '@mui/material'
import { useToggleDropdown } from '@/hooks/useToggleDropdown'
import {
  SettingsBrightness as SettingsBrightnessIcon,
  Brightness4 as LightIcon,
  DarkMode as DarkIcon,
} from '@mui/icons-material'
import { ISetting } from '@/contexts/settingsContext'

const modes: IOption<PaletteMode | 'system'>[] = [
  { value: 'Light', key: 'light' },
  { value: 'Dark', key: 'dark' },
  { value: 'System', key: 'system' },
]

interface IThemeModeDropdownProps {
  settings: ISetting
  saveSettings: (values: ISetting) => void
}

const ThemeModeDropdown: React.FunctionComponent<IThemeModeDropdownProps> = ({ settings, saveSettings }) => {
  const [anchorEl, { open, close }] = useToggleDropdown()

  const renderIcon = React.useCallback((type: PaletteMode | 'system') => {
    switch (type) {
      case 'light':
        return <LightIcon />
      case 'dark':
        return <DarkIcon />
      default:
        return <SettingsBrightnessIcon />
    }
  }, [])

  const toggleTheme = React.useCallback(
    (type: PaletteMode | 'system') => {
      saveSettings({
        ...settings,
        mode: type,
      })
    },
    [settings, saveSettings]
  )

  const renderMenuItem = React.useCallback(
    (item: IOption<PaletteMode | 'system'>) => (
      <MenuItem onClick={() => toggleTheme(item.key)} key={`mode-${item.key}`}>
        <ListItemIcon>{renderIcon(item.key)}</ListItemIcon>
        <ListItemText>{item.value}</ListItemText>
      </MenuItem>
    ),
    [renderIcon, toggleTheme]
  )

  return (
    <React.Fragment>
      <IconButton color='inherit' aria-haspopup='true' onClick={open} aria-controls='customized-menu'>
        {renderIcon(settings.mode)}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={close}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {modes.map(mode => renderMenuItem(mode))}
      </Menu>
    </React.Fragment>
  )
}

export default ThemeModeDropdown
