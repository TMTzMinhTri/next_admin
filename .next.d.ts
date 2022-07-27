import { Store } from '@reduxjs/toolkit'
import { AppState } from './src/store'

declare module 'next/dist/next-server/lib/utils' {
  export interface NextPageContext {
    store: Store<AppState>
  }
}
