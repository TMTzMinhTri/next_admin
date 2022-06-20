import * as React from 'react'
import { List, styled, useTheme } from '@mui/material'
import Box, { BoxProps } from '@mui/material/Box'

import Drawer from './Drawer'
import VerticalNavHeader from './VerticalNavHeader'
import { hexToRGBA } from '@/utils/hexToRGBA'
import VerticalNavItems from './VerticalNavItems'
import PerfectScrollbar from '@/components/PerfectScrollbar'

const StyledBoxForShadow = styled(Box)<BoxProps>({
  top: 50,
  left: -8,
  zIndex: 2,
  height: 75,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '&.d-block': {
    display: 'block'
  }
})

interface INavigationProps {
  hidden: boolean
  navWidth: number
  navVisible: boolean
  settings: Settings
  saveSettings: (values: Settings) => void
  setNavVisible: (value: boolean) => void
  toggleNavVisibility: () => void
  verticalNavMenuContent?: (props?: any) => React.ReactNode
  verticalNavMenuBranding?: (props?: any) => React.ReactNode
  afterVerticalNavMenuContent?: (props?: any) => React.ReactNode
  beforeVerticalNavMenuContent?: (props?: any) => React.ReactNode
}

const Navigation: React.FunctionComponent<INavigationProps> = props => {
  const shadowRef = React.useRef<HTMLElement>()
  const theme = useTheme()
  const {
    afterVerticalNavMenuContent,
    beforeVerticalNavMenuContent,
    verticalNavMenuContent: userVerticalNavMenuContent
  } = props

  const [groupActive, setGroupActive] = React.useState<string[]>([])
  const [currentActiveGroup, setCurrentActiveGroup] = React.useState<string[]>([])

  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      // @ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect

      ref.getBoundingClientRect = () => {
        // @ts-ignore
        const original = ref._getBoundingClientRect()

        return { ...original, height: Math.floor(original.height) }
      }
    }
  }

  const scrollMenu = (container: HTMLElement) => {
    if (shadowRef && shadowRef.current) {
      if (container.scrollTop > 0) {
        if (!shadowRef.current.classList.contains('d-block')) {
          shadowRef.current.classList.add('d-block')
        }
      } else {
        shadowRef.current.classList.remove('d-block')
      }
    }
  }

  return (
    <Drawer {...props}>
      <VerticalNavHeader {...props} />
      <StyledBoxForShadow
        ref={shadowRef}
        sx={{
          background: `linear-gradient(${theme.palette.background.default} 40%,${hexToRGBA(
            theme.palette.background.default,
            0.1
          )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`
        }}
      />
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        <PerfectScrollbar
          options={{ wheelPropagation: false }}
          containerRef={ref => handleInfiniteScroll(ref)}
          onScrollY={container => scrollMenu(container)}
        >
          {beforeVerticalNavMenuContent ? beforeVerticalNavMenuContent(props) : null}
          <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {userVerticalNavMenuContent ? (
              userVerticalNavMenuContent(props)
            ) : (
              <List className='nav-items' sx={{ transition: 'padding .25s ease', pr: 4.5 }}>
                <VerticalNavItems
                  groupActive={groupActive}
                  setGroupActive={setGroupActive}
                  currentActiveGroup={currentActiveGroup}
                  setCurrentActiveGroup={setCurrentActiveGroup}
                  {...props}
                />
              </List>
            )}
          </Box>
        </PerfectScrollbar>
      </Box>
      {afterVerticalNavMenuContent ? afterVerticalNavMenuContent(props) : null}
    </Drawer>
  )
}

export default Navigation
