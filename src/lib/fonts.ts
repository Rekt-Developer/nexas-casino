import { Barlow, Noto_Serif_SC } from 'next/font/google'

const sansFont = Barlow({
  subsets: ['vietnamese'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const serifFont = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-serif',
  display: 'swap',
  // adjustFontFallback: false,
  fallback: ['Noto Serif SC'],
})

export { sansFont, serifFont }
