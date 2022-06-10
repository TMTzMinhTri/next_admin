import * as React from 'react'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import ViewListIcon from '@mui/icons-material/ViewList'

const actions = [{ icon: <ViewListIcon />, name: 'Kết quả số số', key: 'lottery-result' }]

const FloatingActionButton: React.FunctionComponent = () => {
  const handleOnClickAction = React.useCallback((type: string) => {
    switch (type) {
      case 'lottery-result':
        console.log(type)
        break
      default:
        return
    }
  }, [])

  return (
    <SpeedDial
      ariaLabel='Floating button action'
      sx={{ position: 'fixed', bottom: theme => theme.spacing(10), right: theme => theme.spacing(6), zIndex: 11 }}
      icon={<SpeedDialIcon />}
    >
      {actions.map(action => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={() => handleOnClickAction(action.key)}
        />
      ))}
    </SpeedDial>
  )
}

export default FloatingActionButton
