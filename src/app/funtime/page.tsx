"use client";
import { Header, Layout, ModalMenu } from "@/components";
import { useRef, useState } from "react";
import { Box, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { mcQueenDisplay } from "../layout";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function About() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };
  const router = useRouter();
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
      <Stack className="w-full h-auto text-center pt-[80px] md:pt-[124px] bg-white text-[#010101] animate-page-fade">
        <Stack gap="30px">
          <Text
            className={`${mcQueenDisplay.className} text-4xl font-medium -mb-[15px]`}
          >
            Erene Animation
          </Text>
          <Text className="text-[#A9A9A9] text-xs md:text-lg font-normal mx-auto max-w-[313px] md:max-w-[668px]">
            Erene Animation is an internal passion project inspired by our own
            Creative Director, Erene. It&apos;s a digital identity and an
            original intellectual property that portrays the life of an artist
            via short-form animations.
          </Text>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[310px] md:w-[840px] md:h-[840px] md:mt-[70px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/pfp.png" alt="pfp" />
          </Box>
        </Stack>

        <Stack className="mt-[18px] md:mt-[70px]" gap="30px">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Character Design
          </Text>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[188px] md:w-[840px] md:h-[510px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/design.png" alt="design" />
          </Box>
        </Stack>

        <Stack className="mt-[18px] md:mt-[70px] gap-[15px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Personality
          </Text>
          <Stack
            direction="row"
            className="uppercase text-xs md:text-[15px] tracking-[1.5px] font-normal mx-auto gap-[14px] md:gap-6"
          >
            <Text>clumsy</Text>
            <Text>purpose-driven</Text>
            <Text>introvert</Text>
          </Stack>
          <Text className="text-[#A9A9A9] text-xs md:text-base font-normal mx-auto shrink-0 max-w-[310px] md:max-w-[748px]">
            Erene tackles each project with determination and a clear vision,
            but she&apos;s also known for her clumsiness, occasionally spilling
            coffee on her work or tripping over her own feet. Erene&apos;s
            introverted nature is her superpower, as it helps her delve deep
            into the creative process, finding inspiration from within herself.
          </Text>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[188px] md:w-[840px] md:h-[510px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/emotions.png" alt="pfp" />
          </Box>
        </Stack>

        <Stack className="mt-[18px] mb-[60px] md:my-[70px] gap-[15px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Follow Erene&apos;s Journey
          </Text>
          <Stack
            direction="row"
            className="uppercase text-xs md:text-[15px] tracking-[1.5px] font-normal mx-auto gap-[15px] md:gap-20"
          >
            <Link href={'https://twitter.com/EreneAnimation'} target="_blank">
              <Text
                className="cursor-pointer hover:underline"
              >
                twitter
              </Text>
            </Link>
            <Link href={'https://www.tiktok.com/@ereneanimation'} target="_blank">
              <Text
                className="cursor-pointer hover:underline"
              >
                tiktok
              </Text>
            </Link>
            <Link href={'https://www.youtube.com/@EreneAnimation'} target="_blank">
              <Text
                className="cursor-pointer hover:underline"
              >
                youtube
              </Text>
            </Link>
            <Link href={'https://www.instagram.com/ereneanimation/'} target="_blank">
              <Text
                className="cursor-pointer hover:underline"
              >
                instagram
              </Text>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
