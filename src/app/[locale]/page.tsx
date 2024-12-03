'use client'

import { motion } from 'framer-motion'

import { ModalRead } from '~/components/common/ModalRead'
import { Chat } from '~/components/Main/Chat'
import { Eight } from '~/components/Main/Eight'
import { Fifth } from '~/components/Main/Fifth/Index'
import { Forth } from '~/components/Main/Forth/Index'
import { News } from '~/components/Main/News'
import { Second } from '~/components/Main/Second/Index'
import { Seven } from '~/components/Main/Seven/Index'
// import { Sixth } from '~/components/Main/Sixth'
import { Third } from '~/components/Main/Third/Index'
import { Video } from '~/components/Main/Video'
import { isClientSide } from '~/lib/env'

export default function Home() {
  return (
    <>
      <div className="w-[100vw] md:h-[calc(100vh-100px)]">
        <Video />
      </div>
      <Second />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        <Third />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Forth />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Fifth />
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Seven />
      </motion.div>
      {/* <Sixth /> */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <News />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Eight />
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <Chat />
      </motion.div>
      {isClientSide && !localStorage.getItem('isRead') && <ModalRead />}
    </>
  )
}
