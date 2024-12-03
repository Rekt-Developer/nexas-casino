'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'

import './ModalRead.module.css'

import { useRouter } from '~/i18n'
import { clsxm } from '~/lib/helper'

import { DialogOverlay } from '../ui/dialog'
import bg from '/public/images/model_bg.png'

export const ModalRead = () => {
  const [modalRead, setModalRead] = useState(false)

  const router = useRouter()
  useEffect(() => {
    setModalRead(true)
  }, [])
  return (
    <Dialog.Root open={modalRead}>
      <Dialog.Portal>
        <DialogOverlay zIndex={20} />
        <Dialog.Content className="fixed top-0 z-[21] flex h-[100vh] w-[100vw] flex-col items-center justify-center overflow-hidden">
          <div
            className={clsxm(
              ' rounded-2xl bg-no-repeat md:w-[50vw]',
              'relative w-[90vw]',
            )}
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundSize: '100% 100%',
            }}
          >
            <div className="absolute left-[50%] top-[-10%] h-[100px] translate-x-[-50%]">
              <img src="/images/logo.png" className="wh-full" alt="" />
            </div>
            <div>
              <p className="mt-[20%] text-center text-3xl font-bold leading-[100%] text-green-500 md:mt-[10%] md:text-[84px]">
                Welcome <span className="text-white">TO</span> MY
              </p>
            </div>
            <div className="mx-2 py-5 text-center text-gray-500">
              long Contentlong Contentlong Contentlong Contentlong Contentlong
              Contentlong Contentlong Contentlong Contentlong Contentlong
              Contentlong Contentlong Contentlong Contentlong Contentlong
              Contentlong Contentlong Contentlong Contentlong Content
            </div>
            <div className="py-5 pb-10 text-center md:pb-20">
              Are you 18 years old or older?
            </div>
          </div>
          <div className="mt-10 flex w-[40vw] items-center justify-center gap-10 md:gap-40">
            <button
              className="h-[60px] rounded-xl border bg-black px-[40px]  text-center text-3xl font-bold md:px-[100px]"
              onClick={() => {
                router.push('/404')
              }}
            >
              NO
            </button>
            <button
              className="h-[60px] rounded-xl  bg-[#45F781] px-[40px] text-center text-3xl font-bold text-black md:px-[100px]"
              onClick={() => {
                setModalRead(false)
                localStorage.setItem('isRead', 'true')
              }}
            >
              YES
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
