import * as React from 'react'
import themeConfig from '@/constants/themeConfig'
import { PaletteMode } from '@mui/material'

export interface ISetting extends Omit<Settings, 'mode'> {
  mode: PaletteMode | 'system'
}

export type SettingsContextValue = {
  settings: ISetting
  saveSettings: (updatedSettings: ISetting) => void
}

const initialSettings: ISetting = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth,
}

export const SettingsContext = React.createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
})

export const SettingsProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const [settings, setSettings] = React.useState<ISetting>({ ...initialSettings })

  const saveSettings = (updatedSettings: ISetting) => {
    setSettings(updatedSettings)
  }

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
}
export const SettingsConsumer = SettingsContext.Consumer
