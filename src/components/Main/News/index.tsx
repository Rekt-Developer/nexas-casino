export const News = () => {
  return (
    <>
      <section className="world-news-area">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-8 h-full">
              <div className="hf-section-title mb-[40px] text-3xl">
                <h4 className="title">WORLD NEWS</h4>
              </div>
              <div className="flex w-full gap-4 md:gap-[2rem]">
                <div className="basis-[50%]">
                  <div className="world-news-item">
                    <div className="banner-magazine-thumb">
                      <div className="tags">
                        <a href="#">sports</a>
                      </div>
                      <img
                        src="/images/people/people1.png"
                        alt=""
                        className="wh-full"
                      />
                    </div>
                    <div className="banner-magazine-content">
                      <span className="date">December 19, 2021</span>
                      <h5 className="title">
                        <a href="#">50 Years After The Moon Landing NEL</a>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="basis-[50%]">
                  <div className="world-news-item ">
                    <div className="banner-magazine-thumb">
                      <div className="tags">
                        <a href="#">sports</a>
                      </div>
                      <img
                        src="/images/people/people2.png"
                        alt=""
                        className="wh-full"
                      />
                    </div>
                    <div className="banner-magazine-content">
                      <span className="date">December 19, 2021</span>
                      <h5 className="title">
                        <a href="#">Twas the night before in the NFLL</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <aside className="home-sidebar-news  h-full">
                <div className="business-news-head mb-[50px]">
                  <div className="hf-section-title text-3xl">
                    <h4 className="title">Business</h4>
                  </div>
                </div>
                <div className="business-news-active slick-initialized slick-slider ">
                  <div className="slick-list">
                    <div className="slick-track">
                      <div className="business-news-item slick-slide slick-cloned h-full md:w-[400px]">
                        <div className="business-news-post relative">
                          <img
                            src="/images/people/top1.png"
                            alt=""
                            className="wh-full"
                          />
                          <div className="trend-news-content absolute bottom-5 left-5">
                            <span className="date">December 19, 2021</span>
                            <h4 className="title w-[70%]">
                              <a href="#">House Girls AND MORE Money</a>
                            </h4>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3">
                          <div className="trending-news-item horizontal-item blue mb-[2.5rem] mt-[1rem]">
                            <div className="trend-news-thumb">
                              <img
                                src="/images/people/top2.png"
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <div className="trend-news-content">
                              <div className="tags">
                                <a href="#">sports</a>
                              </div>
                              <span className="date">December 19, 2021</span>
                              <h4 className="title">
                                <a href="#">House last week that move would</a>
                              </h4>
                            </div>
                          </div>
                          <div className="trending-news-item horizontal-item">
                            <div className="trend-news-thumb">
                              <img
                                src="/images/people/top3.png"
                                alt=""
                                className="w-full"
                              />
                            </div>
                            <div className="trend-news-content">
                              <div className="tags">
                                <a href="#">game</a>
                              </div>
                              <span className="date">December 19, 2021</span>
                              <h4 className="title">
                                <a href="#">Twas the night before in the NFL</a>
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
