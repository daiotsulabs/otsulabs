"use client"
import './globals.css'
import 'swiper/css'
import { register } from 'swiper/element/bundle'
import { Providers } from './providers'
import { useEffect, useState } from 'react'
import { Box, Progress, useMediaQuery } from '@chakra-ui/react'
import Image from 'next/image'

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
    }, 3300)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <html lang="en">
      <head>
        <title>Otsu</title>
        <link rel="icon" href="/icons/favicon.svg" type='image/svg' sizes="any" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>
        <Providers>
          {loading
            ? <Box className='w-screen h-screen flex items-center justify-center bg-black'>
              <Progress className='loading-page' style={{ maxWidth: '350px', width: '100%', borderRadius: isMobileScreen ? '8px' : '4x', background: '#f5f5f540' }} value={progress} height={'3px'} />
            </Box>
            : children
          }
        </Providers>
      </body>
    </html>
  )
}
