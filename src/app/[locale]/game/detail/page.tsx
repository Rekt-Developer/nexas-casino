'use client'

import { Details } from '~/components/Game/Details/Details'
import { Top } from '~/components/Game/Details/Top'
import { isClientSide } from '~/lib/env'

export default function Home() {
  if (isClientSide) {
    const { searchParams } = new URL(window.location.href)
    const id = searchParams.get('id')
  }

  return (
    <>
      <Top />
      {/* <Swiper /> */}
      <Details />
    </>
  )
}
