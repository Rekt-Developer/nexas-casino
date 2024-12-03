import './index.css'

export const Top = () => {
  return (
    <div
      className="h-[300] w-full"
      style={{
        background:
          'url("https://titu.softivus.com/gamestorm/wp-content/uploads/2023/11/game-details-banner-illus.jpg") no-repeat center center / cover',
      }}
    >
      <div className="container relative mx-auto">
        <div className="flex  p-[70px_0_100px] md:p-[450px_0_180px] ">
          <div className="col-xxl-5 col-xl-6 col-lg-8 md:col-10 mb-6 md:mb-0">
            <div className="flex flex-wrap gap-6 rounded-[12px] bg-[#222434] p-3 px-4 sm:gap-10">
              <div className="active-now border-r pr-[4rem]">
                <span className="text-[16px] text-[#0ef0ad]">Online</span>
                <h2 className="text-[40px]">19,302,927</h2>
              </div>

              <div className="active-now now">
                <span className="ml-3 text-[16px] text-[#0ef0ad]">
                  Playing Now
                </span>
                <h2 className="text-[40px]">4,831,224</h2>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-10 right-0">
            <button className="box-style btn-box text-center text-black">
              Get Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
