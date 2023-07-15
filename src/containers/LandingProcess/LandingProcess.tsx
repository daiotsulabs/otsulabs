import { Box, Grid, GridItem } from "@chakra-ui/react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { EffectFade, Mousewheel, Pagination } from "swiper/modules"
import { SwiperSlide, Swiper, useSwiper } from "swiper/react"

function LandingProcess() {
  const swiper = useSwiper()
  const swiperRef = useRef<any>()
  const [currenIndex, setCurrentIndex] = useState(0);
  const [changingSlide, setChangingSlide] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (changingSlide) {
        setChangingSlide(false)
      }
    }, 1000)
    return () => clearTimeout(timeout)
  }, [changingSlide])

  useEffect(() => {
    console.log("currenIndex", currenIndex)
    // console.log("changingSlide", changingSlide)
    if (currenIndex > 0 && currenIndex < 4) {
      swiper.disable();
    } else if (currenIndex === 0 || currenIndex === 4) {
      swiper.enable()
    }
  }, [currenIndex, swiper])

  const handleScroll = (event: any) => {
    console.log("asdf")
    if (Math.abs(event?.deltaY) < 20 || changingSlide) return;
    const isUp = event?.deltaY < 0;
    const currentSwiper = swiperRef.current?.swiper;
    if (!isUp && currenIndex < 4) {
      console.log("down")
      currentSwiper?.slideNext();
      setCurrentIndex(prev => prev + 1)
      setChangingSlide(true)
    } else if (currenIndex > 0) {
      console.log("up")
      currentSwiper?.slidePrev();
      setCurrentIndex(prev => prev - 1);
      setChangingSlide(true)
    }
  }

  return (
    <Box className="w-full h-full bg-white flex items-center justify-center relative" onWheel={handleScroll}>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        modules={[EffectFade, Mousewheel]}
        mousewheel={true}
        effect="fade"
        direction="vertical"
        style={{
          width: "1060px",
          height: "596px",
          boxShadow: "0px 10px 32px 0px rgba(0, 0, 0, 0.12)",
          borderRadius: "60px",
          cursor: "pointer",
        }}
      // onSlideChange={handleSlideChange}
      >
        {[...new Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <Box
              className="w-full h-full relative"
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
    </Box >
  )
}

export { LandingProcess }