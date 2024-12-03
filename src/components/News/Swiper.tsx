'use client'

import { Swiper as Sw, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import { useRef } from 'react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'

export const Swiper = () => {
  const swiperRef = useRef<any>()
  return (
    <>
      <div className="bg-[#1B2433] pt-10">
        <div className="container relative mx-auto">
          <Sw
            effect="fade"
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={true}
            modules={[EffectFade, Pagination, Autoplay]}
            className="w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <SwiperSlide key={i} className="">
                <img
                  src={`https://bbin103.com/images/POS/${i}.jpg`}
                  className="h-[480px] w-full"
                />
                <div className="flex items-start  bg-slate-700 px-10 pb-4">
                  <div className="">
                    <p className="text-[150px]">30</p>
                    <p className="text-3xl">2024-01-10</p>
                  </div>
                  <div className="mx-10 pt-[50px] text-[24px]">
                    <p>
                      JOIN THE ULTIMATE HEIST IN THE NEW GAME: WILD HEIST
                      CASHOUT!
                    </p>
                    <p className="mt-5 text-gray-500">
                      WHEN THE THIEF REACHES THE VAULT, STACKED WILD SYMBOLS ARE
                      AWARDED!
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Sw>
          <div className=" relative mx-auto border-t border-slate-500 bg-slate-700 px-5">
            <div className="flex h-[80px] items-center  justify-between">
              <div className="flex gap-4 text-xl">
                <p className="text-white">ALL</p>
                <p className="text-gray-500 hover:text-white">RELEASEGAME</p>
                <p className="text-gray-500 hover:text-white">RELEASE</p>
              </div>
              <div className="mr-[180px] h-[14px] w-[50px]">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NC40NiAxNS4wMSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM5NTk1OTU7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT7otYTmupAgNDM8L3RpdGxlPjxnIGlkPSLlm77lsYJfMiIgZGF0YS1uYW1lPSLlm77lsYIgMiI+PGcgaWQ9IuWbvuWxgl8xLTIiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyNy40OSAxNS4wMSAwIDAuOTIgMC40NiAwLjAzIDI3LjQ5IDEzLjg4IDU0IDAgNTQuNDYgMC44OSAyNy40OSAxNS4wMSIvPjwvZz48L2c+PC9zdmc+" />
              </div>
              <div className="w-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
