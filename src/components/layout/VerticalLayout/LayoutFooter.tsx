import * as React from 'react'
import { Box } from '@mui/system'
import { ISetting } from '@/store/global/types'
import { useTheme } from '@mui/material'

interface ILayoutFooterProps {
  setting: ISetting
  saveSetting: (setting: ISetting) => void
  footerContent?: (props?: any) => React.ReactNode
}

const LayoutFooter: React.FunctionComponent<ILayoutFooterProps> = props => {
  // ** Props
  const { setting, footerContent } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const { contentWidth } = setting

  return footerContent ? (
    <Box
      component='footer'
      className='layout-footer'
      sx={{
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Box
        className='footer-content-container'
        sx={{
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          padding: theme.spacing(4, 6),
          ...(contentWidth === 'boxed' && {
            '@media (min-width:1440px)': { maxWidth: 1440 }
          })
        }}
      >
        {footerContent(props)}
      </Box>
    </Box>
  ) : null
}

export default LayoutFooter
