// ** Custom Menu Components
import { ISetting } from '@/contexts/settingsContext'
import VerticalNavLink from './VerticalNavLink'
import VerticalNavSectionTitle from './VerticalNavSectionTitle'

interface Props {
  settings: ISetting
  navVisible?: boolean
  groupActive: string[]
  currentActiveGroup: string[]
  verticalNavItems?: VerticalNavItemsType
  saveSettings: (values: ISetting) => void
  setGroupActive: (value: string[]) => void
  setCurrentActiveGroup: (item: string[]) => void
}

const resolveNavItemComponent = (item: NavLink | NavSectionTitle) => {
  if ((item as NavSectionTitle).sectionTitle) return VerticalNavSectionTitle

  return VerticalNavLink
}

const VerticalNavItems = (props: Props) => {
  // ** Props
  const { verticalNavItems } = props

  const RenderMenuItems = verticalNavItems?.map((item: NavLink | NavSectionTitle, index: number) => {
    const TagName: any = resolveNavItemComponent(item)

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default VerticalNavItems
