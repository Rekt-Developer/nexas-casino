'use client'

import { useRef, useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'

import bg from '~/assets/img/video_bg.jpg'

export const Fifth = () => {
  const carouselRef = useRef(null)
  const [transl, setTransl] = useState('-100vh')
  const { scrollYProgress } = useScroll({
    target: carouselRef,
    offset: ['start end', 'end start'],
  })
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setTransl(`-${100 - latest * 150}vh`)
  })
  return (
    <>
      <section
        ref={carouselRef}
        className="video__area video-bg tg-jarallax overflow-hidden"
      >
        <div className="absolute z-[-2] overflow-hidden wh-full">
          <div
            className="mt-[130px] h-[100vh] w-[100vw] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bg.src})`,
              transform: `translate3d(0,${transl},0)`,
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              overflow: 'hidden',
              pointerEvents: 'none',
            }}
          />
        </div>
        <div className="container mx-auto">
          <div className="row justify-center">
            <div className="col-xl-6 col-lg-8 col-md-11">
              <div className="video__content text-center">
                <div className="popup-video cursor-pointer">
                  <i className="flaticon-play" />
                </div>
                <h2 className="title">
                  JOIN THE <span>COMMUNITY</span>
                </h2>
                <p>Join our Discord community and choosec onsteur</p>
                <button className="rounded-md bg-[#45f882] px-7 py-3 text-start font-bold text-black hover:bg-[#C6923D] hover:text-white">
                  JOIN DISCORD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
