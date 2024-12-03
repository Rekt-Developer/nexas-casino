'use client'

import { MouseFollower as MF, UpdateFollower } from 'react-mouse-follower'
import type { PropsWithChildren, ReactElement } from 'react'

import { useIsDark } from '~/hooks/common/use-is-dark'
import { isClientSide } from '~/lib/env'

function MouseF({ children }: any) {
  const isDark = useIsDark()

  return (
    <>
      <MF />
      <UpdateFollower
        mouseOptions={{
          zIndex: 1,
          backgroundColor: isDark ? 'white' : 'black',
        }}
        style={{
          height: '100vh',
        }}
      >
        {children}
      </UpdateFollower>
    </>
  )
}

export const MouseFollower = ({
  children,
}: PropsWithChildren): ReactElement => {
  return isClientSide && innerWidth > 700 ? (
    <MouseF>{children}</MouseF>
  ) : (
    <>{children}</>
  )
}
