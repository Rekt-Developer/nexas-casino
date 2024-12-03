// import bg from '~/assets/img/5.jpg'

export const Eight = () => {
  return (
    <>
      <section
        className=" flex min-h-[450px] bg-black bg-cover bg-center"
        // style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container mx-auto">
          <div className="row h-full items-center pt-10 md:py-[130px]">
            <div className="col-lg-12 mb-5">
              <div className="pq-section-title-style-1 text-center">
                <h2 className="pq-section-main-title">our trusted clients</h2>
              </div>
            </div>
            <div className="mx-auto flex flex-wrap justify-start">
              {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((v) => {
                return (
                  <div
                    className="flex h-[100px] basis-[50%] items-center justify-center md:basis-[20%]"
                    key={v}
                  >
                    <div className="pq-client-box relative overflow-hidden wh-full md:h-[100px] md:w-[200px]">
                      <img
                        decoding="async"
                        src={`/images/logos/${v}.png`}
                        alt="pq-client-img"
                        className="pq-client-img wh-full"
                      />
                      <img
                        decoding="async"
                        src={`/images/logos/h${v}.png`}
                        alt="pq-client-img"
                        className="pq-client-hover-img wh-full"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
