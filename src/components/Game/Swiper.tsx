import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { useState } from 'react'
import { Autoplay } from 'swiper/modules'

export const SwiperTop = () => {
  const [active, setActive] = useState(0)
  const [swiperRef, setSwiper] = useState<any>()
  return (
    <>
      <div className="swiper-container">
        <Swiper
          slidesPerView={1}
          onSlideChange={(e) => setActive(e.realIndex)}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          onSwiper={(swiper) => setSwiper(swiper)}
          modules={[Autoplay]}
        >
          {[1, 2, 3, 4, 5, 6].map((v) => {
            return (
              <SwiperSlide key={v}>
                <div className="swiper-slides bg-[#462818]" />
                <div className="container mx-auto">
                  <img
                    src="https://www.pgsoft.com/uploads/Games/Images/f3db99ec-755a-4df0-a486-604f0628dd77.jpg"
                    alt=""
                    className="swiper-slides_img h-[300px] w-[100vw] border-0 outline-none md:h-[576px]"
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className="slide-pag bottom-5 left-[50%] w-full translate-x-[-50%]">
          <div className="pag-cover">
            <div className="pag-bg" />
            {[1, 2, 3, 4, 5, 6].map((v, k) => {
              return (
                <div
                  className={`pagbox ${
                    active === k ? 'active' : ''
                  } h-[30px] w-[30px] md:h-[56px] md:w-[56px]`}
                  key={v}
                  onClick={() => {
                    swiperRef && swiperRef.slideTo(k)
                  }}
                >
                  <img src="https://www.pgsoft.com/uploads/Games/Images/2e54b0dc-718b-47f2-9895-24b3808ed73b.png" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
