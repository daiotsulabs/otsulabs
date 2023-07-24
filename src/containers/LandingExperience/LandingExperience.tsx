import { Box, Grid, GridItem, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"

function LandingExperience() {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)")
  const [isMediumScreen] = useMediaQuery("(max-width: 1441px)")
  return (
    <Box className="w-full h-full bg-white relative" >
      <Grid
        columnGap="60px"
        rowGap="32px"
        templateRows={isMobileScreen ? "repeat(4, 1fr)" : "repeat(3, 1fr)"}
        templateColumns={isMobileScreen ? "repeat(2, 1fr)" : "repeat(3, 1fr)"}
        width={isMobileScreen ? "280px" : isMediumScreen ? "602px" : "904px"}
        height={isMobileScreen ? "208px" : isMediumScreen ? "224px" : "302px"}
        className="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)">
        <GridItem
          colSpan={isMobileScreen ? 2 : 3}
          fontSize={isMobileScreen ? "md" : isMediumScreen ? "28px" : "32px"}
          letterSpacing={isMediumScreen ? "1.12px" : "3.2px"}
          className="uppercase text-black font-bold"
          textAlign="center">
          Previously worked with
        </GridItem>
        {[...new Array(6)].map((_, index) => (
          <GridItem key={index} colSpan={1}>
            <Image src="/images/google.png" alt="1" width={isMediumScreen ? 160 : 232} height={isMediumScreen ? 54 : 78} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  )
}

export { LandingExperience }