export const GameTop = () => {
  return (
    <>
      <div className="row cus-mar our-games justify-content-center bg-transparent py-10 md:py-20">
        {[1, 2].map((v) => (
          <div className="col-md-6 my-4 md:my-0" key={v}>
            <div className="single-box">
              <div className="relative d-center">
                <img
                  width="526"
                  height="250"
                  src="https://titu.softivus.com/gamestorm/wp-content/uploads/2023/11/game-card-3.png"
                  className="thumb-img wp-post-image w-full"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/watch?v=NZW7yzIrxOo"
                  className="box-style btn-box-second heading-five fs-five mfp-iframe popupvideo text-uppercase !absolute d-center"
                >
                  Play
                </a>
              </div>
              <div className="info-area relative p-3 lg:p-5">
                <div className="flex items-end gap-4">
                  <div className="img-area">
                    <img
                      decoding="async"
                      src="https://titu.softivus.com/gamestorm/wp-content/uploads/2023/11/review-img-1.png"
                      alt="image"
                    />
                  </div>
                  <div className="info-area">
                    <div className="flex items-center gap-2">
                      <p className="global-tag bg-[red]">Nick</p>
                      <p className="global-tag bg-yellow-500">Good</p>
                    </div>
                    <h3 className="visible-slowly-bottom text-3xl">
                      King Of Jungle
                    </h3>
                  </div>
                </div>
                <div className="mb-6 mt-4 w-full justify-between gap-3 rounded bg-[#4c4d5a] p-2 d-center sm:p-4 md:mb-10 md:mt-8">
                  <p>很长的一段介绍</p>
                </div>
                <div className="flex items-center justify-around gap-4">
                  <div className="cursor-pointer rounded-[8px] border px-5 py-2 text-center text-white hover:bg-black  hover:text-white hover:shadow-[0_0_16px_#efefef] md:px-10 md:text-2xl">
                    View More
                  </div>
                  <div className="rounded-[8px] bg-[#45f882] px-5 py-2 text-center text-black hover:shadow-[0_0_16px_#09926a] md:px-10 md:text-2xl">
                    Play Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
