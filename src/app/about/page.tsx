"use client"
import { Header, Layout, ModalMenu } from '@/components'
import { useRef, useState } from 'react'
import { Box, Flex, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { SingleLogo } from '@/components/icons'

export default function About() {
  const { isOpen, onToggle } = useDisclosure()
  const [isDarkHeader, setIsDarkHeader] = useState(false)
  const [currenIndex, setCurrentIndex] = useState(0)
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  const swiperRef = useRef()
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return
    (swiperRef.current as any).slideTo(index)
  }
  return (
    <Layout>
      <Header
        onActiveSlideChange={(index: number) => setActiveIndex(index - 1)}
        menuItems={[]}
        onClickToggle={onToggle}
        dark={isDarkHeader}
        activeSlideIndex={currenIndex + 1}
      />
      {isOpen && <ModalMenu showBg={false} in={isOpen} onClickToggle={onToggle} />}
      <Flex className='w-full h-full items-center justify-between bg-black text-[#707070]'
        pl={isMobileScreen ? "44px" : 164}
        pr={isMobileScreen ? "80px" : 244}
        fontSize={isMobileScreen ? "10px" : "md"}>
        <Box maxW={540}>
          <Text className='text-xs uppercase font-bold mb-[6px] md:mb-[10px]' color="#f5f5f5" mb={isMobileScreen ? 2 : 5} letterSpacing={1.2}>who</Text>
          <Text mb={isMobileScreen ? "20px" : "24px"}>Animators, artists, storytellers, content creators, and just weebs. </Text>
          <Text className='text-xs uppercase font-bold mb-[6px] md:mb-[10px]' color="#f5f5f5" mb={isMobileScreen ? 2 : 5} letterSpacing={1.2}>what</Text>
          <Text mb={isMobileScreen ? 2 : 5}>Our mission is so simple, our friends laugh at it sometimes, but that very simplicity keeps us focused and driven. </Text>
          <Text mb={isMobileScreen ? 2 : 5}>We want to share our love for anime with the world. Anime is a beautiful form of storytelling, but people who don&apos;t know about it struggle to understand why it&apos;s so captivating.</Text>
          <Text mb={isMobileScreen ? "20px" : "24px"}>To fix this, we built a team that helps projects and brands share their stories through the lens of anime.</Text>
          <Text className='text-xs uppercase font-bold mb-[6px] md:mb-[10px]' color="#f5f5f5" mb={isMobileScreen ? 2 : 5} letterSpacing={1.2}>How</Text>
          <Text mb={isMobileScreen ? "20px" : "24px"}>Our approach is clear-cut: if you have a brand, product, or character you want the world to know about, we&apos;ll use our experience and skills to help you make it happen.</Text>
          <Text mb={isMobileScreen ? "20px" : "24px"}>We start with your story and take it from there, bringing our creativity into the process. From crafting character designs to post-production, we&apos;ll collaborate to create something we will all be proud of.</Text>
        </Box>
        {!isMobileScreen && <Box>
          <SingleLogo width={218} height={218} fill={"white"} />
        </Box>}
      </Flex>
    </Layout>
  )
}
