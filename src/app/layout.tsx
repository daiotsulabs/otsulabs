"use client"
import './globals.css'
import 'swiper/css'
import { register } from 'swiper/element/bundle'
import { Providers } from './providers'
import { useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

register()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <html lang="en">
      <head>
        <title>Otsu</title>
      </head>
      <body>
        <Providers>
          {loading
            ? <Box className='w-screen h-screen flex items-center justify-center'>
              <Image src="/images/loading.gif" alt='loading' width={200} height={200} />
            </Box>
            : children
          }
        </Providers>
      </body>
    </html>
  )
}
