import { SvgIconProps } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'

interface UserIconProps {
  iconProps?: SvgIconProps
  icon: SvgIconComponent
}

const UserIcon = (props: UserIconProps) => {
  // ** Props
  const { icon, iconProps } = props

  const IconTag = icon

  let styles

  /* styles = {
    color: 'red',
    fontSize: '2rem'
  } */

  // @ts-ignore
  return <IconTag {...iconProps} style={{ ...styles }} />
}

export default UserIcon
