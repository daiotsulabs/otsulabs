"use client";
import { Header, Layout, ModalMenu } from "@/components";
import { useRef, useState } from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { SingleLogo } from "@/components/icons";
import { mcQueenDisplay } from "../layout";

export default function About() {
  const { isOpen, onToggle } = useDisclosure();
  const [isDarkHeader, setIsDarkHeader] = useState(false);
  const [currenIndex, setCurrentIndex] = useState(0);
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
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
        dark={isDarkHeader}
        activeSlideIndex={currenIndex + 1}
      />
      {isOpen && (
        <ModalMenu showBg={false} in={isOpen} onClickToggle={onToggle} />
      )}
      <Flex
        className="w-full h-full items-center justify-between bg-black text-[#707070] animate-page-fade"
        pl={isMobileScreen ? "44px" : 164}
        pr={isMobileScreen ? "80px" : 244}
        fontSize={isMobileScreen ? "10px" : "md"}
      >
        <Box maxW={540} className="text-lg">
          <Stack gap={50}>
            <Stack direction="row" alignItems="center" gap={5}>
              <Text
                className={`text-4xl font-medium ${mcQueenDisplay.className}`}
                color="#f5f5f5"
              >
                Otsu おつ
              </Text>
              <Text className="text-lg font-normal" color="#707070">
                {`("Thank you for your hard work!")`}
              </Text>
            </Stack>
            <Stack direction="row" gap={55} alignItems="flex-start">
              <Box
                className="text-xs font-bold tracking-[1.2px] text-[#f5f5f5] leading-7 shrink-0"
                w={"40px"}
              >
                WHO
              </Box>
              <Text className="font-normal">
                Animators, artists, storytellers, content creators, and just
                weebs.
              </Text>
            </Stack>
            <Stack direction="row" gap={55}>
              <Box
                className="text-xs font-bold tracking-[1.2px] text-[#f5f5f5] leading-7 shrink-0"
                w={"40px"}
              >
                WHAT
              </Box>
              <Text className="font-normal">
                Nearly 3 billion people worldwide watch anime! Our goal is to
                help brands tap into that massive audience by telling their
                stories through the lens of anime.
              </Text>
            </Stack>
            <Stack direction="row" gap={55}>
              <Box
                className="text-xs font-bold tracking-[1.2px] text-[#f5f5f5] leading-7 shrink-0"
                w={"40px"}
              >
                HOW
              </Box>
              <Box className="font-normal">
                <Text mb={7}>
                  Our approach is clear-cut: We start with your story and take
                  it from there, bringing our expertise and creativity to the
                  table.
                </Text>
                <Text>
                  From crafting character designs to post-production, we&apos;ll
                  work together to create something we will all be proud of.
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Box>
        {!isMobileScreen && (
          <Box>
            <SingleLogo width={313} height={313} fill={"white"} />
          </Box>
        )}
      </Flex>
    </Layout>
  );
}
