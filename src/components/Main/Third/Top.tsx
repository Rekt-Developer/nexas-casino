'use client'

import { useEffect, useRef, useState } from 'react'
import { atom, useAtom } from 'jotai'
import Image from 'next/image'

import { useIsMobile } from '~/atoms'
import { MusicButton } from '~/components/common/MusicButton'
import { AnimationText } from '~/components/ui/text/AnimationText'

export const tabActive = atom(0)

export function Card({ grayscale = true, customClass = '' }) {
  const isMobile = useIsMobile()
  const divRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useAtom(tabActive)
  const timer: any = null
  let index = 0
  const [isPaused, setIsPaused] = useState(false)
  const [animationFrameId, setAnimationFrameId] = useState<number>()

  function scrollAnimation() {
    if (isPaused) return

    index++

    if (divRef.current) {
      if (index >= divRef.current!.scrollWidth! - 300) index = 0
      divRef.current.scrollLeft = index
    }

    setAnimationFrameId(requestAnimationFrame(scrollAnimation))
  }

  function startScrolls() {
    if (!isMobile || isPaused) return

    setAnimationFrameId(requestAnimationFrame(scrollAnimation))
  }

  useEffect(() => {
    console.log('🚀 ~ file: Top.tsx:51 ~ Card ~ isPaused:', isPaused)

    if (isMobile) {
      startScrolls()
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile, isPaused])

  return (
    <div
      ref={divRef}
      className="flex items-center justify-start gap-5 overflow-y-hidden overflow-x-scroll pl-[20px]  wh-full md:justify-center"
      onTouchMove={() => setIsPaused(true)}
      onTouchEnd={() => {
        clearInterval(timer)
        index = divRef.current?.scrollLeft || 0
        setIsPaused(false)
      }}
    >
      {[
        'pic_caisheng',
        'pic_tanxian',
        'pic_laohu',
        'pic_majiang',
        'pic_puke',
        'pci_yaoqianshu',
      ].map((_v, k) => (
        <MusicButton
          once
          src="/music/tab.mp3"
          className={`${k === active ? 'active' : ''}`}
          onClick={() => setActive(k)}
          key={k}
        >
          <div
            className={`h-[137px] w-[191px] md:wh-full ${
              k === active
                ? 'wealthgod-active'
                : 'transition-all duration-75  hover:scale-[1.2]'
            }
              ${grayscale ? 'grayscale hover:grayscale-0' : ''}
              ${customClass}
              `}
          >
            <Image
              decoding="async"
              className="relative z-[2]"
              src={`/images/${_v}.png`}
              alt="Image"
              width={191}
              height={137}
            />
          </div>
        </MusicButton>
      ))}
    </div>
  )
}

export const Top = ({ grayscale = true }: { grayscale?: boolean }) => {
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      textShadow: ['none', '#45f882 0px 0px 25px', 'none', 'none'],
    },
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <AnimationText text="The latest" />
        <div
          className="nft_site text-center text-[45px] font-bold tracking-[2px] md:text-start"
          style={
            {
              '--site-margin': 'auto',
            } as any
          }
        >
          <AnimationText text="NEW GAMES RELEASE" color="white" />
        </div>
        <div className="w-full">
          <div className="nav-tabs w-full">
            <Card grayscale={grayscale} />
          </div>
        </div>
      </div>
    </>
  )
}
