'use client'

import './style.css'

import { useEffect, useState } from 'react'

import { usePathname } from '~/i18n'

import { Item } from './Item'
import { Logo } from './Logo'
import { Menu } from './Menu'

export const menuList = [
  { name: 'HOME', url: '/' },
  { name: 'GAMES', url: '/game' },
  { name: 'NEWS', url: '/news' },
]

export const Navbar = () => {
  const [top, setTop] = useState(true)
  const [active, setActive] = useState(0)
  const path = usePathname()
  useEffect(() => {
    if (path === '/news') {
      setTop(false)
    }
    menuList.forEach((v, k) => {
      if (v.url === path) {
        setActive(k)
      }
    })
  }, [path])

  return (
    <div
      className={`navbar relative z-[2]  h-[100px] min-h-20 w-full ${
        top ? '!absolute' : ''
      }`}
    >
      <div className="h-100px container mx-auto flex items-center justify-between gap-3 py-6">
        <div className="w-[90px]">
          <button className="cursor-pointer wh-full">
            <Logo />
          </button>
        </div>
        {/* LINK */}
        <div className="ml-20 hidden flex-1 items-center justify-center lg:flex">
          <Item
            active={active}
            menuList={menuList}
            onChange={(e) => {
              if (e.url === '/game') {
                setTop(true)
              }
            }}
          />
        </div>
        <Menu />
      </div>
    </div>
  )
}
