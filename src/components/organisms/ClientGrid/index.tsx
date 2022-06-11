import * as React from 'react'
import MUIDataTable, { MUIDataTableOptions, MUIDataTableColumn } from 'mui-datatables'
import { useDispatch, useSelector } from 'react-redux'
import { selectListClient } from '@/store/client/selectors'
import { Button, ButtonGroup } from '@mui/material'
import { useConfirmDialog } from '@/context/ConfirmModal/useConfirmDialog'
import { clientActions } from '@/store/client'
import { Box } from '@mui/system'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const ClientGrid: React.FunctionComponent = () => {
  const confirm = useConfirmDialog()
  const clients = useSelector(selectListClient)
  const dispatch = useDispatch()

  const handleShowConfirmDeleteModal = React.useCallback(
    (rowData: Array<any>) => {
      confirm({
        title: 'Xoá',
        description: (
          <div>
            <strong>{rowData[1]}</strong> sẽ bị xoá !!!
          </div>
        ),
        onConfirm: async () => {
          await sleep(3000)
          console.log('done')
        }
      })
    },
    [confirm]
  )

  const handleShowModalEdit = React.useCallback(
    (rowData: Array<any>) => {
      const client = clients.find(it => it.id === rowData[0])

      dispatch(clientActions.setClientEdit(client))
    },
    [clients, dispatch]
  )

  const options: MUIDataTableOptions = React.useMemo(
    () => ({
      download: false,
      print: false,
      search: true,
      filter: true,
      filterType: 'dropdown',
      responsive: 'vertical',
      tableBodyHeight: '100%',
      rowsPerPage: 100,
      selectableRowsHideCheckboxes: true,
      selectableRowsOnClick: false
    }),
    []
  )

  const columns: MUIDataTableColumn[] = React.useMemo(
    () => [
      { name: 'id', options: { display: false } },
      {
        name: 'name',
        label: 'Họ tên',
        options: {
          customBodyRenderLite: dataIndex => {
            const val = clients[dataIndex].name

            return <strong>{val}</strong>
          }
        }
      },
      {
        name: 'phone',
        label: 'SĐT',
        options: {
          customBodyRenderLite: dataIndex => {
            const val = clients[dataIndex].phone

            return <Box sx={{ textAlign: 'center' }}>{val || '-'}</Box>
          }
        }
      },
      {
        name: 'address',
        label: 'Địa chỉ'
      },

      // {
      //   name: 'district.name',
      //   label: 'Quận',
      //   // customBodyRenderLite: (dataIndex: number) => {
      //   //   const val = clients[dataIndex].district
      //   //   console.log(val)
      //   //   return <Box sx={{ textAlign: 'center' }}>{val.name || '-'}</Box>
      //   // }
      // },
      // {
      //   name: 'ward.name',
      //   label: 'Phường',
      //   // customBodyRenderLite: (dataIndex: number) => {
      //   //   const val = clients[dataIndex].ward
      //   //   return <Box sx={{ textAlign: 'center' }}>{val.name || '-'}</Box>
      //   // }
      // },
      {
        name: 'action',
        options: {
          sort: false,
          customBodyRender: (_, { rowData }) => {
            return (
              <ButtonGroup variant='contained' aria-label='outlined primary button group'>
                <Button onClick={() => handleShowModalEdit(rowData)}>Sửa</Button>
                <Button color='error' onClick={() => handleShowConfirmDeleteModal(rowData)}>
                  Xoá
                </Button>
              </ButtonGroup>
            )
          }
        }
      }
    ],
    [clients, handleShowConfirmDeleteModal, handleShowModalEdit]
  )

  return <MUIDataTable title={'ACME Employee list'} data={clients} columns={columns} options={options} />
}

export default ClientGrid
