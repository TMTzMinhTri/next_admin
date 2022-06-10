import React, { useEffect, useMemo } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { selectClient } from '@/store/client/selectors'
import { clientActions } from '@/store/client'
import { Controller, useForm } from 'react-hook-form'

const AddEditClientModal: React.FunctionComponent = () => {
  const dispatch = useDispatch()
  const client = useSelector(selectClient)

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      phone: '',
      address: ''
    }
  })

  const onSubmit = (data: any) => console.log(data)

  const handleClose = () => dispatch(clientActions.setClientEdit(null))

  const renderDialogTitle = useMemo(() => {
    let content = ''
    if (client) {
      content = `Chỉnh sửa ${client.name}`
    } else {
      content = 'Thêm mới'
    }
    return <DialogTitle>{content}</DialogTitle>
  }, [client])

  useEffect(() => {
    if (client) {
      reset(client)
    }
  }, [client])

  return (
    <Dialog open={Boolean(client)} onClose={handleClose}>
      {renderDialogTitle}
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='name'
            control={control}
            render={({ field }) => <TextField {...field} label='Họ tên' margin='dense' fullWidth variant='standard' />}
          />
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <TextField {...field} label='Số điện thoại' margin='dense' fullWidth variant='standard' />
            )}
          />
          <Controller
            name='address'
            control={control}
            render={({ field }) => <TextField {...field} label='Dịa chỉ' margin='dense' fullWidth variant='standard' />}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button>
      </DialogActions>
    </Dialog>
  )
}
export default AddEditClientModal
