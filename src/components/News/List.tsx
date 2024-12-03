/* eslint-disable react/jsx-key  */

// import { motion } from "framer-motion";
import { Fragment } from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import './style.css'

const customContent = [
  {
    date: '2021',
    title: 'MYERLY',
    img: 'https://www.myerly.com/images/branding/branding_1.png',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
  {
    date: '2021',
    title: 'MYERLY',
    content:
      'MYERLY (abbreviated as MY) has gone through years of industry practice, understanding market demand and daring to try. Regardless of the game style, operation interface, and topic themes, it uses the latest H5 technology to provide a rich and diverse gaming experience, making players enjoy it tirelessly and becoming the focus of the industry`s attention.',
  },
]

export const List = () => {
  return (
    <>
      <div className="bg-[#252433]">
        <div className="container mx-auto">
          <VerticalTimeline lineColor="#303141">
            {customContent.map((v, k) => {
              return (
                <Fragment key={k}>
                  <VerticalTimelineElement
                    date={v.date}
                    iconStyle={{ background: '#3B3B40', color: '#fff' }}
                  >
                    <div className="relative grid h-[40rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
                      <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://www.pgsoft.com/uploads/News/Images/c68a3101-e9c5-4c19-bb81-3556acfa6498.jpg')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                      </div>
                      <div className="relative p-6 px-6 py-14 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal !text-white antialiased">
                          THE MOON RISES: WEREWOLF`S HUNT LAUNCHES FOR ACTION
                          AND WEALTH SEEKERS!
                        </h2>
                        <h5 className="mb-4 block font-sans text-sm font-semibold leading-snug tracking-normal !text-gray-400 antialiased">
                          WEREWOLF`S HUNT LAUNCHES FOR ACTION AND WEALTH
                        </h5>
                        <button
                          className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 px-6 py-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          type="button"
                        >
                          Read More
                        </button>
                      </div>
                    </div>
                  </VerticalTimelineElement>
                </Fragment>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}
