'use client'

// import { useRef, useState } from 'react'
// import clsx from 'clsx'
// import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

export function Video() {
  // const ref = useRef(null)
  // const { scrollY } = useScroll({
  //   target: ref,
  //   offset: ['end end', 'start start'],
  // })

  // const [rotateX, setRotateX] = useState(0)

  // useMotionValueEvent(scrollY, 'change', (latest) => {
  //   if (latest > 450) {
  //     return setRotateX(90)
  //   } else setRotateX(0)
  // })
  return (
    <>
      <div>
        <div className="md:absolute md:inset-0">
          <video
            className="w-full object-cover md:h-full"
            autoPlay
            muted
            playsInline
            loop
          >
            <source
              src="https://anjituhemawu.oss-cn-hongkong.aliyuncs.com/12%E6%9C%8824%E6%97%A5%282%29.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* <motion.div
          className={clsx(`absolute
          bottom-0 left-[50%] flex h-[50px]
            w-[90vw] origin-bottom flex-col items-center justify-center rounded-tl-xl rounded-tr-xl bg-black text-center`)}
          animate={{
            rotateX,
          }}
          style={{
            x: '-50%',
            ...(rotateX > 450 && { rotateX }),
          }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <p className="text-3xl">
            {rotateX}
            MYRLIE SLOTS LET PLAYERS ENJOY IT ENDLESSLY
          </p>
        </motion.div> */}
      </div>
    </>
  )
}
