import { motion } from 'framer-motion'

import { useRouter } from '~/i18n'

export const Games = () => {
  const router = useRouter()
  return (
    <>
      <div className="flex flex-wrap items-center">
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2].map((v, k) => (
          <div
            className="col-5 col-sm-3 relative my-3 h-full !w-[48%] select-none even:ml-3 sm:m-3 sm:!w-[23.1%]"
            key={k}
            onClick={() => router.push(`/game/detail?id=${v}`)}
          >
            <div className="absolute left-2 top-2 flex w-full flex-wrap">
              <p className="global-tag mx-2 my-1 bg-[red]">HOT</p>
              <p className="global-tag mx-2 my-1 bg-yellow-500">NEW</p>
              <p className="global-tag mx-2 my-1 bg-[#ffb800]">FEATURE BUY</p>
            </div>
            <img
              src={`/images/card/${v}.png`}
              alt=""
              className="w-full rounded-2xl"
            />
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
              }}
              className="z-2 absolute left-0 top-0 flex  flex-col items-center justify-center rounded-2xl bg-no-repeat wh-full"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <img
                src={`/images/card/pic_${v}.png`}
                alt=""
                className="rounded-2xl"
              />
              <button
                className="white rounded-md border px-7 py-3 text-start font-bold hover:bg-[#45f882] hover:text-black"
                onClick={(e) => {
                  e.stopPropagation()
                  router.push(`/game/detail?id=${v}`)
                }}
              >
                &nbsp;&nbsp;Details&nbsp;&nbsp;
              </button>
              <button
                className="mt-4 rounded-md bg-[#45f882] px-7 py-3 text-start font-bold text-black hover:bg-[#C6923D] hover:text-white"
                onClick={(e) => {
                  e.stopPropagation()
                  router.push(`/game/detail?id=${v}`)
                }}
              >
                Try Now!
              </button>
            </motion.div>
          </div>
        ))}
      </div>
    </>
  )
}
