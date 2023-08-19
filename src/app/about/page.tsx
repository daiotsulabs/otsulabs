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
          <Text mb={isMobileScreen ? 2 : 5}>Mission: we want to share our love for anime with the world. You see, anime is a beautiful form of storytelling, but those unfamiliar with it find it difficult to grasp its allure.</Text>
          <Text mb={isMobileScreen ? "20px" : "24px"}>To change this, we broke free from the confines of traditional production studios and created a team that helps projects and brands share their stories through the lens of anime.</Text>
          <Text className='text-xs uppercase font-bold mb-[6px] md:mb-[10px]' color="#f5f5f5" mb={isMobileScreen ? 2 : 5} letterSpacing={1.2}>How</Text>
          <Text mb={isMobileScreen ? "20px" : "24px"}>Our approach is clear-cut: you have a brand, a product, a character you want to blow up, we&apos;ll use our skills to help you make it happen. </Text>
          <Text mb={isMobileScreen ? "20px" : "24px"}>We start with your story and take it from there, bringing our expertise and creativity to the table. From crafting character designs to post-production, we&apos;ll work together to create something we will all be proud of.</Text>
        </Box>
        {!isMobileScreen && <Box>
          <SingleLogo width={218} height={218} fill={"white"} />
        </Box>}
      </Flex>
    </Layout>
  )
}
