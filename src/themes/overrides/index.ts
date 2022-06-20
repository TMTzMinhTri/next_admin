import { Theme } from '@mui/material'
import MuiLink from './link'
import MuiDialog from './dialog'
import MuiButton from './button'

const Overrides = (theme: Theme) => {
  const dialog = MuiDialog(theme)
  const button = MuiButton(theme)

  return Object.assign(MuiLink, dialog, button)
}

export default Overrides
