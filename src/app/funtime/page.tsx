"use client";
import { Header, Layout, ModalMenu } from "@/components";
import { useRef, useState } from "react";
import { Box, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { mcQueenDisplay } from "../layout";
import Image from "next/image";

export default function About() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };
  return (
    <Layout>
      <Header
        onActiveSlideChange={(index: number) => setActiveIndex(index - 1)}
        menuItems={[]}
        onClickToggle={onToggle}
        dark={true}
        activeSlideIndex={currenIndex + 1}
      />
      {isOpen && (
        <ModalMenu showBg={false} in={isOpen} onClickToggle={onToggle} />
      )}
      <Stack className="w-full h-auto text-center pt-[124px] bg-white text-[#010101] animate-page-fade">
        <Stack gap="35px">
          <Text className={`${mcQueenDisplay.className} text-4xl font-medium`}>
            Erene Animation
          </Text>
          <Text
            className="text-[#A9A9A9] text-lg font-normal mx-auto"
            maxW="668px"
          >
            Erene Animation is an internal passion project inspired by our own
            Creative Director, Erene. It&apos;s a digital identity and an
            original intellectual property that portrays the life of an artist
            via short-form animations.
          </Text>
          <Box
            w="840px"
            h="840px"
            className="relative mx-auto bg-white rounded-[30px] overflow-hidden"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/pfp.png" alt="pfp" />
          </Box>
        </Stack>

        <Stack className="mt-[35px]" gap="35px">
          <Text className={`${mcQueenDisplay.className} text-4xl font-medium`}>
            Character Design
          </Text>
          <Box
            w="840px"
            h="510px"
            className="relative mx-auto bg-white rounded-[30px] overflow-hidden"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/design.png" alt="design" />
          </Box>
        </Stack>

        <Stack className="mt-[70px]" gap="35px">
          <Text className={`${mcQueenDisplay.className} text-4xl font-medium`}>
            Personality
          </Text>
          <Stack
            direction="row"
            className="uppercase text-[15px] tracking-[1.5px] font-normal mx-auto"
            gap={6}
          >
            <Text>clumsy</Text>
            <Text>purpose-driven</Text>
            <Text>introvert</Text>
          </Stack>
          <Text
            className="text-[#A9A9A9] text-base font-normal mx-auto shrink-0"
            maxW="748px"
          >
            Erene tackles each project with determination and a clear vision,
            but she&apos;s also known for her clumsiness, occasionally spilling
            coffee on her work or tripping over her own feet. Erene&apos;s
            introverted nature is her superpower, as it helps her delve deep
            into the creative process, finding inspiration from within herself.
          </Text>
          <Box
            w="840px"
            h="510px"
            className="relative mx-auto bg-white rounded-[30px] overflow-hidden"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/emotions.png" alt="pfp" />
          </Box>
        </Stack>

        <Stack className="my-[70px]" gap="35px">
          <Text className={`${mcQueenDisplay.className} text-4xl font-medium`}>
            Follow Erene&apos;s Journey
          </Text>
          <Stack
            direction="row"
            className="uppercase text-[15px] tracking-[1.5px] font-normal mx-auto"
            gap={20}
          >
            <Text>twitter</Text>
            <Text>tiktok</Text>
            <Text>youtube</Text>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
