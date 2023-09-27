"use client";
import { DetailVideoPlayer, Header, Layout, ModalMenu } from "@/components";
import { useRef, useState } from "react";
import { Box, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { mcQueenDisplay } from "../layout";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Conviction() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };
  const router = useRouter();
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
        className="w-full h-[320px] md:h-full"
      >
        <Box className="flex-1 bg-white relative">
          <Image
            src="/images/Conviction.png"
            alt="conviction"
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
              Conviction
            </Text>
            <Text
              className="text-[8px] md:text-[15px] tracking-[1.5px] uppercase font-normal cursor-pointer hover:underline"
              onClick={() => router.push("https://www.conviction.ooo/")}
            >
              visit website
            </Text>
          </Stack>
          <Stack className="text-[8px] md:text-[15px] font-normal gap-5 md:gap-8">
            <Box>
              <Text className="uppercase tracking-[1.5px]">project</Text>
              <Text className="text-[#707070] text-[8px] md:text-xl">
                15 Second Teaser Animation
              </Text>
            </Box>
            <Box>
              <Text className="uppercase tracking-[1.5px]">date</Text>
              <Text className="text-[#707070] text-[8px] md:text-xl">
                July 19, 2023
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Stack>

      <Stack className="w-full h-auto text-center bg-white text-[#010101] animate-page-fade pt-[30px] md:pt-[70px] gap-[30px] md:gap-[70px]">
        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Character Design
          </Text>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[122px] md:w-[1040px] md:h-[408px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/conviction-1.png" alt="conviction-1" />
          </Box>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[215px] h-[138px] md:w-[720px] md:h-[460px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/conviction-2.png" alt="conviction-2" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[85px] h-[138px] md:w-[285px] md:h-[460px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/conviction-3.png" alt="conviction-3" />
            </Box>
          </Stack>
        </Stack>

        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Background
          </Text>
          <Box
            w="1040px"
            h="352px"
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[105px] md:w-[1040px] md:h-[352px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/conviction-4.png" alt="conviction-4" />
          </Box>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[177px] md:w-[1040px] md:h-[594px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/conviction-5.png" alt="convition-5" />
          </Box>
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Items
          </Text>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[150px] h-[103px] md:w-[502px] md:h-[344px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/conviction-6.png" alt="conviction-6" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[150px] h-[103px] md:w-[502px] md:h-[344px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/conviction-7.png" alt="convition-7" />
            </Box>
          </Stack>
        </Stack>

        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Animation
          </Text>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[144px] h-[81px] md:w-[502px] md:h-[281px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/c005.mp4" type="video/mp4" />
              </video>
            </Box>
            <Box
              className="bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[144px] h-[81px] md:w-[502px] md:h-[281px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/c001.mp4" type="video/mp4" />
              </video>
            </Box>
          </Stack>
          <Box
            className="mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[299px] h-[167px] md:w-[1040px] md:h-[580px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/c003.mp4" type="video/mp4" />
            </video>
          </Box>
        </Stack>

        <Box className="w-full h-[219px] md:h-[810px]">
          <DetailVideoPlayer
            src="/videos/conviction.mp4"
            poster="/images/Conviction.png"
            name="Conviction"
          />
        </Box>
      </Stack>
    </Layout>
  );
}
