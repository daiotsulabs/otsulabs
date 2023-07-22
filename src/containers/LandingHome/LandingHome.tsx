import { Box, SlideFade, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useState } from "react"

function LandingHome() {
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  const [isShowText, setIsShowText] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowText(false)
    }, 5000);
    return () => clearTimeout(timeout);
  }, [])
  return (
    <Box
      className="w-full h-full flex items-center justify-center"
      bgImage="/images/landing-home.png"
      bgSize="cover"
      bgPosition="center"
    >
      <SlideFade in={isShowText}>
        <Box
          maxW={isMobileScreen ? "282px" : "872px"}
          color="white"
          fontSize={isMobileScreen ? "xs" : "4xl"}
          textAlign="center"
        >
          An animation production house driven by a collective of storytellers and their profound love for anime.
        </Box>
      </SlideFade>
      <Box
        position="fixed"
        bottom={"20px"}
        width={"50px"}
        height={"50px"}
        borderRadius="50%"
        _hover={{ bgColor: "rgba(255,255,255,0.2)" }}
        cursor="pointer"
        className="animate-[bounce_1.5s_infinite]"
      >
        <Box className="w-full h-full flex items-center justify-center">
          <Image src="/icons/arrow-down.svg" width={10} height={16} alt="arrow-down" priority style={{ marginTop: "20px" }} />
        </Box>
      </Box>
    </Box>
  )
}

export { LandingHome }