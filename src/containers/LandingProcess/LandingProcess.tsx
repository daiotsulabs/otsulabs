import { ProcessArrow, ProcessTextDescription } from "@/components"
import { Box } from "@chakra-ui/react"
import Image from "next/image"
import { useState } from "react"
import { EffectFade } from "swiper/modules"
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
    <ProcessArrow imageSrc="arrow-3" left={-118} top={390} />
    <ProcessTextDescription
      className="absolute uppercase"
      left={-210}
      top={330}
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

function LandingProcess() {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <Box className="w-full h-full bg-white flex items-center justify-center relative">
      <Box className="uppercase absolute font-bold" letterSpacing={3.2} top={124} fontSize="32px">our process</Box>
      <Box className="relative">
        <Swiper
          slidesPerView={1}
          modules={[EffectFade]}
          effect="fade"
          direction="vertical"
          style={{
            width: "1060px",
            height: "596px",
            boxShadow: "0px 10px 32px 0px rgba(0, 0, 0, 0.12)",
            borderRadius: "60px",
            cursor: "pointer",
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
        {processes[activeIndex]}
      </Box>
    </Box >
  )
}

export { LandingProcess }