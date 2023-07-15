import { WorkItem } from "@/components"
import { Box, Grid, GridItem, Text, Wrap, WrapItem } from "@chakra-ui/react"
import Image from "next/image"

function LandingWork() {
  return (
    <Box className="w-full h-full bg-white" px="80px" pt="100px" pb="50px" >
      <Grid
        width="100%"
        height="100%"
        templateRows="repeat(15, 1fr)"
        templateColumns="repeat(16, 1fr)"
        gap={3}
      >
        <GridItem colSpan={5} rowSpan={7}>
          <WorkItem
            image="/images/work1.png"
            project="Inkugami"
            descriptions={["character design", "animation production", "sound design"]}
          />
        </GridItem>
        <GridItem colSpan={3} rowSpan={4}>
          <WorkItem
            image="/images/work2.png"
            project="Inkugami"
            descriptions={["character design", "animation production", "sound design"]} />
        </GridItem>
        <GridItem colSpan={3} rowSpan={4}>
          <WorkItem
            image="/images/work3.png"
            project="Inkugami"
            descriptions={["character design", "animation production", "sound design"]} />
        </GridItem>
        <GridItem colSpan={5} rowSpan={9}>
          <WorkItem
            image="/images/work4.png"
            project="Inkugami"
            descriptions={["character design", "animation production", "sound design"]} />
        </GridItem>
        <GridItem colSpan={6} rowSpan={5}>
          <Box className="w-full h-full flex items-center justify-center" px={9}>
            <Wrap fontSize={{ base: "lg", "2xl": "xl" }} textAlign="center" color="#969696" >
              <WrapItem mb={4}>
                We breathe life into every single frame, creating scroll-stopping animations that make people feel.
              </WrapItem>
              <WrapItem display="inline-table">
                Whether it&apos;s crafting <Text color="black" as="span">short films, commercials, animated series, or immersive experiences,</Text> we embrace every opportunity to challenge our creative minds.
              </WrapItem>
            </Wrap>
          </Box>
        </GridItem>
        <GridItem colSpan={5} rowSpan={8}>
          <WorkItem
            image="/images/work7.png"
            project="Inkugami"
            descriptions={["character design", "animation production", "sound design"]} />
        </GridItem>
        <GridItem colSpan={4} rowSpan={6}>
          <WorkItem
            image="/images/work6.png"
            project="Inkugami"
            descriptions={["character design", "animation production", "sound design"]} />
        </GridItem>
        <GridItem colSpan={7} rowSpan={6}>
          <WorkItem
            image="/images/work5.png"
            project="Inkugami"
            descriptions={["character design", "animation production", "sound design"]} />
        </GridItem>
      </Grid>
    </Box>
  )
}

export { LandingWork }