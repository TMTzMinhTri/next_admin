import * as React from 'react'
import themeConfig from '@/constants/themeConfig'

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
}

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
  contentWidth: themeConfig.contentWidth
}

export const SettingsContext = React.createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings
})

export const SettingsProvider:React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
  const [settings, setSettings] = React.useState<Settings>({ ...initialSettings })

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings)
  }

  return <SettingsContext.Provider value={{ settings, saveSettings }}>{children}</SettingsContext.Provider>
}
export const SettingsConsumer = SettingsContext.Consumer