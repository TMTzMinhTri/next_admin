import { styled } from '@mui/material'
import MuiTab from '@mui/material/Tab'

const Tab = styled(MuiTab)(({ theme }) => ({
  paddingBlock: '0.8rem',
  paddingInline: '1.2rem',
  '&.Mui-selected': {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderTopLeftRadius: '0.8rem',
    borderTopRightRadius: '0.8rem',
    position: 'relative'
  }
}))
export default Tab
