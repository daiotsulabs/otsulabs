"use client";
import { Header, Layout, ModalMenu } from "@/components";
import { useRef, useState } from "react";
import { Box, Grid, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { mcQueenDisplay } from "../layout";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
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
      <Stack className="w-full h-auto md:h-auto text-center pt-[80px] md:pt-[124px] pb-[60px] bg-white text-[#010101] animate-page-fade">
        <Stack className="gap-[15px] gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-4xl font-medium -mb-[15px]`}
          >
            Work
          </Text>
          <Grid
            className={`grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[35px] mx-auto text-[#f5f5f5] text-xl md:text-4xl font-medium ${mcQueenDisplay.className}`}
          >
            <Link href={"/system-royale"}>
              <Box
                className="relative mx-auto bg-white rounded-[10px] rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[174px] md:w-[502px] md:h-[283px] cursor-pointer group"
                boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
              >
                <Image
                  fill
                  src="/images/system-royal.png"
                  alt="System Royal"
                  className="brightness-50 md:brightness-100 hover:brightness-50 transition duration-300 ease-in-out"
                />
                <Text className="absolute bottom-[15px] left-[20px] md:bottom-[25px] md:left-[25px] opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  System Royale
                </Text>
              </Box>
            </Link>
            <Link href={"/conviction"}>
              <Box
                className="relative mx-auto bg-white rounded-[10px] rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[174px] md:w-[502px] md:h-[283px] cursor-pointer group"
                boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
              >
                <Image
                  fill
                  src="/images/Conviction.png"
                  alt="Conviction"
                  className="brightness-50 md:brightness-100 hover:brightness-50 transition duration-300 ease-in-out"
                />
                <Text className="absolute bottom-[15px] left-[20px] md:bottom-[25px] md:left-[25px] opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  Conviction
                </Text>
              </Box>
            </Link>
            <Link href={"/alexhugh"}>
              <Box
                className="relative mx-auto bg-white rounded-[10px] rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[174px] h-[188px] md:w-[502px] md:h-[283px] cursor-pointer group"
                boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
              >
                <Image
                  fill
                  src="/images/AlexH.png"
                  alt="AlexH"
                  className="brightness-50 md:brightness-100 hover:brightness-50 transition duration-300 ease-in-out"
                />
                <Text className="absolute bottom-[15px] left-[20px] md:bottom-[25px] md:left-[25px] opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  Alex Hugh
                </Text>
              </Box>
            </Link>
            <Link href={"/on1force"}>
              <Box
                className="relative mx-auto bg-white rounded-[10px] rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[174px] h-[188px] md:w-[502px] md:h-[283px] cursor-pointer group"
                boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
              >
                <Image
                  fill
                  src="/images/on1forces.png"
                  alt="on1forces"
                  className="brightness-50 md:brightness-100 hover:brightness-50 transition duration-300 ease-in-out"
                />
                <Text className="absolute bottom-[15px] left-[20px] md:bottom-[25px] md:left-[25px] opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  ON1 FORCE
                </Text>
              </Box>
            </Link>
            <Link href={"/musicfrens"}>
              <Box
                className="relative mx-auto bg-white rounded-[10px] rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[174px] h-[188px] md:w-[502px] md:h-[283px] cursor-pointer group"
                boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
              >
                <Image
                  fill
                  src="/images/MusicFrens.png"
                  alt="MusicFrens"
                  className="brightness-50 md:brightness-100 hover:brightness-50 transition duration-300 ease-in-out"
                />
                <Text className="absolute bottom-[15px] left-[20px] md:bottom-[25px] md:left-[25px] opacity-100 md:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  Music Frens
                </Text>
              </Box>
            </Link>
          </Grid>
        </Stack>
      </Stack>
    </Layout>
  );
}
