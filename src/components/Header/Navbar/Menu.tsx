import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons'
// import { MusicButton } from '~/components/common/MusicButton'
import * as Select from '@radix-ui/react-select'
import { forwardRef, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { useParams } from 'next/navigation'

import { useIsMobile } from '~/atoms'
import { MusicButton } from '~/components/common/MusicButton'
import { useAudioPlayer } from '~/hooks/shared/use-audio'
import { usePathname, useRouter } from '~/i18n'
import { useDrawerStack } from '~/providers/root/drawer-stack-provider'

import { menuList } from '.'
import { Canvas } from './Canvas'
import { Item } from './Item'
import { Logo } from './Logo'
import { Search } from './Search'

const SelectItem = forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => {
    return (
      <Select.Item
        className={clsx('flex items-center justify-between', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  },
)

export function Menu() {
  const containerRef = useRef(null)
  const [showSearch, setShowSearch] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { present } = useDrawerStack()
  const { play } = useAudioPlayer('/music/click.wav')
  const { play: removePlay } = useAudioPlayer('/music/remove.wav')

  const router = useRouter()
  const param = useParams()
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const language = [
    { value: 'en', label: 'EN' },
    { value: 'de', label: 'de' },
    { value: '简', label: '简中' },
    { value: '繁', label: '繁中' },
    { value: 'ไท', label: 'ไทย' },
    { value: 'Me', label: 'Melayu' },
    { value: 'In', label: 'Indonesia' },
    { value: 'Ti', label: 'Tiếng Việt' },
    { value: '한', label: '한국어' },
    { value: '日', label: '日本語' },
    { value: 'РУ', label: 'РУССКИЙ' },
  ]

  useEffect(() => {
    if (isOpen && containerRef) {
      play()
    } else {
      removePlay()
    }
  }, [isOpen])

  return (
    <div className="flex items-center">
      <MusicButton
        once={true}
        className="flex items-center"
        onClick={() => setShowSearch(!showSearch)}
      >
        <i className="icon-[mingcute--search-2-line] text-3xl" />
      </MusicButton>
      <Search
        active={showSearch}
        onClose={() => {
          setShowSearch(false)
          removePlay()
        }}
      />
      {/* i18n */}
      <Select.Root
        defaultValue={param.locale as string}
        onValueChange={(e) => {
          router.push(pathname, { locale: e })
        }}
        onOpenChange={(e) => {
          if (e) {
            play()
          } else {
            removePlay()
          }
        }}
      >
        <Select.Trigger
          className="relative mx-4 flex items-center justify-between rounded border px-2 py-1"
          aria-label="Food"
        >
          <Select.Value placeholder="EN" />
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content
            position="popper"
            align="center"
            sideOffset={5}
            className="rounded-xl border bg-[#ffffff3d] px-2"
          >
            <Select.Viewport className="">
              <Select.Group>
                {language.map((v, k) => {
                  return (
                    <SelectItem
                      value={v.value}
                      key={k}
                      className="p-2 text-white hover:bg-[#ffffff1f]"
                    >
                      {v.label}
                    </SelectItem>
                  )
                })}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <i
        className="icon-[mingcute--menu-fill] text-4xl"
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) {
            present({
              title: () => {
                return (
                  <>
                    <div className="ml-[20px] hidden items-center py-4 md:flex">
                      <Logo width={200} height={100} />
                    </div>
                  </>
                )
              },
              modalClassName: 'w-[485px]',
              content: () => {
                if (isMobile) {
                  return (
                    <div className="min-h-[50vh]">
                      <Item active={0} menuList={menuList} />
                    </div>
                  )
                } else {
                  return <Canvas />
                }
              },
              position: 'right',
              onClose: () => {
                setIsOpen(false)
              },
            })
          }
        }}
      />
    </div>
  )
}
