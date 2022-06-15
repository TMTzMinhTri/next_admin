import { GlobalOptions, ConfirmOptions, FinalOptions } from './types'

export const defaultGlobalOptions: GlobalOptions = {
  confirmButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
  confirmButtonProps: {
    color: 'error',
    variant: 'contained'
  },
  cancelButtonProps: {
    variant: 'contained',
    color: 'inherit',
    autoFocus: true
  },
  dialogProps: {
    fullWidth: true,
    maxWidth: 'xs'
  }
}

export const handleOverrideOptions = (
  globalOptions?: GlobalOptions,
  confirmOptions?: ConfirmOptions
): FinalOptions => ({
  ...defaultGlobalOptions,
  ...globalOptions,
  ...confirmOptions
})
