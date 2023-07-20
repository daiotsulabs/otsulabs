import { StyledPagination, WorkItem } from "@/components"
import { Box, Grid, GridItem, Text, Wrap, WrapItem, useMediaQuery } from "@chakra-ui/react"
import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"


const DesktopContent = () => {
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

const MobileContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Box className="w-full h-full bg-white relative" pt={100}>
      <Swiper onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} pagination={true} className="mySwiper">
        <SwiperSlide>
          <Box w={344} h={344} m="auto">
            <WorkItem
              image="/images/work1.png"
              project="Inkugami"
              descriptions={["character design", "animation production", "sound design"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w={344} h={344} m="auto">
            <WorkItem
              image="/images/work2.png"
              project="Inkugami"
              descriptions={["character design", "animation production", "sound design"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w={344} h={344} m="auto">
            <WorkItem
              image="/images/work3.png"
              project="Inkugami"
              descriptions={["character design", "animation production", "sound design"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w={344} h={344} m="auto">
            <WorkItem
              image="/images/work4.png"
              project="Inkugami"
              descriptions={["character design", "animation production", "sound design"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w={344} h={344} m="auto">
            <WorkItem
              image="/images/work5.png"
              project="Inkugami"
              descriptions={["character design", "animation production", "sound design"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w={344} h={344} m="auto">
            <WorkItem
              image="/images/work6.png"
              project="Inkugami"
              descriptions={["character design", "animation production", "sound design"]}
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box w={344} h={344} m="auto">
            <WorkItem
              image="/images/work7.png"
              project="Inkugami"
              descriptions={["character design", "animation production", "sound design"]}
            />
          </Box>
        </SwiperSlide>
      </Swiper>
      <Box position="absolute" left="50%" transform="translate(-66px, 10px)" w="max-content">
        <StyledPagination
          positionStyled="absolute"
          activeIndex={activeIndex}
          total={7}
          dark={true}
          direction="row"
          emptyDot={true}
        />
      </Box>
      <Box maxW={258} margin="auto" mt={12} >
        <Wrap fontSize="xs" textAlign="center" color="#969696" >
          <WrapItem mb={2}>
            We breathe life into every single frame, creating scroll-stopping animations that make people feel.
          </WrapItem>
          <WrapItem display="inline-table">
            Whether it&apos;s crafting <Text fontWeight="700" as="span">short films, commercials, animated series, or immersive experiences,</Text> we embrace every opportunity to challenge our creative minds.
          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  )
}

function LandingWork() {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)")
  if (isMobileScreen) {
    return (<MobileContent />)
  }
  return (
    <DesktopContent />
  )
}

export { LandingWork }