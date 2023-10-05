"use client";
import { DetailVideoPlayer, Header, Layout, ModalMenu } from "@/components";
import { useEffect, useRef, useState } from "react";
import { Box, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { mcQueenDisplay } from "../layout";
import Image from "next/image";

export default function MusicFrens() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const [backPath, setBackPath] = useState('/work');
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };

  useEffect(() => {
    const hashtag = window.location.hash?.split('#')[1];
    if (hashtag === 'home') {
      setBackPath('/#work');
    }
  }, []);

  return (
    <Layout toggleMenu={isOpen} showBackButton={backPath}>
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
        direction="column"
        className="w-full h-[320px] md:h-full"
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
          className="h-[100px] md:h-[355px] text-[#f7f7f7] items-center px-10 md:pl-[280px] md:gap-[348px] justify-between md:justify-normal"
        >
          <Stack gap={1} className="w-auto md:w-[251px]">
            <Text
              className={`${mcQueenDisplay.className} text-xl md:text-4xl font-bold opacity-40`}
            >
              Music Frens
            </Text>
          </Stack>
          <Stack className="text-[8px] md:text-[15px] font-normal gap-5 md:gap-8">
            <Box>
              <Text className="uppercase tracking-[1.5px]">project</Text>
              <Text className="text-[#707070] text-[8px] md:text-xl">
                20 Second Trailer
              </Text>
            </Box>
            <Box>
              <Text className="uppercase tracking-[1.5px]">date</Text>
              <Text className="text-[#707070] text-[8px] md:text-xl">
                July 21, 2023
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack className="w-full h-auto text-center bg-white text-[#010101] animate-page-fade pt-[22px] md:pt-[60px] gap-[22px] md:gap-[60px]">
        <Stack className="gap-[10px] md:gap-[35px]">
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[216px] md:w-[1040px] md:h-[722px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/music-frens-1.png" alt="music-frens-1" />
          </Box>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[216px] md:w-[1040px] md:h-[722px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/music-frens-2.png" alt="music-frens-2" />
          </Box>
        </Stack>

        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Animation
          </Text>
          <Box
            className="mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[175px] md:w-[1040px] md:h-[585px]"
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

        <Box className="w-full h-[219px] md:h-[810px]">
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
