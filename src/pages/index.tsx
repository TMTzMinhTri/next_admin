import { useConfirm } from '@/hooks/useConfirm'
import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import ConfirmDelete from '@/components/shared/DialogHeader/ConfirmDelete'
import Link from 'next/link'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const Home: NextPage = () => {
  const confirm = useConfirm()

  const handleClick = () => {
    confirm({
      title: <ConfirmDelete>Are you sure you want to?</ConfirmDelete>,
      description: <strong>sẽ bị xoá !!!</strong>,
      onConfirm: async () => {
        await sleep(3000)
        console.log('done')
      },
    })
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Button onClick={handleClick}>Click</Button>

      <Typography>
        <Link href={'/404'}>alo</Link>
      </Typography>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

//   return {
//     redirect: {
//       destination: '/admin',
//       statusCode: 301
//     }
//   }
// }

export default Home
