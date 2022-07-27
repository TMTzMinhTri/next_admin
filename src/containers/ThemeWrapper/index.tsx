// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

// ** Theme Config
import themeConfig from '@/constants/themeConfig'

// ** Theme Override Imports
import overrides from '@/themes/overrides'
import typography from '@/themes/typography'

// ** Theme
import themeOptions from '@/themes'

// ** Global Styles
import GlobalStyling from '@/themes/globalStyles'
import { ISetting } from '@/contexts/settingsContext'

interface Props {
  settings: ISetting | Settings
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const coreThemeConfig = themeOptions({
    ...settings,
    ...(settings.mode === 'system' ? { mode: prefersDarkMode ? 'dark' : 'light' } : { mode: settings.mode }),
  })

  let theme = createTheme(coreThemeConfig)

  // ** Continue theme creation and pass merged component overrides to CreateTheme function
  theme = createTheme(theme, {
    components: { ...overrides(theme) },
    typography: { ...typography(theme) },
  })

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
