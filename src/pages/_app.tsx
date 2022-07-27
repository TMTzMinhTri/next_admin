import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { CacheProvider, EmotionCache } from '@emotion/react'
import NProgress from 'nprogress'
import { Router } from 'next/router'
import { SnackbarProvider } from 'notistack'
import 'react-perfect-scrollbar/dist/css/styles.css'
import { NextPageContext } from 'next'

import createEmotionCache from '@/libs/createEmotionCache'
import { SettingsConsumer, SettingsProvider } from '@/contexts/settingsContext'
import ThemeComponent from '@/containers/ThemeWrapper'
import themeConfig from '@/constants/themeConfig'
import AdminLayout from '@/layout/AdminLayout'
import { wrapper } from '@/store'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps, NextPageContext {
  Component: NextPage
  emotionCache?: EmotionCache
}

if (themeConfig.routingLoader) {
  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeError', () => {
    NProgress.done()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? ((page: any) => <AdminLayout>{page}</AdminLayout>)

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{`${themeConfig.templateName} - Material Design React Admin Template`}</title>
        <meta
          name='description'
          content={`${themeConfig.templateName} – Material Design React Admin Dashboard Template – is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.`}
        />
        <meta name='keywords' content='Material Design, MUI, Admin Template, React Admin Template' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                <SnackbarProvider maxSnack={3}>{getLayout(<Component {...pageProps} />)}</SnackbarProvider>
              </ThemeComponent>
            )
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  )
}

export default wrapper.withRedux(MyApp)
