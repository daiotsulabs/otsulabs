import { WorkItem } from "@/components"
import { Box, Button, Divider, Stack, useMediaQuery } from "@chakra-ui/react"
import { useState } from "react"

const landingWorkImages = [
  { src: "/images/on1forces.png", project: "0NE FORCE", date: "June 10, 2023", description: "30-second trailer" },
  { src: "/images/AlexH.png", project: "Alex Hugh", date: "August 10, 2023", description: "10-second teaser" },
  { src: "/images/Conviction.png", project: "ConvictionSTD", date: "July 19, 2023", description: "15-second teaser" },
  { src: "/images/Inkugami.png", project: "Inkugami", date: "July 03, 2023", description: "22-second trailer" },
  { src: "/images/MusicFrens.png", project: "Music Frens", date: "July 19, 2023", description: "20-second teaser" },
];

const DesktopContent = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1)
  const [currenIndex, setCurrentIndex] = useState(0)
  const [height, setHeight] = useState(665)
  const [isLargeScreen] = useMediaQuery('(min-width: 3000px)')

  return (
    <Box className="w-full h-full bg-black" display="flex" flexDirection="column" justifyContent="center">
      <Stack direction="row" width="full" px={isLargeScreen ? 185 : 100}>
        {landingWorkImages.map((project, index) => (
          <Box
            onClick={() => {
              if (expandedIndex > -1) setExpandedIndex(-1)
              else setExpandedIndex(index)
              setCurrentIndex(index)
            }}
            key={index}
            w={expandedIndex === index ? isLargeScreen ? "80%" : "calc(100% - 42px - 42px - 42px - 42px)" : expandedIndex > -1 ? isLargeScreen ? "5%" : "42px" : "20%"}
            h={height}
            className="transition-all duration-150 ease-in-out">
            <WorkItem
              expandedIndex={expandedIndex}
              index={index}
              image={project.src}
              project={project.project}
            />
          </Box>
        )
        )}
      </Stack>
      <Stack
        mt={11}
        justifyContent="flex-start"
        direction="row"
        fontSize={"xs"}
        color="#707070"
        letterSpacing={1.2}
        textTransform="uppercase"
        px={isLargeScreen ? 185 : 100}
        gap={"10px"}
        alignItems="center">
        <Box>{landingWorkImages[currenIndex].project}</Box>
        <Divider height={"10px"} orientation="vertical" />
        <Box>{landingWorkImages[currenIndex].date}</Box>
        <Divider height={"10px"} orientation="vertical" />
        <Box>{landingWorkImages[currenIndex].description}</Box>
      </Stack>
    </Box>
  )
}

const MobileContent = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <Box className="w-full h-full bg-black relative" px={6} pt={"60px"}>
      {activeIndex < 0
        ? <Stack direction="column">
          {landingWorkImages.map((project, index) => (
            <Box
              onClick={() => setActiveIndex(index)}
              key={index}
              w="100%"
              h={128}
              maxH={'calc(20vh - 38px)'}
            >
              <WorkItem
                border={false}
                image={project.src}
                project={project.project}
              />
            </Box>
          )
          )}
        </Stack>
        : <Stack direction="column" className="items-center pt-[140px]">
          <Box className="font-bold text-xs text-[#f5f5f5] mb-[16px]">{landingWorkImages[activeIndex].project}</Box>
          <Box w={"100%"} h="193px">
            <WorkItem
              border={false}
              image={landingWorkImages[activeIndex].src}
              project={landingWorkImages[activeIndex].project}
            />
          </Box>
          <Stack
            mt={11}
            justifyContent="flex-start"
            direction="row"
            fontSize={"10px"}
            color="#707070"
            letterSpacing={1.2}
            textTransform="uppercase"
            gap={"10px"}
            alignItems="center">
            <Box>{landingWorkImages[activeIndex].project}</Box>
            <Divider height={"10px"} orientation="vertical" />
            <Box>{landingWorkImages[activeIndex].date}</Box>
            <Divider height={"10px"} orientation="vertical" />
            <Box>{landingWorkImages[activeIndex].description}</Box>
            <Button
              style={{ background: '#ffffff', color: '#000000', fontSize: "12px", fontWeight: "normal" }}
              className="absolute bottom-[85px] left-1/2 -translate-x-1/2 rounded-full"
              variant="outline"
              height={35}
              w={"96px"}
              onClick={() => setActiveIndex(-1)}>Back</Button>
          </Stack>
        </Stack>}
    </Box>
  )
}

function LandingWorkV2() {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)")
  if (isMobileScreen) {
    return (<MobileContent />)
  }
  return (
    <DesktopContent />
  )
}

export { LandingWorkV2 }