import { selectCurrentTab } from '@/store/tab/selector'
import * as React from 'react'
import { useSelector } from 'react-redux'

interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: string
  keep?: boolean
}

const TabPanel: React.FC<ITabPanelProps> = ({ children, value, index, keep = false }) => {
  const currentTab = useSelector(selectCurrentTab)

  return (
    <div role='tabpanel' hidden={value !== currentTab} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`}>
      {keep ? children : value === currentTab && children}
    </div>
  )
}

export default TabPanel
