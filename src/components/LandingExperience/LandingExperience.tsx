import { Box, Grid, GridItem } from "@chakra-ui/react"
import Image from "next/image"

function LandingExperience() {
  return (
    <Box className="w-full h-full bg-white relative" >
      <Grid
        columnGap="60px"
        rowGap="32px"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        width="602px"
        height="224px"
        className="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)">
        <GridItem colSpan={3} fontSize="32px" className="uppercase text-black font-bold text-center">
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