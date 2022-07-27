import { Theme } from '@mui/material'
import MuiLink from './link'
import MuiDialog from './dialog'
import MuiButton from './button'
import MuiAlerts from './alerts'

const Overrides = (theme: Theme) => {
  const dialog = MuiDialog(theme)
  const button = MuiButton(theme)
  const alerts = MuiAlerts(theme)

  return Object.assign(MuiLink, dialog, button, alerts)
}

export default Overrides
