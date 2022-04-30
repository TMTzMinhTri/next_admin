import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import { List, Box, BoxProps } from '@mui/material'

import { Drawer, ScrollWrapper, SideBarMenuItem } from '@/components/mocules'
import { hexToRGBA } from '@/utils/color'
import { ISetting } from '@/store/global/types'

interface ISideBarMenuProps {
  hidden: boolean
  navWidth: number
  setting: ISetting
  navVisible: boolean
  toggleNavVisibility: () => void
  setNavVisible: (value: boolean) => void
  verticalNavItems: VerticalNavItemsType
  saveSetting: (values: ISetting) => void

  // verticalNavMenuContent?: (props?: any) => React.ReactNode;
  // afterVerticalNavMenuContent?: (props?: any) => React.ReactNode;
  // beforeVerticalNavMenuContent?: (props?: any) => React.ReactNode;
}
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

const SideBarMenu: React.FunctionComponent<React.PropsWithChildren<ISideBarMenuProps>> = props => {
  const { hidden, verticalNavItems, setting } = props

  const shadowRef = React.useRef(null)
  const theme = useTheme()

  return (
    <Drawer {...props}>
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
        <ScrollWrapper hidden={hidden}>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <List className='nav-items' sx={{ transition: 'padding .25s ease', pr: 4.5 }}>
              {verticalNavItems.map((item, index) => {
                if ('sectionTitle' in item) {
                  return <SideBarMenuItem.VerticalNavSectionTitle item={item} key={index} />
                }

                return (
                  <SideBarMenuItem.VerticalNavLink
                    item={item}
                    setting={setting}
                    toggleNavVisibility={() => console.log('aaa')}
                    key={index}
                  />
                )
              })}
            </List>
          </Box>
        </ScrollWrapper>
      </Box>
    </Drawer>
  )
}

export default SideBarMenu
