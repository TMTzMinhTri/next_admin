import * as React from 'react'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { globalStyles } from '@/utils/color'
import themeOptions from '@/themes'
import themeConfig from '@/constants/themeConfig'
import { selectSetting } from '@/store/global/selectors'
import { useSelector } from 'react-redux'

interface IThemeWrapperProps {
  children?: React.ReactNode
}

const ThemeWrapper: React.FunctionComponent<IThemeWrapperProps> = ({ children }) => {
  const settings = useSelector(selectSetting)

  const coreThemeConfig = themeOptions(settings)

  let theme = createTheme(coreThemeConfig)

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => globalStyles(theme) as any} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeWrapper
