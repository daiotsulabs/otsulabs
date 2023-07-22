"use client"

import { CacheProvider } from "@chakra-ui/next-js"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const colors = {}
const fonts = {
  heading: `'Atkinson Hyperlegible', sans-serif`,
}


export const theme = extendTheme({ colors, fonts })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}