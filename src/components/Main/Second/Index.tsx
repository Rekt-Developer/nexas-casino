'use client'

import Image from 'next/image'

import './second.css'

import { useRef, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

import { AnimationText } from '~/components/ui/text/AnimationText'

import { Animation } from './Animation'

export const Second = () => {
  const [spine, setSpine] = useState<boolean>(false)
  const spineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ['start end', 'end end'],
  })
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest > 0.7) {
      setSpine(true)
    }
  })
  return (
    <div className="second">
      <div className="container mx-auto pb-10 lg:max-w-[1300px]">
        <div className="flex flex-col-reverse items-start pt-5 md:items-center md:justify-between md:pt-[10rem] lg:flex-row">
          <div className="flex flex-1 flex-col justify-start px-5 md:mb-[5rem] lg:px-6">
            <div className="nft_site my-[2rem] text-center text-3xl font-[800] after:!content-[unset] md:mb-[2rem] md:mt-0 md:text-start md:text-[45px]  md:after:!content-['']">
              <AnimationText
                text="BRANDING CONCEPT"
                color="white"
                isShadow={false}
              />
              <br />
              <AnimationText text="MYERLY" color="white" isShadow={false} />
            </div>
            <motion.div ref={spineRef} className="relative block md:hidden">
              <Animation />
            </motion.div>
            <div className="sub break-all tracking-wider">
              <AnimationText
                text="MYERLY (abbreviated as MY) has gone through years of industry
              practice, understanding market demand and daring to try.
              Regardless of the game style, operation interface, and topic
              themes, it uses the latest H5 technology to provide a rich and
              diverse gaming experience, making players enjoy it tirelessly and
              becoming the focus of the industry`s attention."
                speed={0.001}
                color="#ADB0BC"
              />
            </div>
            <div className="flex flex-col-reverse items-center justify-between md:flex-row">
              <div className="flex flex-col items-center justify-center md:block">
                <div className="mb-[3rem] mt-10 flex items-center  justify-start">
                  <button className="rounded-md bg-[#45f882] px-7 py-3 text-start font-bold text-black hover:bg-[#C6923D] hover:text-white">
                    READ MORE
                  </button>
                  <div className="ml-10 flex items-center gap-4 text-[14px] font-bold">
                    <div
                      className=" flex h-[46px] w-[46px] items-center justify-center rounded-full border border-solid text-[24px] text-[#45f882] hover:border-green-500 hover:bg-[#45f882]
                       hover:text-black"
                    >
                      <i className="icon-[mingcute--play-fill] " />
                    </div>
                    How It Work
                  </div>
                </div>
              </div>
              <div className="rotats hover:animation-pause relative h-[137px] w-[137px] md:top-[-20px] md:mr-[50px]">
                <Image
                  width={137}
                  height={137}
                  className="z-2 relative"
                  decoding="async"
                  src="/images/wheel.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end md:justify-center lg:w-[620px]">
            <motion.div ref={spineRef} className="relative hidden md:block">
              <Animation />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
