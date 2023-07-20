import { Box, Grid, GridItem, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"

function LandingExperience() {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)")
  return (
    <Box className="w-full h-full bg-white relative" >
      <Grid
        columnGap="60px"
        rowGap="32px"
        templateRows={isMobileScreen ? "repeat(4, 1fr)" : "repeat(3, 1fr)"}
        templateColumns={isMobileScreen ? "repeat(2, 1fr)" : "repeat(3, 1fr)"}
        width={isMobileScreen ? "280px" : "602px"}
        height={isMobileScreen ? "208px" : "224px"}
        className="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)">
        <GridItem colSpan={isMobileScreen ? 2 : 3} fontSize={isMobileScreen ? "md" : "32px"} className="uppercase text-black font-bold" textAlign="center">
          Previously worked with
        </GridItem>
        <GridItem colSpan={1}>
          <Image src="/images/google.png" alt="1" width={160} height={54} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src="/images/google.png" alt="1" width={160} height={54} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src="/images/google.png" alt="1" width={160} height={54} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src="/images/google.png" alt="1" width={160} height={54} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src="/images/google.png" alt="1" width={160} height={54} />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src="/images/google.png" alt="1" width={160} height={54} />
        </GridItem>
      </Grid>
    </Box>
  )
}

export { LandingExperience }