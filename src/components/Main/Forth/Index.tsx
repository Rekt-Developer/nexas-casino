'use client'

import './index.css'

import { AnimationText } from '~/components/ui/text/AnimationText'
import { useRouter } from '~/i18n'

import Hero from './Hero'

export const Forth = () => {
  const router = useRouter()
  const item = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      textShadow: ['none', '#45f882 0px 0px 25px', 'none', 'none'],
    },
  }
  return (
    <div className="forth">
      <div className="relative w-full overflow-hidden pb-20 md:py-[130px]">
        <section className="md:mx-[180px] ">
          <div className="flex flex-col md:flex-row">
            <div className=" mb-10 flex-initial flex-shrink-0 text-center md:mb-0 md:flex md:w-[430px] md:flex-col md:justify-center md:text-start">
              <div className="text-[45px]">
                <AnimationText text="PROJECTS MYKD" color="white" />
              </div>
              <AnimationText text="OUR LATEST GALLERY" />
              <div className="mt-3">
                <button
                  className="mb-3 rounded-md bg-[#45f882] px-7 py-3 text-start font-bold text-black hover:bg-[#C6923D] hover:text-white md:mb-0"
                  onClick={() => router.push('/game')}
                >
                  More Game
                </button>
              </div>
            </div>
            <Hero />
          </div>
        </section>
        {/* <div className="swiper-scrollbar">
          <div className="swiper-scrollbar-drag" />
        </div> */}
      </div>
    </div>
  )
}
