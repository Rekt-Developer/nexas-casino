'use client'

import { Games } from '~/components/Game/Games'
import { GameTop } from '~/components/Game/GameTop'
// import { motion } from 'framer-motion'
import { SwiperTop } from '~/components/Game/Swiper'

export default function Home() {
  return (
    <>
      <SwiperTop />
      <div className="bg-[#252433]">
        <div className="container  mx-auto">
          <GameTop />
        </div>
      </div>
      <div className="bg-[#1F1F1D] py-10">
        <div className="container  mx-auto">
          <Games />
        </div>
      </div>
    </>
  )
}
