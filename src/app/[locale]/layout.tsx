import type { Viewport } from 'next'

import '~/styles/index.css'
import '~/styles/scss/main.scss'

import { ToastContainer } from 'react-toastify'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

import { HydrationEndDetector } from '~/components/common/HydrationEndDetector'
import { ScrollTop } from '~/components/common/ScrollTop'
import { Root } from '~/components/layout/root/Root'
import { locales } from '~/i18n'
import { attachUAAndRealIp } from '~/lib/attach-ua'
import { sansFont, serifFont } from '~/lib/fonts'

import { Providers } from '../../providers/root'
import { ClientInit } from '../ClientInit'
import { init } from '../init'
import { InitInClient } from '../InitInClient'

init()

export const revalidate = 60

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: dark)', color: '#000212' },
      { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    ],
  }
}

export const generateMetadata = async () => {
  const url = {
    webUrl: 'https://MyGame.in',
    apiUrl: 'https://MyGame.ren',
  }
  const seo = {
    title: 'My Game',
    description: 'My Game',
    keywords: ['My Game', 'My Game', '博客', 'blog', 'nextjs', 'react'],
  }
  const user = {
    username: 'My Game',
    name: 'My Game',
    avatar: '',
  }
  return {
    metadataBase: new URL(url.webUrl),
    title: {
      template: `%s - ${seo.title}`,
      default: `${seo.title} - ${seo.description}`,
    },
    description: seo.description,
    keywords: seo.keywords?.join(',') || '',
    icons: [],

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: {
        default: seo.title,
        template: `%s | ${seo.title}`,
      },
      description: seo.description,
      siteName: `${seo.title}`,
      locale: 'zh_CN',
      type: 'website',
      url: url.webUrl,
      images: {
        url: user.avatar,
        username: user.name,
      },
    },
    twitter: {
      creator: `@${user.username}`,
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
    },
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: any
}) {
  attachUAAndRealIp()

  let messages
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  if (!locales.includes(locale as any)) notFound()

  return (
    <>
      <ClientInit />
      <html lang={locale} suppressHydrationWarning>
        <head>
          <HydrationEndDetector />
        </head>
        <body
          className={`${sansFont.variable} ${serifFont.variable} m-0 h-full p-0 font-sans  scrollbar-hide`}
        >
          <Providers>
            <NextIntlClientProvider messages={messages}>
              <div data-theme>
                <Root>{children}</Root>
              </div>
            </NextIntlClientProvider>
          </Providers>
          <ToastContainer />
          <ScrollTop />
          <InitInClient />
        </body>
      </html>
    </>
  )
}
