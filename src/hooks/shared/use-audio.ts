'use client'

import { useEffect, useState } from 'react'

const audioCache: any = {}

export const useAudioPlayer = (file: string) => {
  const [audioContext, setAudioContext] = useState<AudioContext>()
  const [audioBuffer, setAudioBuffer] = useState<
    AudioBuffer | AudioBufferSourceNode | null
  >(null)
  const [source, setSource] = useState<AudioBufferSourceNode>()

  useEffect(() => {
    const newAudioContext = new window.AudioContext()
    setAudioContext(newAudioContext)

    if (audioCache[file]) {
      // 使用缓存的音频数据
      setAudioBuffer(audioCache[file])
    } else {
      // 加载新的音频文件
      fetch(file)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => newAudioContext.decodeAudioData(arrayBuffer))
        .then((decodedAudio) => {
          audioCache[file] = decodedAudio // 缓存音频数据
          setAudioBuffer(decodedAudio)
        })
    }

    return () => {
      newAudioContext.close()
    }
  }, [file])

  const play = () => {
    if (audioContext && audioBuffer) {
      const newSource: any = audioContext.createBufferSource()
      newSource.buffer = audioBuffer
      newSource.connect(audioContext.destination)
      newSource.start()
      setSource(newSource)
    }
  }

  const stop = () => {
    if (source) {
      source.stop()
    }
  }

  return { play, stop }
}
