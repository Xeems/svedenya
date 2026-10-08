import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PRIVATE_ROUTES = ['/admin']


function isLocalIP(ip: string): boolean {
  const localPatterns = [
    /^127\./,
    /^::1$/,
    /^192\.168\./,
    /^10\./,
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./
  ]

  return localPatterns.some(pattern => pattern.test(ip))
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  //@ts-ignore
  const ip = request.ip || request.headers.get('x-forwarded-for')?.split(',')[0] || ''

  const logData = {
    app: 'next-sveden',
    timestamp: new Date().toISOString(),
    level: 'request-info',
    method: request.method,
    url: pathname,
    ip: ip,
    userAgent: request.headers.get('user-agent') || 'unknown'
  };
  console.log(JSON.stringify(logData));

  const isPrivateRoute = PRIVATE_ROUTES.some(route => pathname.startsWith(route))
  if (isPrivateRoute) {
    if (!isLocalIP(ip)) {
      // Вариант А: Показать страницу 403 Forbidden
      //return new NextResponse('Доступ ограничен: только для локальной сети', { status: 403 })

      // Вариант Б: Перенаправить на страницу авторизации или главную
      return NextResponse.redirect(new URL('/common', request.url))
    }
  }

  return NextResponse.next()
}

// Оптимизация: Middleware будет срабатывать только на указанных путях
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.png|sitemap.xml|robots.txt).*)',
  ],
}
