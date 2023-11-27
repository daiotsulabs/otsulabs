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
import { mcQueenDisplay } from "../layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InstagramEmbed from "react-instagram-embed";
const access_token = "edf687106436869c0a167dbe3a403e6d";
const app_id = "1330901041120737";
export default function About() {
  const { isOpen, onToggle } = useDisclosure();
  const [currenIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();
  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index);
  };
  const router = useRouter();
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
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
      <Stack className="w-full text-center pt-[80px] md:pt-[124px] bg-white text-[#010101] animate-page-fade gap-0">
        <Stack className="gap-[15px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-4xl font-medium md:-mb-[15px]`}
          >
            Erene Animation
          </Text>
          <Text className="text-[#A9A9A9] text-xs md:text-lg font-normal mx-auto max-w-[313px] md:max-w-[840px]">
            Erene Animation is an internal passion project inspired by our own
            Creative Director, Erene. It&apos;s a digital identity and an
            original intellectual property that portrays the life of an artist
            via short-form animations.
          </Text>
          <Flex className="justify-between w-[308px] md:w-[840px] mx-auto">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[100px] h-[200px] md:w-[272px] md:h-[540px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/funtime-top-2.png" alt="pfp" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[100px] h-[200px] md:w-[272px] md:h-[540px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/funtime-top-1.png" alt="pfp" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[100px] h-[200px] md:w-[272px] md:h-[540px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/funtime-top-3.png" alt="pfp" />
            </Box>
          </Flex>
        </Stack>

        <Stack className="mt-[30px] md:mt-[70px] gap-[15px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Character Design
          </Text>
          <Text className="text-[#A9A9A9] text-xs md:text-lg font-normal mx-auto max-w-[313px] md:max-w-[840px]">
            Erene&apos;s character design draws inspiration from the steampunk
            genre. Despite living in an ordinary world, she leads an
            extraordinary life, a narrative we aim to convey through her outfit
            and the massive brush that symbolizes her main passion and craft.
          </Text>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[188px] md:w-[840px] md:h-[510px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/design.png" alt="design" />
          </Box>
        </Stack>

        <Stack className="mt-[30px] md:mt-[70px] gap-[15px] md:gap-[35px]">
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
          <Text className="text-[#A9A9A9] text-xs md:text-base font-normal mx-auto shrink-0 max-w-[310px] md:max-w-[843px]">
            Erene tackles each project with determination and a clear vision,
            but she&apos;s also known for her clumsiness, occasionally spilling
            coffee on her work or tripping over her own feet. Erene&apos;s
            introverted nature is her superpower. It helps her delve deep into
            the creative process, finding inspiration from within herself.
          </Text>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[310px] h-[188px] md:w-[840px] md:h-[510px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/emotions.png" alt="pfp" />
          </Box>
        </Stack>

        <Stack className="mt-[30px] md:mt-[70px] gap-[15px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Journey
          </Text>
          <Text className="text-[#A9A9A9] text-xs md:text-base font-normal mx-auto shrink-0 max-w-[310px] md:max-w-[843px]">
            We are turning everyday moments into slice-of-life series, while
            building a community of anime fans, artists, and people who resonate
            with Erene&apos;s personality.
          </Text>
          <Flex className="mx-auto w-[312px] md:w-[842px] justify-between">
            <Box className="w-[75px] h-[134px] md:w-[162px] md:h-[288px] rounded-[10px] bg-[#D9D9D9]">
              <InstagramEmbed
                url="https://www.instagram.com/reel/CzoKTr3rF-g/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                clientAccessToken={`${app_id}|${access_token}`}
                maxWidth={162}
                hideCaption={true}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
              />
            </Box>
            <Box className="w-[75px] h-[134px] md:w-[162px] md:h-[288px] rounded-[10px] bg-[#D9D9D9]"></Box>
            <Box className="w-[75px] h-[134px] md:w-[162px] md:h-[288px] rounded-[10px] bg-[#D9D9D9]"></Box>
            <Box className="w-[75px] h-[134px] md:w-[162px] md:h-[288px] rounded-[10px] bg-[#D9D9D9]"></Box>
            {!isMobileScreen && (
              <Box className="w-[75px] h-[134px] md:w-[162px] md:h-[288px] rounded-[10px] bg-[#D9D9D9]"></Box>
            )}
          </Flex>
        </Stack>
        <Stack className="mt-[30px] mb-[70px] md:my-[70px] gap-[15px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Follow for more
          </Text>
          <Box
            position={"relative"}
            className="group w-[40px] h-[40px] md:w-[73px] md:h-[73px]"
            margin="auto"
            cursor="pointer"
            onClick={() =>
              router.push("https://www.instagram.com/ereneanimation/")
            }
          >
            <Image
              src="/icons/ig-light.svg"
              fill
              alt="ig-icon"
              className="transition duration-300 group-hover:opacity-0"
            />
            <Image
              src="/icons/ig-dark.svg"
              fill
              alt="ig-icon"
              className="opacity-0 transition duration-300 group-hover:opacity-100"
            />
          </Box>
        </Stack>
      </Stack>
    </Layout>
  );
}
