"use client"
import { Header, LandingAbout, LandingExperience, LandingHome, LandingProcess, Layout, StyledPagination } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Pagination } from 'swiper/modules'
import { useState } from 'react'

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
        modules={[Mousewheel, Pagination]}
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
          <LandingProcess />
        </SwiperSlide>
        <SwiperSlide>
          <LandingAbout />
        </SwiperSlide>
      </Swiper>
    </Layout>
  )
}
