import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { SnackbarProvider } from 'notistack'
import 'react-perfect-scrollbar/dist/css/styles.css'

import { wrapper } from '@/store'
import createEmotionCache from '../lib/createEmotionCache'

// import Notification from '@/components/mocules/Notification';
import { ThemeWrapper } from '@/components'
import DashboardLayout from '@/layyout/DashboardLayout'
import NotificationProvider from '@/context/NotificationContext'
import { useEffect } from 'react'

// import { useDispatch } from 'react-redux'
import { globalActions } from '@/store/global'
import { useDispatch } from 'react-redux'
import { ConfirmDialogProvider } from '@/context/ConfirmModal/ConfirmDialogProvider'

type ExtendedAppProps = AppProps & {
  Component: NextPage
  emotionCache: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: ExtendedAppProps) => {
  const dispatch = useDispatch()
  const getLayout = Component.getLayout ?? (page => <DashboardLayout>{page}</DashboardLayout>)

  useEffect(() => {
    dispatch(globalActions.getDistricts())
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeWrapper>
        <NotificationProvider>
          <SnackbarProvider>
            {getLayout(
              <ConfirmDialogProvider>
                <Component {...pageProps} />
              </ConfirmDialogProvider>
            )}
          </SnackbarProvider>
        </NotificationProvider>
      </ThemeWrapper>
    </CacheProvider>
  )
}

export default wrapper.withRedux(App)
