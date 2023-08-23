"use client"
import { Header, Layout, ModalMenu } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'
import { LandingHome } from '@/containers/LandingHome'
import { Contact, LandingAbout, LandingExperience, LandingProcess, LandingWorkV2 } from '@/containers'
import { Box, Center, Stack, useDisclosure, useMediaQuery } from '@chakra-ui/react'

export default function Home() {
  const { isOpen, onToggle } = useDisclosure()
  const swiperRef = useRef()
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const [isDarkHeader, setIsDarkHeader] = useState(false)
  const [currenIndex, setCurrentIndex] = useState(0)
  const [hideArrow, setHideArrow] = useState(false)
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return
    (swiperRef.current as any).slideTo(index)
  }
  const onSlideActiveChange = (index: number) => {
    setActiveIndex(index)
  }
  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex === 0) {
      setIsDarkHeader(false)
    } else {
      setIsDarkHeader(true)
    }
    setCurrentIndex(swiper.activeIndex)
  }

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    if (scrollPosition > windowHeight) {
      setHideArrow(true)
    } else {
      setHideArrow(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  return (
    <Layout>
      <Header toHome={false} onActiveSlideChange={onSlideActiveChange} onClickToggle={onToggle} dark={isDarkHeader} activeSlideIndex={currenIndex} />
      {isOpen && <ModalMenu showBg={currenIndex === 0} in={isOpen} onClickToggle={onToggle} />}
      {isMobileScreen
        ? <Stack direction="column">
          <Box className='w-screen h-screen'>
            <LandingHome hideArrow={hideArrow} />
          </Box>
          <Box className='w-screen h-screen'>
            <LandingExperience />
          </Box>
          <Box className='w-screen h-screen'>
            <LandingWorkV2 />
          </Box>
          <Box className='w-screen h-screen'>
            <LandingAbout />
          </Box>
          <Box className='w-screen h-screen'>
            <Center className='h-full bg-black'>
              <Contact className="w-4/5 px-12"></Contact>
            </Center>
          </Box>
        </Stack>
        : <Swiper
          className='w-full h-full'
          slidesPerView={1}
          direction='vertical'
          mousewheel={{
            releaseOnEdges: true,
            thresholdDelta: 20,
          }}
          speed={1000}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          preventInteractionOnTransition={true}
          onSlideChange={handleSlideChange}>
          <SwiperSlide>
            <LandingHome />
          </SwiperSlide>
          <SwiperSlide>
            <LandingExperience />
          </SwiperSlide>
          <SwiperSlide>
            <LandingWorkV2 />
          </SwiperSlide>
          <SwiperSlide>
            <LandingAbout />
          </SwiperSlide>
        </Swiper>}
    </Layout>
  )
}
