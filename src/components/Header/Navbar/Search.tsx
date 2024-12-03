// import { Input } from '@nextui-org/input'

import clsx from 'clsx'

export function Search({ active, onClose }: any) {
  return (
    <>
      <div className={clsx(`${active && 'search__active'}`)}>
        <div className="search__popup-wrap">
          <div className="search__layer" />
          <div
            className="search__close"
            onClick={() => {
              if (onClose) onClose()
            }}
          >
            <span>
              <i className="icon-[mingcute--close-fill] " />
            </span>
          </div>
          <div className="search__wrap text-center">
            <div className="container mx-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="title text-3xl md:text-[47px]">
                    ... <span>Search Here</span> ...
                  </h2>
                  <div className="search__form">
                    <input
                      className="search-input-field"
                      type="text"
                      name="s"
                      placeholder="Type keywords here"
                    />
                    <button className="search-btn">
                      <i className="icon-[mingcute--search-2-line]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
