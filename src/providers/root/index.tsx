'use client'

import { ReactQueryProvider } from './react-query-provider'
import { type PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'

import { ProviderComposer } from '../../components/common/ProviderComposer'
import { DebugProvider } from './debug-provider'
import { DrawerStackProvider } from './drawer-stack-provider'
import { EventProvider } from './event-provider'
import { JotaiStoreProvider } from './jotai-provider'
import { ModalStackProvider } from './modal-stack-provider'
// import { MouseFollower } from './mouse-provider'
import { PageScrollInfoProvider } from './page-scroll-info-provider'

const contexts: JSX.Element[] = [
  <ThemeProvider key="themeProvider" defaultTheme="dark" />,
  <ReactQueryProvider key="reactQueryProvider" />,
  <JotaiStoreProvider key="jotaiStoreProvider" />,
  // <MouseFollower key="mouseFollowerProvider" />,
]

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <ProviderComposer contexts={contexts}>
        {children}
        <ModalStackProvider key="modalStackProvider" />
        <DrawerStackProvider key="DrawerStackProvider" />
        <EventProvider key="viewportProvider" />
        <PageScrollInfoProvider key="PageScrollInfoProvider" />
        <DebugProvider key="debugProvider" />
      </ProviderComposer>
    </>
  )
}
