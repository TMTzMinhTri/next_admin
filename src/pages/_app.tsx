import * as React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next'
import { CacheProvider, EmotionCache } from '@emotion/react'

import createEmotionCache from '@/libs/createEmotionCache'
import { SettingsConsumer, SettingsProvider } from '@/contexts/settingsContext'
import ThemeComponent from '@/containers/ThemeWrapper'
import themeConfig from '@/constants/themeConfig'
import { ConfirmDialogProvider } from '@/contexts/confirmDialogContext'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  Component: NextPage
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? ((page: any) => <div>{page}</div>)

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
      <ConfirmDialogProvider>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return <ThemeComponent settings={settings}>{getLayout(<Component {...pageProps} />)}</ThemeComponent>
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </ConfirmDialogProvider>
    </CacheProvider>
  )
}

export default MyApp
