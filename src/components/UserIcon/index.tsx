import { SvgIconProps } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'

interface IconProps {
  iconProps?: SvgIconProps
  icon: SvgIconComponent
}

const Icon = (props: IconProps) => {
  const { icon: IconTag, iconProps } = props

  return <IconTag {...iconProps} />
}

export default Icon
