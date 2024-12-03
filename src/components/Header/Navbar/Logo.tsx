import Image from 'next/image'

export const Logo = ({ width = 571, height = 248 }) => {
  return (
    <Image
      width={width}
      height={height}
      className="w-full text-black sm:w-full"
      style={{ color: 'transparent' }}
      src="/images/logo.png"
      alt="logo"
    />
  )
}
