import { Box, Image, SlideFade, useMediaQuery } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function LandingHome() {
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  const [isMediumScreen] = useMediaQuery('(max-width: 1441px)')
  const [isShowText, setIsShowText] = useState(true)
  return (
    <>
      <video autoPlay muted loop className="absolute top-0 left-0 min-w-[100vw] min-h-[100vh] z-[-1] object-cover">
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <Box
        className="w-full h-full flex items-center justify-center"
        // bgImage="/images/landing-home.png"
        // bgSize="cover"
        // bgPosition="center"
      >
        <SlideFade in={isShowText}>
          <Box
            maxW={isMobileScreen ? "282px" : "872px"}
            color="white"
            fontSize={isMobileScreen ? "xs" : isMediumScreen ? "2xl" : "4xl"}
            textAlign="center"
          >
            An animation production house driven by a collective of storytellers and their profound love for anime.
          </Box>
        </SlideFade>
        <Box
          position="fixed"
          bottom={"10px"}
          cursor="pointer"
          className="animate-[bounce_1.5s_infinite]"
        >
          <Box className="w-full h-full flex items-center justify-center">
            <Image
              src="/icons/arrow-down.svg"
              width={isMobileScreen ? "12px" : "24px"}
              height={isMobileScreen ? "44px" : "88px"}
              alt="arrow-down"
            />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export { LandingHome }