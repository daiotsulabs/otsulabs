"use client"
import { Header, Layout, StyledPagination } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import { LandingHome } from '@/containers/LandingHome'
import { LandingAbout, LandingExperience, LandingProcess, LandingWork } from '@/containers'

export default function Home() {
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
      <Header dark={isDarkHeader} activeSlideIndex={currenIndex} />
      <StyledPagination dark={isDarkHeader} activeIndex={currenIndex} total={5} />
      <Swiper
        className='w-full h-full'
        slidesPerView={1}
        direction='vertical'
        mousewheel={true}
        speed={1000}
        onSlideChange={handleSlideChange}>
        <SwiperSlide>
          <LandingHome />
        </SwiperSlide>
        <SwiperSlide>
          <LandingExperience />
        </SwiperSlide>
        <SwiperSlide>
          <LandingWork />
        </SwiperSlide>
        <SwiperSlide>
          <LandingProcess />
        </SwiperSlide>
        <SwiperSlide>
          <LandingAbout />
        </SwiperSlide>
      </Swiper>
    </Layout>
  )
}
