import { Box, Image, SlideFade, useMediaQuery } from "@chakra-ui/react"
import { useState } from "react"

function LandingHome({ hideArrow = false, hideTagLine }: { hideArrow?: boolean, hideTagLine: boolean, }) {
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  const [isMediumScreen] = useMediaQuery('(max-width: 1513px)')
  const [isShowText, setIsShowText] = useState(true)

  return (
    <>
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 min-w-[100vw] min-h-[100vh] z-[-1] object-cover">
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <Box
        className="w-full h-full flex items-center justify-center bg-[#00000080]"
      >
        <SlideFade in={isShowText}>
          {!hideTagLine && <Box
            className="animate-fade-in delay-[1200ms] transition-opacity text-xs md:text-2xl 2xl:text-3xl"
            maxW={isMobileScreen ? "282px" : "722px"}
            color="white"
            textAlign="center"
          >
            An animation production house driven by a collective of storytellers and their profound love for anime.
          </Box>}
        </SlideFade>
        {!hideArrow && <Box
          position="fixed"
          cursor="pointer"
          className="animate-[bounce_1.5s_infinite] bottom-[60px] md:bottom-[10px]"
        >
          <Box className="w-full h-full flex items-center justify-center">
            <Image
              src="/icons/arrow-down.svg"
              width={isMobileScreen ? "12px" : isMediumScreen ? "18px" : "24px"}
              height={isMobileScreen ? "44px" : isMediumScreen ? "66px" : "88px"}
              alt="arrow-down"
            />
          </Box>
        </Box>}
      </Box>
    </>
  )
}

export { LandingHome }