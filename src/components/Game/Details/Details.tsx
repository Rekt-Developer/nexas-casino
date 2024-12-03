import { motion } from 'framer-motion'

import { Card } from '~/components/Main/Third/Top'

export const Details = () => {
  return (
    <>
      <div className="w-full bg-[#151829] py-[5rem]">
        <div className="container mx-auto md:!w-[1000px]">
          <div className="bg-[#222434] p-10 sm:p-[3rem]">
            <div className="flex flex-col-reverse justify-between gap-2 md:flex-row">
              <div className="col-lg-6 h-full">
                <div className="mb-sm-10 mb-5 mt-2">
                  <div className="flex gap-2">
                    <p className="global-tag bg-red-500">HOT</p>
                    <p className="global-tag bg-yellow-500">NEW</p>
                  </div>
                  <h2 className="my-[2rem] text-[32px] md:text-[40px] md:leading-[48px]">
                    Mahjong Ways
                  </h2>
                  <p className="info relative my-4 flex gap-2 indent-4">
                    We are a community of millions of King og Jungle. If you are
                    up for a challenge, join us and become #1 in the world!
                  </p>
                  <p className="info relative my-4 flex gap-2 indent-4">
                    We are a community of millions of King og Jungle. If you are
                    up for a challenge, join us and become #1 in the world!
                  </p>
                </div>
                <div className="social-items">
                  <a
                    className="play mt-[1rem] w-full items-center justify-center md:w-[auto]"
                    href="http://8.217.104.5:8886/"
                    target="_black"
                  >
                    <i className="icon-[mingcute--play-fill] mr-2 text-[18px]" />
                    Try Now
                  </a>
                </div>
              </div>
              <div className="col-lg-5 mb-5 flex items-center md:mb-0">
                <div className="sec-img">
                  <img
                    decoding="async"
                    src="/images/games/game.png"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#212434] p-10 sm:p-[3rem]">
        <div className="container mx-auto md:!w-[1000px]">
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{
              ease: 'easeInOut',
              duration: 0.5,
              times: [0, 1],
            }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-10 md:flex-row"
          >
            <div className="flex flex-col justify-between md:w-[40%]">
              <div>
                <h2 className="mb-5 mt-[2rem] text-[40px] leading-[48px]">
                  Game Info
                </h2>
                <p className="text-[#c5c5ca]">
                  Take on the hottest dragon game and collect tons of adorable
                  fire-breathing dragons! Train them to your will, grow your
                  collection, and prove your might to claim the title of top
                  Dragon Master in the world!
                </p>
              </div>
              <div>
                <h2 className="mb-5 mt-[2rem] text-[40px] leading-[48px]">
                  Supported Language
                </h2>
                <div className="flex flex-wrap gap-3 rounded-md bg-[#222433] py-5">
                  {[
                    10, 11, 12, 13, 14, 15, 16, 17, 10, 11, 12, 13, 14, 15, 16,
                    17,
                  ].map((v, k) => (
                    <img
                      src={`/images/games/${v}.png`}
                      key={k}
                      alt=""
                      className=""
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="single-box md:p-15 relative text-center md:ml-10 md:w-[50%] md:p-3">
              <div className="main-content py-4">
                <span className="feature-tag !absolute right-[30px]  top-[0] hidden items-center justify-center sm:flex">
                  Feature
                </span>
                <h3 className="mb-4 text-[28px]">Download Now</h3>

                <div className="mx-2 mb-6 mt-10 cursor-pointer flex-wrap !justify-between rounded-md bg-[#404250] p-2 d-center sm:p-4 md:mx-8 md:mb-10 md:mt-8">
                  <div className="flex basis-[50%] items-center justify-start text-xl">
                    <i className="icon-[mdi--language-html5] mr-2 text-[40px]" />
                    <p className="fs-seven">HTML5</p>
                  </div>
                  <div className="flex basis-[50%] items-center justify-start text-xl">
                    <i className="icon-[mdi--android] mr-2 text-[40px]" />
                    <p className="fs-seven">Android</p>
                  </div>
                  <div className="mt-3 flex basis-[50%] items-center justify-start text-xl">
                    <i className="icon-[mdi--microsoft-windows] mr-2 text-[40px]" />
                    <p className="fs-seven">Windows</p>
                  </div>
                  <div className="mt-3 flex basis-[50%] items-center justify-start text-xl">
                    <i className="icon-[mdi--apple] mr-2 text-[40px]" />
                    <p className="fs-seven">IOS</p>
                  </div>
                </div>

                <div className="mb-6 mt-10 flex-wrap !justify-between gap-2 rounded-md p-2 d-center sm:p-4 md:mx-4 md:mb-10 md:mt-8">
                  <div className="flex w-full items-center justify-start rounded-md bg-[#222434] py-2 text-xl md:basis-[48%]">
                    <img
                      src="/images/games/1.png"
                      className="mx-3 h-[40px] w-[40px]"
                      alt=""
                    />
                    <div className="w-full !justify-between pr-2 d-center md:block md:w-[auto] md:p-0 md:pl-2">
                      <p className="fs-seven !text-[12px] md:text-[16px]">
                        Game Volatility
                      </p>
                      <p className="flex items-center text-sm">
                        <i className="icon-[mingcute--star-fill]" />
                        <i className="icon-[mingcute--star-fill]" />
                        <i className="icon-[mingcute--star-fill]" />
                        <i className="icon-[mingcute--star-half-fill]" />
                        <i className="icon-[mingcute--star-line]" />
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-start rounded-md bg-[#222434] py-2 text-xl md:basis-[48%]">
                    <img
                      src="/images/games/2.png"
                      className="mx-3 h-[40px] w-[40px]"
                      alt=""
                    />
                    <div className="w-full !justify-between pr-2 d-center md:block md:w-[auto] md:p-0 md:pl-2">
                      <p className="fs-seven !text-[14px] md:text-[16px]">
                        Max multiples
                      </p>
                      <p className="fs-seven">16200</p>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full items-center justify-start rounded-md bg-[#222434] py-2 text-xl md:basis-[48%]">
                    <img
                      src="/images/games/3.png"
                      className="mx-2 h-[40px] w-[40px]"
                      alt=""
                    />
                    <div className="w-full !justify-between px-2 d-center md:block md:w-[auto] md:p-0">
                      <p className="fs-seven !text-[14px]">
                        Specification lines
                      </p>
                      <p className="fs-seven">243</p>
                    </div>
                  </div>
                  <div className="mt-3 flex w-full items-center justify-start rounded-md bg-[#222434] py-2 text-xl md:basis-[48%]">
                    <img
                      src="/images/games/4.png"
                      className="mx-3 h-[40px] w-[40px]"
                      alt=""
                    />
                    <div className="w-full !justify-between px-2 d-center md:block md:w-[auto] md:p-0 md:pl-2 ">
                      <p className="fs-seven">Volatility</p>
                      <p className="fs-seven">2023 Q4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-[#212434] py-5">
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
            times: [0, 1],
          }}
          viewport={{ once: true }}
        >
          <Card grayscale={false} customClass="!scale-[1.2] " />
        </motion.div>
      </div>
    </>
  )
}
