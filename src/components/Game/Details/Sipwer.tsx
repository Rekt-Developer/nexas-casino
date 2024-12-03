'use client'

import { Swiper as Sw, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import { useRef } from 'react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'

export const Swiper = () => {
  const swiperRef = useRef<any>()
  return (
    <>
      <div className="bg-[#212434] ">
        <div className=" container relative mx-auto">
          <Sw
            effect="coverflow"
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 60,
              depth: 300,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            pagination={true}
            autoplay={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <SwiperSlide key={i}>
                <img src={`https://bbin103.com/images/POS/${i}.jpg`} />
              </SwiperSlide>
            ))}
          </Sw>
          <div className="absolute top-0 z-[3] flex justify-between  wh-full">
            <div className="bg-mask h-full w-[calc(50%-160px)] bg-gray-700/80" />
            <div className="absolute left-[50%] top-7 z-[3] h-[630px] w-[350px] translate-x-[-53%]">
              <img src="/images/iphone14.png" className="wh-full" />
            </div>
            <div className="h-full w-[calc(50%-140px)] bg-gray-700/80" />
          </div>
        </div>
      </div>
    </>
  )
}
