"use client"
import { Header, Layout, ModalMenu, StyledPagination } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import { Box, Stack, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'

const Content = ({ title, children }: any) => {
  return (
    <Box className='w-full h-full flex flex-col items-center justify-center' gap="60px">
      <Box fontWeight="bold" fontSize="3xl" className='uppercase'>{title}</Box>
      {children}
    </Box>
  )
}

export default function About() {
  const { isOpen, onToggle } = useDisclosure()
  const [isDarkHeader, setIsDarkHeader] = useState(false)
  const [currenIndex, setCurrentIndex] = useState(0)
  const handleSlideChange = (swiper: any) => {
    if (swiper.activeIndex === 0) {
      setIsDarkHeader(false)
    } else {
      setIsDarkHeader(true)
    }
    setCurrentIndex(swiper.activeIndex)
  }
  return (
    <Layout>
      <Header
        menuItems={["hi", "otsu", "mission", "approach"]}
        onClickToggle={onToggle}
        dark={isDarkHeader}
        activeSlideIndex={currenIndex + 1}
      />
      <StyledPagination dark={isDarkHeader} activeIndex={currenIndex} total={4} />
      <ModalMenu showBg={currenIndex === 0} in={isOpen} onClickToggle={onToggle} />
      <Swiper
        className='w-full h-full'
        slidesPerView={1}
        direction='vertical'
        mousewheel={true}
        speed={1000}
        onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <Box className='w-full h-full relative' bg="black">
            <Image
              src="/images/about-bg.png"
              fill
              alt='about-bg'
            />
            <Box
              className='absolute'
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              color="white"
              fontSize="4xl"
              fontWeight="bold"
            >
              Hi!
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Content title="otsu">
            <Box maxW={576} textAlign="center" color="#969696" fontSize="lg">
              &quot;Otsu!&quot; - the Japanese term for &quot;good work&quot; or &quot;thank you for your great work.&quot; We strive to hear these words from everyone we collaborate with and aim for excellence in every piece of content we produce.
            </Box>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content title="mission">
            <Stack direction="column" maxW={565} color="#969696" fontSize="lg" gap="20px">
              <Box textAlign="center">
                Our mission is so simple, our friends laugh at it sometimes, but that very simplicity keeps us focused and driven.
              </Box>
              <Box textAlign="center">
                <Text as="span" color="black">We want to share our love for anime with the world.</Text> You see, anime is a beautiful form of storytelling, but those unfamiliar with it find it difficult to grasp its allure.
              </Box>
              <Box textAlign="center">
                To change this, we broke free from the confines of traditional production studios and created a team that helps projects and brands share their stories through the lens of anime.
              </Box>
            </Stack>
          </Content>
        </SwiperSlide>
        <SwiperSlide>
          <Content title="approach">
            <Stack direction="column" maxW={565} color="#969696" fontSize="lg" gap="20px">
              <Box textAlign="center">
                Our approach is clear-cut: you have a brand, a product, a character you want to blow up, we&apos;ll use our skills to help you make it happen.
              </Box>
              <Box textAlign="center">
                We start with your story and take it from there, bringing our expertise and creativity to the table. From crafting character designs to post-production, we&apos;ll work together to create something we will all be proud of.
              </Box>
            </Stack>
          </Content>
        </SwiperSlide>
      </Swiper>
    </Layout>
  )
}
