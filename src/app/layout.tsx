"use client"
import './globals.css'
import 'swiper/css'
import { register } from 'swiper/element/bundle'
import { Providers } from './providers'
import { useEffect, useState } from 'react'
import { Box, Progress, useMediaQuery } from '@chakra-ui/react'
import Script from 'next/script'

register()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  function move() {
    var width = 1
    var id = setInterval(frame, 10)

    function frame() {
      if (width >= 100) {
        clearInterval(id)
      } else {
        width++
        setProgress(width)
      }
    }
  }

  useEffect(() => {
    move()
    const timeout = setTimeout(() => {
      setLoading(false)
      setProgress(100)
    }, 3300)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <html lang="en">
      <Script
        strategy='lazyOnload'
        src='https://www.googletagmanager.com/gtag/js?id=G-FP4WNRJ4K6'
      />
      <Script
        strategy='lazyOnload'
        id='google-analytics'
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-FP4WNRJ4K6');
        `}
      </Script>
      <head>
        <title>Otsu</title>
        <link rel="icon" href="/icons/favicon.svg" type='image/svg' sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className='bg-black'>
        <Providers>
          {loading
            ? <Box className='w-screen h-screen flex items-center justify-center'>
              <Progress className='loading-page' style={{ maxWidth: '350px', width: '100%', borderRadius: isMobileScreen ? '8px' : '4x', background: '#f5f5f540' }} value={progress} height={'3px'} />
            </Box>
            : children
          }
        </Providers>
      </body>
    </html>
  )
}
