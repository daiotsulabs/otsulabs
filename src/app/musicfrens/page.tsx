"use client";
import { DetailVideoPlayer, Header, Layout, ModalMenu } from "@/components";
import { useRef, useState } from "react";
import { Box, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { mcQueenDisplay } from "../layout";
import Image from "next/image";

export default function MusicFrens() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };
  return (
    <Layout showBackButton>
      <Header
        onActiveSlideChange={(index: number) => setActiveIndex(index - 1)}
        menuItems={[]}
        onClickToggle={onToggle}
        activeSlideIndex={currenIndex + 1}
      />
      {isOpen && (
        <ModalMenu showBg={false} in={isOpen} onClickToggle={onToggle} />
      )}

      <Stack
        bgImage="/images/noise.png"
        direction="column"
        className="w-full h-full"
      >
        <Box className="flex-1 bg-white relative">
          <Image
            src="/images/MusicFrens.png"
            alt="MusicFrens"
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
        </Box>
        <Stack
          direction="row"
          className="h-[355px] text-[#f7f7f7] items-center pl-[280px]"
          gap={348}
        >
          <Stack gap={1} w={251}>
            <Text
              className={`${mcQueenDisplay.className} text-4xl font-bold opacity-40`}
            >
              Music Frens
            </Text>
          </Stack>
          <Stack gap={8} className="text-[15px] font-normal">
            <Box>
              <Text className="uppercase tracking-[1.5px]">project</Text>
              <Text className="text-[#707070] text-xl">20 Second Trailer</Text>
            </Box>
            <Box>
              <Text className="uppercase tracking-[1.5px]">date</Text>
              <Text className="text-[#707070] text-xl">July 21, 2023</Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        className="w-full h-auto text-center bg-white text-[#010101] animate-page-fade pt-[70px]"
        gap="70px"
      >
        <Stack gap="35px">
          <Box
            w="1040px"
            h="722px"
            className="relative mx-auto bg-white rounded-[30px] overflow-hidden"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/music-frens-1.png" alt="music-frens-1" />
          </Box>
          <Box
            w="1040px"
            h="722px"
            className="relative mx-auto bg-white rounded-[30px] overflow-hidden"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/music-frens-2.png" alt="music-frens-2" />
          </Box>
        </Stack>

        <Stack gap="35px">
          <Text className={`${mcQueenDisplay.className} text-4xl font-medium`}>
            Animation
          </Text>
          <Box
            w="1040px"
            h="585px"
            className="mx-auto bg-white rounded-[30px] overflow-hidden"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/music-frens.mp4" type="video/mp4" />
            </video>
          </Box>
        </Stack>

        <Box className="w-full h-[810px]">
          <DetailVideoPlayer
            src="/videos/musicfrens.mp4"
            poster="/images/MusicFrens.png"
            name="MusicFrens"
          />
        </Box>
      </Stack>
    </Layout>
  );
}
