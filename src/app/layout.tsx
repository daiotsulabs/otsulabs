"use client"
import './globals.css'
import 'swiper/css'
import { register } from 'swiper/element/bundle'
import { Providers } from './providers'

register()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Otsu</title>
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
