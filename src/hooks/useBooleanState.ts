import * as React from 'react'

interface BooleanState {
  toggle: () => void
  enable: () => void
  disable: () => void
}

export const useBooleanState = (initialValue = false): [boolean, BooleanState] => {
  const [value, setValue] = React.useState(initialValue)

  return [
    value,
    {
      toggle: React.useCallback(() => setValue(prev => !prev), [setValue]),
      enable: React.useCallback(() => setValue(true), [setValue]),
      disable: React.useCallback(() => setValue(false), [setValue]),
    },
  ]
}
