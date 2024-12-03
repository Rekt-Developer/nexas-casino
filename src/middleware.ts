import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'

import {
  REQUEST_GEO,
  REQUEST_HOST,
  REQUEST_IP,
  REQUEST_PATHNAME,
  REQUEST_QUERY,
} from './constants/system'
import { locales } from './i18n'

const i18nMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',
})

export default async function middleware(req: NextRequest) {
  // i18n
  const response = i18nMiddleware(req)

  const { pathname, search } = req.nextUrl
  let { geo } = req
  const { headers } = req
  let ip = req.ip ?? headers.get('x-real-ip')
  const forwardedFor = headers.get('x-forwarded-for')
  if (!ip && forwardedFor) {
    ip = forwardedFor.split(',').at(0) ?? ''
  }
  const cfGeo = headers.get('cf-ipcountry')
  if (cfGeo && !geo) {
    geo = {
      country: cfGeo,
      city: headers.get('cf-ipcity') ?? '',
      latitude: headers.get('cf-iplatitude') ?? '',
      longitude: headers.get('cf-iplongitude') ?? '',
      region: headers.get('cf-region') ?? '',
    }
  }

  // console.debug(`${req.method} ${req.nextUrl.pathname}${req.nextUrl.search}`)

  if (
    pathname.startsWith('/api/') ||
    pathname.match(/^\/(workbox|worker|fallback)-\w+\.js(\.map)?$/) ||
    pathname === '/sw.js' ||
    pathname === '/sw.js.map'
  ) {
    return response
  }

  // https://github.com/vercel/next.js/issues/46618#issuecomment-1450416633
  response.headers.set(REQUEST_PATHNAME, pathname)
  response.headers.set(REQUEST_QUERY, search)
  response.headers.set(REQUEST_GEO, geo?.country || 'unknown')
  response.headers.set(REQUEST_IP, ip || '')
  response.headers.set(REQUEST_HOST, headers.get('host') || '')

  const isApi = pathname.startsWith('/api/')

  return response
}
export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
