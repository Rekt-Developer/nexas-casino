import 'pixi-spine' // Do this once at the very start of your code. This registers the loader!

import { useRef } from 'react'
import { useMount } from 'ahooks'
import { Spine } from 'pixi-spine'
import * as PIXI from 'pixi.js'

export const Animation = () => {
  const container = useRef<any>(null)
  useMount(async () => {
    const app = new PIXI.Application({
      width: innerWidth > 750 ? 700 : innerWidth - 40,
      height: innerWidth > 750 ? 443 : 300,
      backgroundColor: '#000', // 背景颜色，这里是黑色
      backgroundAlpha: 0, // 背景透明度，0 表示完全透明
    })
    if (container.current) {
      container.current.appendChild(app.view)
      const res = await PIXI.Assets.load('/spine/skeleton.json')
      const sp = new Spine(res.spineData)
      if (innerWidth < 750) {
        sp.width = innerWidth - 80
        sp.height = 240
        sp.position.set(210, 150)
      } else {
        sp.width = 600
        sp.height = 443
        sp.position.set(450, 420 / 2)
      }
      app.stage.addChild(sp)
      if (!sp) return
      if (sp.state.hasAnimation('animation')) {
        sp.state.setAnimation(0, 'animation', true)
      }
    }
  })

  return (
    <>
      <div className="h-[300px] w-[300px] md:relative md:h-[500px] md:w-[500px]">
        <div
          ref={container}
          id="spine_container"
          className="absolute right-[-10px] aspect-video md:right-[-5px]"
        />
      </div>
    </>
  )
}
