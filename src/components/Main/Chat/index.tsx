import './resize.css'

import bg from '~/assets/img/chat_bg.png'

export function Chat() {
  return (
    <>
      <div
        className="booking_table_wrapper dm_cover !mb-[50px]"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
              <div className="dmx_heading_wraper">
                <h2>
                  booking <span className="text-white">your</span> table
                </h2>
                <div className="bars bars2">
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                  <div className="bar" />
                </div>

                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis
                  <br /> bibendum auctor, nisi elit consequat.
                </p>
              </div>
            </div>
            <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-12 col-12 relative">
              <div className="booking_form_field p-0 md:p-[70px]">
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="form-pos form_field">
                        <div className="form-group i-name">
                          <input
                            type="text"
                            name="first_name"
                            className="form-control require"
                            placeholder="Your Name*"
                          />
                          <i className="icon-[mingcute--user-1-fill]" />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="form-e form_field">
                        <div className="form-group i-email">
                          <label className="sr-only">Email </label>
                          <input
                            type="email"
                            name="email"
                            className="form-control require"
                            placeholder="You Email *"
                            data-valid="email"
                            data-error="Email should be valid."
                          />
                          <i className="icon-[mingcute--mail-fill]" />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-m form_field">
                        <div className="form-group i-name">
                          <textarea
                            className="form-control"
                            placeholder="Input Your information"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="tb_es_btn_div">
                        <div className="response" />
                        <div className="tb_es_btn_wrapper">
                          <button
                            type="button"
                            className="submitForm !text-black"
                          >
                            book now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
