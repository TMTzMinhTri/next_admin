import * as React from 'react'

interface IToggleDropdown {
  open: (event: React.SyntheticEvent) => void
  close: () => void
}

export const useToggleDropdown = (): [(EventTarget & Element) | null, IToggleDropdown] => {
  const [anchorEl, setAnchorEl] = React.useState<(EventTarget & Element) | null>(null)

  return [
    anchorEl,
    {
      open: React.useCallback((event: React.SyntheticEvent) => setAnchorEl(event.currentTarget), []),
      close: React.useCallback(() => setAnchorEl(null), []),
    },
  ]
}
