import { Box, useMediaQuery } from "@chakra-ui/react"

function LandingExperience() {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')

  return (
    <Box
      className="w-full h-full bg-black flex items-center justify-center px-10 md:px-4"
      color={"#707070"}
      fontSize="lg"
      pl={"53px"}
      pr={"56px"}
    >
      <Box display="flex" flexDirection={isMobileScreen ? "column" : "row"} alignItems="flex-start" gap={isMobileScreen ? "30px" : "84px"}>
        <Box maxW={478}>
          <Box textTransform="uppercase"
            fontSize="xs"
            fontWeight="bold"
            color="#f5f5f5"
            letterSpacing={1.2}
            mb={"12px"}>previously</Box>
          <Box mb="10px" fontSize={isMobileScreen ? "10px" : "sm"} className="">
            For the past 8 years, before joining OtsuLabs, our team members have been making anime series, that are loved by millions of fans worldwide.
          </Box>
          <Box fontSize={isMobileScreen ? "10px" : "sm"}>
            Some of their notable works include <span className="text-[#f5f5f5] ">Vinland Saga, Re:Zero, Bleach, Demon Slayer, Attack on Titan, Rent a Girlfriend,</span> and many more. But, after years of individual success, they united their talents. That&apos;s how OtsuLabs was born.
          </Box>
        </Box>
        <Box maxW={408}>
          <Box textTransform="uppercase"
            fontSize="xs"
            fontWeight="bold"
            color="#f5f5f5"
            letterSpacing={1.2}
            mb={"12px"}>now</Box>
          <Box mb="10px" fontSize={isMobileScreen ? "10px" : "sm"} className="">
            We help brands capture attention by creating scroll-stopping animations that transform stories into memories.
          </Box>
          <Box fontSize={isMobileScreen ? "10px" : "sm"}>
            Whether it&apos;s crafting <span className="text-[#f5f5f5] ">short films, commercials, animated series, or immersive experiences,</span> we embrace every opportunity to challenge our creative minds.
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export { LandingExperience }