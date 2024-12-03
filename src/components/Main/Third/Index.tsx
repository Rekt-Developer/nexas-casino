'use client'

import { Content } from './Content'
import { Top } from './Top'

import './index.css'

export const Third = () => {
  return (
    <div className="third">
      <div className="container mx-auto py-20 md:py-[130px]">
        <Top />
        <Content />
      </div>
    </div>
  )
}
