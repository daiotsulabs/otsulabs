"use client";
import { DetailVideoPlayer, Header, Layout, ModalMenu } from "@/components";
import { useEffect, useRef, useState } from "react";
import { Box, Stack, Text, useDisclosure } from "@chakra-ui/react";
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
            src="/images/voyceMe-1.png"
            alt="voyceMe"
            fill
            objectFit="cover"
          />
        </Box>
        <Stack
          direction="row"
          className="h-[100px] md:h-[256px] text-[#f7f7f7] items-center px-10 md:pl-[280px] md:gap-[348px] justify-between md:justify-normal"
        >
          <Stack gap={1} className="w-auto md:w-[416px]">
            <Text
              className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium text-[#f5f5f5]`}
            >
              VoyceMe
            </Text>
            <Text className="text-[8px] md:text-[18px] font-normal text-[#f5f5f580]">
              VoyceMe is the first social creator platform. It is the home of
              creativity that hosts the highest quality English manga,
              web-comics, and web-novels.
            </Text>
            <Text
              className="text-[8px] md:text-[15px] tracking-[1.5px] uppercase font-normal cursor-pointer hover:underline"
              onClick={() => router.push("https://www.oniforce.com/")}
            >
              visit website
            </Text>
          </Stack>
        </Stack>
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
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[268px] md:w-[1040px] md:h-[625px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-2.png" alt="voyceMe-2" />
            </Box>
          </Stack>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[219px] md:w-[1040px] md:h-[398px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-3.png" alt="voyceMe-3" />
          </Box>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[550px] md:h-[332px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-4.png" alt="voyceMe-4" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[454px] md:h-[332px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-5.png" alt="voyceMe-5" />
            </Box>
          </Stack>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[462px] md:h-[530px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-6.png" alt="voyceMe-6" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[542px] md:h-[530px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-7.png" alt="voyceMe-7" />
            </Box>
          </Stack>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[219px] md:w-[1040px] md:h-[642px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-8.png" alt="voyceMe-8" />
          </Box>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[219px] md:w-[1040px] md:h-[657px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-9.png" alt="voyceMe-9" />
          </Box>
        </Stack>

        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Environment Design
          </Text>
          <Box className="infinite-running-image">
            <Box className="running-animation" />
          </Box>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[219px] md:w-[1040px] md:h-[584px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-11.png" alt="voyceMe-11" />
          </Box>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[446px] md:h-[314px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-12.png" alt="voyceMe-12" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[107px] md:w-[558px] md:h-[314px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-13.png" alt="voyceMe-13" />
            </Box>
          </Stack>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[219px] md:w-[1040px] md:h-[734px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-14.png" alt="voyceMe-14" />
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
}
