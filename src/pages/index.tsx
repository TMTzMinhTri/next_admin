import { clientActions } from '@/store/client'
import { isFetchingListClient } from '@/store/client/selectors'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddEditClientModal, ClientGrid } from '@/components'

const HomePage = () => {
  const dispatch = useDispatch()

  const isLoading = useSelector(isFetchingListClient)

  useEffect(() => {
    dispatch(clientActions.getListClient())
  }, [])

  return (
    <>
      <ClientGrid />
      <AddEditClientModal />
    </>
  )
}

export default HomePage

// HomePage.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   console.log(context);
//   return {
//     notFound: true,
//   };
// }
