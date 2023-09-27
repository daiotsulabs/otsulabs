import { mcQueenDisplay } from "@/app/layout";
import { Box, Stack, useMediaQuery } from "@chakra-ui/react";

function LandingExperience() {
  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      className="w-full h-[309px] md:h-full flex items-center justify-center px-10 md:px-4"
      color="#f5f5f5"
      fontSize="lg"
      pl={"53px"}
      pr={"56px"}
      bgImage={`url("/images/noise.png")`}
    >
      <Stack
        direction="column"
        alignItems="center"
        gap={isMobileScreen ? "30px" : "96px"}
      >
        <Box maxW={496}>
          <Box
            textTransform="capitalize"
            textAlign="center"
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            previously
          </Box>
          <Box className="text-xs mt-3 md:mt-0 md:text-lg" opacity={0.5} textAlign="center">
            From making big time anime series, including Attack on Titan,
            Vinland Saga, Demon Slayer, and many more...
          </Box>
        </Box>
        <Box maxW={495}>
          <Box
            textTransform="capitalize"
            textAlign="center"
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            now
          </Box>
          <Box className="text-xs mt-3 md:mt-0 md:text-lg" opacity={0.5} textAlign="center">
            ...to crafting scroll-stopping, attention-grabbing anime commercials
            for forward-thinking brands.
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export { LandingExperience };
