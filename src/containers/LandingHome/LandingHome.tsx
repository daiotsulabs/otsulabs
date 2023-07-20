import { Box, useMediaQuery } from "@chakra-ui/react"

function LandingHome() {
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  return (
    <Box
      className="w-full h-full flex items-center justify-center"
      bgImage="/images/landing-home.png"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        maxW={isMobileScreen ? "282px" : "872px"}
        color="white"
        fontSize={isMobileScreen ? "xs" : "4xl"}
        textAlign="center"
      >
        An animation production house driven by a collective of storytellers and their profound love for anime.
      </Box>
    </Box>
  )
}

export { LandingHome }