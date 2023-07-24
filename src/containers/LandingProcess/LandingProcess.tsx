import { ProcessArrow, ProcessTextDescription, StyledPagination } from "@/components"
import { Box, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { EffectFade, Mousewheel } from "swiper/modules"
import { SwiperSlide, Swiper } from "swiper/react"

const processes = [
  <>
    <ProcessArrow imageSrc="arrow-2" right={-118} top={120} />
    <ProcessTextDescription
      right={-278}
      top={210}
    >
      World-building, environment, understanding of timelines (modern, medieval, post-apocalyptic, etc.).
    </ProcessTextDescription>
    <ProcessArrow left={-118} top={370} />
    <ProcessTextDescription
      className="absolute uppercase"
      left={-218}
      top={460}
    >
      STAGE ONE: CONCEPT
    </ProcessTextDescription>
    <ProcessArrow bottom={-86} left={260} transform="rotate(255deg)" />
    <ProcessTextDescription
      bottom={-120}
      left={420}
    >
      Character design based on lore, storytelling, and other specific requirements.
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow right={-118} bottom={130} transform="rotate(180deg)" />
    <ProcessTextDescription
      right={-220}
      bottom={230}
    >
      Sequence of events, complexity of animation, core characters.
    </ProcessTextDescription>
    <ProcessArrow imageSrc="arrow-3" left={-118} bottom={86} />
    <ProcessTextDescription
      className="absolute uppercase"
      left={-210}
      bottom={180}
    >
      STAGE TWO: STORYBOARD
    </ProcessTextDescription>
    <ProcessArrow imageSrc="arrow-3" bottom={-86} right={200} transform="rotate(-70deg)" />
    <ProcessTextDescription
      bottom={-120}
      right={330}
    >
      Outline of movement, must-have shots, camera angles, etc.
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow imageSrc="arrow-2" right={-118} top={120} />
    <ProcessTextDescription
      right={-250}
      top={220}
    >
      Refinement of the shadows and character design.
    </ProcessTextDescription>
    <ProcessArrow left={-118} top={370} />
    <ProcessTextDescription
      className="absolute uppercase"
      left={-218}
      top={470}
    >
      STAGE THREE: KEY ANIMATION
    </ProcessTextDescription>
    <ProcessArrow bottom={-86} left={260} transform="rotate(255deg)" />
    <ProcessTextDescription
      bottom={-120}
      left={400}
    >
      Ensuring that the choreography is accurate and visually appealing.
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow imageSrc="arrow-2" right={-118} top={270} />
    <ProcessTextDescription
      right={-240}
      top={370}
    >
      Creation of 3D background, lighting, ensuring consistency with the set color palette
    </ProcessTextDescription>
    <ProcessArrow left={-118} top={140} />
    <ProcessTextDescription
      className="absolute uppercase"
      left={-218}
      top={240}
    >
      STAGE FOUR: COLORING + BACKGROUND
    </ProcessTextDescription>
    <ProcessArrow imageSrc="arrow-2" bottom={-86} right={340} transform="rotate(110deg)" />
    <ProcessTextDescription
      bottom={-110}
      right={460}
    >
      Painting the characters, light angles, highlights.
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow imageSrc="arrow-2" right={-118} top={120} />
    <ProcessTextDescription
      right={-250}
      top={220}
    >
      Blending all elements together.
    </ProcessTextDescription>
    <ProcessArrow left={-118} top={370} />
    <ProcessTextDescription
      className="absolute uppercase"
      left={-218}
      top={470}
    >
      STAGE FIVE: COMPOSITION AND POST-PRODUCTION
    </ProcessTextDescription>
    <ProcessArrow bottom={-86} left={260} transform="rotate(255deg)" />
    <ProcessTextDescription
      bottom={-180}
      left={400}
    >
      Adding enhancing effects, such as blur, to highlight movement and create separation between the main object and the background.
    </ProcessTextDescription>
  </>,
]

const processesMobile = [
  <>
    <ProcessArrow
      imageSrc="arrow-6"
      left={"100px"}
      top={"32px"}
      widthImage={7.5}
      heightImage={51}
    />
    <ProcessTextDescription
      left={"20px"}
      top={"85px"}
      w={140}
    >
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-7"
      left={230}
      top={"32px"}
      widthImage={21.5}
      heightImage={"161px"}
    />
    <ProcessTextDescription
      left={170}
      top={200}
      w={140}
    >
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow
      imageSrc="arrow-8"
      left={"40px"}
      top={"32px"}
      widthImage={30}
      heightImage={103}
    />
    <ProcessTextDescription
      left={"-15px"}
      top={"145px"}
      w={140}
      textTransform="uppercase"
    >
      Stage two: Storyboard
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-9"
      left={165}
      top={"32px"}
      widthImage={15}
      heightImage={30}
    />
    <ProcessTextDescription
      left={100}
      top={70}
      w={140}
    >
      Outline of movement, must-have shots, camera angles, etc.
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-7"
      left={270}
      top={"32px"}
      widthImage={21.5}
      heightImage={"161px"}
    />
    <ProcessTextDescription
      left={200}
      top={200}
      w={140}
    >
      Sequence of events, complexity of animation, core characters.
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow
      imageSrc="arrow-8"
      left={"40px"}
      top={"32px"}
      widthImage={30}
      heightImage={103}
    />
    <ProcessTextDescription
      left={"-15px"}
      top={"145px"}
      w={140}
    >
      Refinement of the shadows and character design.
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-9"
      left={165}
      top={"32px"}
      widthImage={15}
      heightImage={30}
    />
    <ProcessTextDescription
      left={100}
      top={70}
      w={140}
      textTransform="uppercase"
    >
      STAGE THREE: KEY ANIMATION
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-10"
      left={270}
      top={"32px"}
      widthImage={21.5}
      heightImage={"109px"}
    />
    <ProcessTextDescription
      left={200}
      top={150}
      w={140}
    >
      Ensuring that the choreography is accurate and visually appealing.
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow
      imageSrc="arrow-9"
      left={"40px"}
      top={"32px"}
      widthImage={15}
      heightImage={30}
    />
    <ProcessTextDescription
      left={"-15px"}
      top={"80px"}
      w={138}
      textTransform="uppercase"
    >
      STAGE FOUR:
      <br />
      COLORING + BACKGROUND
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-10"
      left={165}
      top={"32px"}
      widthImage={21.5}
      heightImage={"109px"}
    />
    <ProcessTextDescription
      left={100}
      top={150}
      w={140}
    >
      Painting the characters, light angles, highlights.
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-7"
      left={270}
      top={"32px"}
      widthImage={21.5}
      heightImage={"161px"}
    />
    <ProcessTextDescription
      left={200}
      top={200}
      w={140}
    >
      Creation of 3D background, lighting, ensuring consistency with the set color palette
    </ProcessTextDescription>
  </>,
  <>
    <ProcessArrow
      imageSrc="arrow-8"
      left={"40px"}
      top={"32px"}
      widthImage={30}
      heightImage={103}
    />
    <ProcessTextDescription
      left={"-15px"}
      top={"145px"}
      w={140}
    >
      STAGE FIVE: COMPOSITION AND POST-PRODUCTION
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-9"
      left={165}
      top={"32px"}
      widthImage={15}
      heightImage={30}
    />
    <ProcessTextDescription
      left={100}
      top={70}
      w={140}
    >
      Blending all elements together.
    </ProcessTextDescription>
    <ProcessArrow
      imageSrc="arrow-7"
      left={270}
      top={"32px"}
      widthImage={21.5}
      heightImage={"161px"}
    />
    <ProcessTextDescription
      left={200}
      top={210}
      w={140}
    >
      Adding enhancing effects, such as blur, to highlight movement and create separation between the main object and the background.
    </ProcessTextDescription>
  </>,
]

const DesktopContent = ({ activeIndex, setActiveIndex }: any) => {
  return (
    <Swiper
      slidesPerView={1}
      speed={1000}
      direction="vertical"
      style={{
        boxShadow: "0px 10px 32px 0px rgba(0, 0, 0, 0.12)",
        borderRadius: "60px",
        cursor: "pointer",
      }}
      nested={true}
      mousewheel={true}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      className="lg:w-[854px] lg:h-[480px] 2xl:w-[1060px] 2xl:h-[596px]"
    >
      {[...new Array(5)].map((_, index) => (
        <SwiperSlide key={index}>
          <Box
            className="w-full h-full"
            bg="white"
          >
            <Image
              src={`/images/process${index + 1}.png`}
              alt="process1"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const MobileContent = ({ activeIndex, setActiveIndex }: any) => {
  return (
    <>
      <Swiper
        style={{
          width: "344px",
          height: "220px",
          boxShadow: "0px 10px 32px 0px rgba(0, 0, 0, 0.12)",
          borderRadius: "20px",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {[...new Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              className="w-full h-full"
              bg="white"
            >
              <Image
                src={`/images/process${index + 1}.png`}
                alt="process1"
                fill
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                priority />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box position="absolute" left="50%" transform="translate(-46px, 10px)" w="max-content">
        <StyledPagination
          positionStyled="absolute"
          activeIndex={activeIndex}
          total={5}
          dark={true}
          direction="row"
          emptyDot={true}
        />
      </Box>
    </>
  )
}

function LandingProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  return (
    <Box
      className="w-full h-full bg-white flex justify-center relative"
      alignItems={isMobileScreen ? "flex-start" : "center"}
      pt={isMobileScreen ? "131px" : 0}
    >
      <Box
        className="uppercase absolute font-bold"
        letterSpacing={isMobileScreen ? 0 : 3.2}
        top={isMobileScreen ? 79 : 124}
        fontSize={isMobileScreen ? "md" : "32px"}
      >
        our process
      </Box>
      <Box className="relative">
        {isMobileScreen
          ? <MobileContent activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          : <DesktopContent activeIndex={activeIndex} setActiveIndex={setActiveIndex} />}
        {isMobileScreen ? <Box className="relative">{processesMobile[activeIndex]}</Box> : processes[activeIndex]}
      </Box>
    </Box >
  )
}

export { LandingProcess }