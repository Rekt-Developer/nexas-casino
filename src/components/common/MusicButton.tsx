'use client'

import { useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'

import { useAudioPlayer } from '~/hooks/shared/use-audio'

export const MusicButton: FC<{
  src?: string
  children: ReactNode
  className?: string
  onClick?: () => void
  once?: boolean
}> = ({
  children,
  className,
  src = '/music/click.wav',
  once = false,
  onClick,
}) => {
  const [show, setShow] = useState(false)
  const { play } = useAudioPlayer(src)
  const { play: removePlay } = useAudioPlayer('/music/remove.wav')
  useEffect(() => {
    if (show) {
      play()
    } else {
      removePlay()
    }
  }, [show])
  return (
    <button
      className={`${className}`}
      onClick={() => {
        if (onClick) {
          onClick()
        }
        if (once) {
          play()
        } else {
          setShow(!show)
        }
      }}
    >
      {children}
    </button>
  )
}
