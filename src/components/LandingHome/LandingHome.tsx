import { Box } from "@chakra-ui/react"

function LandingHome() {
  return (
    <Box className="w-full h-full flex items-center justify-center text-2xl" bgImage="/images/landing-home.png" bgSize="cover">
      <Box maxW="606px" textAlign="center">
        An animation production house driven by a collective of storytellers and their profound love for anime.
      </Box>
    </Box>
  )
}

export { LandingHome }