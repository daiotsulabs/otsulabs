"use client";
import { DetailVideoPlayer, Header, Layout, ModalMenu } from "@/components";
import { useEffect, useRef, useState } from "react";
import {
  Box,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { mcQueenDisplay } from "../layout";
import Image from "next/image";

export default function MusicFrens() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const [backPath, setBackPath] = useState("/work");
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };

  useEffect(() => {
    const hashtag = window.location.hash?.split("#")[1];
    if (hashtag === "home") {
      setBackPath("/#work");
    }
  }, []);

  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
  const [isMediumScreen] = useMediaQuery("(max-width: 1513px)");

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
        className="w-full h-[320px] md:h-full animate-page-fade"
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
          className={`h-[320px] w-full md:h-full absolute text-[#f5f5f5] ${
            isMobileScreen ? "bg-[#01010180]" : "bg-[#010101b3]"
          }`}
        >
          <Box className="w-auto md:w-[450px] absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Text
              className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
            >
              Music Frens
            </Text>
          </Box>
        </Stack>
        {!isMobileScreen && (
          <Box
            position="absolute"
            cursor="pointer"
            className="animate-[bounce_1.5s_infinite] bottom-[60px] md:bottom-[10px] w-full"
          >
            <Box className="w-full h-full flex items-center justify-center">
              <Image
                src="/icons/arrow-down.svg"
                width={isMobileScreen ? 12 : isMediumScreen ? 18 : 24}
                height={isMobileScreen ? 44 : isMediumScreen ? 66 : 88}
                alt="arrow-down"
              />
            </Box>
          </Box>
        )}
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

        <Box className="w-screen h-[219px] md:h-screen">
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
