import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import './globals.css'
import { Inter as FontSans } from "next/font/google"
import Link from 'next/link'
import { AUTHOR, AUTHOR_INITIAL, DISPLAY_NAME, URL_ROOT } from '../constants/identity'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(URL_ROOT),
  title: `${DISPLAY_NAME}'s Garage`,
  description: `Portfolio site of ${DISPLAY_NAME}`,
  openGraph: {
    type: 'website',
    locale: 'JP',
    siteName: `${DISPLAY_NAME}'s Garage`,
    description: `Portfolio site of ${DISPLAY_NAME}`,
    url: URL_ROOT,
    images: [
      {
        url: `${URL_ROOT}/ogp.png`,
        width: 508,
        height: 516,
      }
    ]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const env = process.env.NODE_ENV
  const gaId = process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
          <header className="px-4 lg:px-6 h-16 flex items-center shadow-md">
            <Link className="flex items-center gap-2" href="/">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="@shadcn" src="/ogp.png" />
                <AvatarFallback>{AUTHOR_INITIAL}</AvatarFallback>
              </Avatar>
              <span className="text-lg font-semibold">{AUTHOR}</span>
            </Link>
          </header>
          <main className="flex-1 px-4 md:px-6 shadow-md">
            {children}
          </main>
          <footer className="flex flex-col lg:px-6 gap-2 sm:flex-row py-6">
            <p className="text-center text-xs text-gray-500 dark:text-gray-400">
              © 2024 {AUTHOR}. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
      {env === 'production' && gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  )
}
