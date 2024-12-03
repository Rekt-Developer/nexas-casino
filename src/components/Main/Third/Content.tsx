'use client'

import { useState } from 'react'
import { useUpdateEffect } from 'ahooks'
import { motion } from 'framer-motion'
import { useAtomValue } from 'jotai'
import Link from 'next/link'

import { tabActive } from './Top'

export const Content = () => {
  const tabAtom = useAtomValue(tabActive)
  const [animation, setAnimation] = useState({})
  useUpdateEffect(() => {
    setAnimation({
      opacity: [0, 1],
      y: [50, 0],
    })

    setTimeout(() => {
      setAnimation({})
    }, 500)
  }, [tabAtom])
  return (
    <>
      <div className="tab-content" id="myTabContent">
        <motion.div
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={animation}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
            times: [0, 1],
          }}
          className="tab-pane show active"
        >
          <div className="flex flex-col md:flex-row">
            <div className="flex w-[100%]  flex-[0_0_auto] items-end px-5 md:w-[44%]">
              <div className="md:h-full">
                <video
                  src="/music/video.mp4"
                  className="object-fill wh-full"
                  controls
                  poster="/images/poster.jpg"
                />
              </div>
            </div>
            <div className="mt-3 w-full px-10 md:mt-0 md:px-0">
              <div className="about__flex-wrap">
                <div className="about__content-wrap">
                  <div className="about__content">
                    <h4 className="title">CAISHEN-LUCKY SPREAD</h4>
                    <span className="rate">Rate 50%</span>
                    <p className="text-[#ADB0BC]">
                      CAISEN in the house, win a big prize! Going up to 100,000X
                      with WILD symbol upgraded. Exclusive SPREAD respin &
                      multiplier scroll feature make you win easily! Multiplier
                      accumulation brings unlimited prize in bonus games!
                    </p>
                  </div>
                  <div className="about__content-list">
                    <ul className="list-wrap">
                      <li className="flex !bg-[#253028]">
                        <img
                          decoding="async"
                          src="/images/game_name3.png"
                          width="45"
                          alt="Image"
                        />{' '}
                        <p>Game Volatility：</p>
                        <p className="flex-1 text-sm">
                          <i className="icon-[mingcute--star-fill]" />
                          <i className="icon-[mingcute--star-fill]" />
                          <i className="icon-[mingcute--star-fill]" />
                          <i className="icon-[mingcute--star-half-fill]" />
                          <i className="icon-[mingcute--star-line]" />
                        </p>
                      </li>
                      <li className="!bg-[#423022]">
                        <img
                          decoding="async"
                          src="/images/game_name2.png"
                          width="45"
                          alt="Image"
                        />{' '}
                        Max multiples：16200
                      </li>
                      <li className="bg-[#4A3F28]">
                        <img
                          decoding="async"
                          src="/images/game_name1.png"
                          width="45"
                          alt="Image"
                        />{' '}
                        Specification lines： 243
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="about__btn-wrap">
                  <ul className="list-wrap">
                    <li>
                      <Link href="#" target="_blank">
                        Try Now
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        Details
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
