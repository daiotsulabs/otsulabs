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
import { useRouter } from "next/navigation";

export default function On1Forces() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const [backPath, setBackPath] = useState("/work");
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };
  const router = useRouter();

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
        className="w-full h-[320px] md:h-full relative animate-page-fade"
      >
        <Box className="flex-1 bg-white relative">
          <Image
            src="/images/on1forces.png"
            alt="on1forces"
            fill
            objectFit="cover"
            objectPosition="bottom"
          />
        </Box>
        <Stack
          className={`w-full h-full absolute text-[#f5f5f5] ${
            isMobileScreen ? "bg-[#01010180]" : "bg-[#010101b3]"
          }`}
        >
          <Box className="w-[230px] md:w-[610px] absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Text
              className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
            >
              0N1 FORCE
            </Text>
            <Text className="text-[10px] md:text-[18px] font-normal md:mt-[15px]">
              An anime media and technology company, building a full suite of
              multimedia products centered around the 0N1 Force intellectual
              properties
            </Text>
            <Text
              className="text-[8px] md:text-[14px] tracking-[1.5px] uppercase font-normal mt-[10px] md:mt-[25px] cursor-pointer hover:underline"
              onClick={() => router.push("https://www.oniforce.com/")}
            >
              visit website
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
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Character Design
          </Text>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[268px] md:w-[502px] md:h-[894px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/on1force-1.png" alt="on1force-1" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[268px] md:w-[502px] md:h-[894px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/on1force-2.png" alt="on1force-2" />
            </Box>
          </Stack>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[502px] md:h-[354px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/on1force-3.png" alt="on1force-3" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[502px] md:h-[354px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/on1force-4.png" alt="on1force-4" />
            </Box>
          </Stack>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[219px] md:w-[1040px] md:h-[732px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/on1force-5.png" alt="on1force-5" />
          </Box>
        </Stack>

        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Animation
          </Text>
          <Stack className="mx-auto gap-[10px] md:gap-[35px] flex-col md:flex-row">
            <Box
              className="bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[176px] md:w-[502px] md:h-[283px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/on1force-1.mp4" type="video/mp4" />
              </video>
            </Box>
            <Box
              className="bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[176px] md:w-[502px] md:h-[283px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/on1force-2.mp4" type="video/mp4" />
              </video>
            </Box>
          </Stack>
        </Stack>

        <Box className="w-full h-[219px] md:h-screen">
          <DetailVideoPlayer
            src="/videos/on1forces.mp4"
            poster="/images/on1forces.png"
            name="on1forces"
          />
        </Box>
      </Stack>
    </Layout>
  );
}
