"use client";
import { DetailVideoPlayer, Header, Layout, ModalMenu, VideoPlayerMultiple } from "@/components";
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

const CardInfoOverlay = ({ state, onClick, children, character }: any) => {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
  const [isMediumScreen] = useMediaQuery("(max-width: 1513px)");
  return (
    <>
      <Box
        className={`absolute top-[10px] left-[10px] md:top-[20px] md:left-[20px] cursor-pointer w-[14px] h-[14px] md:w-[37px] md:h-[37px] flex items-center justify-center z-[1] ${
          !state ? "bg-[#000000b3] animate-menu-fade" : ""
        } rounded-full`}
        onClick={onClick}
      >
        <Image
          width={isMobileScreen ? 10 : 24}
          height={isMobileScreen ? 10 : 24}
          alt="cancel"
          className={state ? "rotate-45" : ""}
          src="/icons/plus.svg"
        />
      </Box>
      {state && (
        <Box className="absolute w-[108px] md:w-[330px] py-[12px] px-[10px] md:py-[30px] md:px-[26px] top-[10px] left-[10px] md:top-[15px] md:left-[15px] bg-[#010101b3] backdrop-blur-[25px] rounded-[5px] md:rounded-[15px] text-left animate-menu-fade text-[5px] md:text-sm text-[#f5f5f5] md:text-[#f5f5f580]">
          <Text className="text-[10px] md:text-4xl font-bold md:text-white md:mt-[10px]">
            {character}
          </Text>
          {children}
        </Box>
      )}
    </>
  );
};

const CharacterItem = ({ src, alt, className, children, character }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
      <Box
        className={`relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[186px] md:w-[1040px] md:h-[625px] ${className}`}
        boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
      >
        <Image fill src={src} alt={alt} />
        <CardInfoOverlay
          state={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          character={character}
        >
          {children}
        </CardInfoOverlay>
      </Box>
    </Stack>
  );
};

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
        <Box className="flex-1 relative">
          <Image
            src="/images/system-royal.png"
            alt="voyceMe"
            fill
            objectFit="cover"
          />
        </Box>
        <Stack
          className={`w-full h-full absolute text-[#f5f5f5] ${
            isMobileScreen ? "bg-[#01010180]" : "bg-[#010101b3]"
          }`}
        >
          <Box className="w-[238px] md:w-[450px] absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Text
              className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
            >
              VoyceMe - System Royale
            </Text>
            <Text className="text-[10px] md:text-[18px] font-normal md:mt-[15px]">
              VoyceMe is the first social creator platform. It is the home of
              creativity that hosts the highest quality English manga,
              web-comics, and web-novels.
            </Text>
            <Text
              className="text-[8px] md:text-[14px] tracking-[1.5px] uppercase font-normal mt-[10px] md:mt-[25px] cursor-pointer hover:underline"
              onClick={() =>
                router.push("https://www.voyce.me/series/system-royale")
              }
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

      <Stack className="w-full h-auto text-center bg-white text-[#010101] animate-page-fade pt-[22px] md:pt-[60px] gap-[22px] md:gap-[60px] pb-[30px] md:pb-[70px]">
        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Character Design
          </Text>
          <CharacterItem
            src="/images/voyceMe-1.png"
            alt="voyceMe-1"
            character="Avon Young"
          >
            <Text>
              Avon Young is a lanky student with messy black hair and soft green
              eyes. Standing at 5&apos;10&quot; with pale skin, he aspires to
              publish comics and is sponsored by Shakespeare himself.
            </Text>
            <Text className="mt-1 md:mt-[10px]">
              In his journey, Avon gradually emerges from his shell, growing
              more independent and stronger, in contrast to his older brother
              who always basks in the spotlight. Avon&apos;s unique weapons are
              Shakespeare&apos;s quill and tome, guiding him on his challengin
              path.
            </Text>
          </CharacterItem>
          <CharacterItem
            src="/images/voyceMe-2.png"
            alt="voyceMe-2"
            character="Achilles"
          >
            <Text>
              A towering figure in Greek mythology, this hero boasts long,
              blonde hair, green eyes, and a muscular physique.
            </Text>
            <Text className="mt-1 md:mt-[10px]">
              He is famed for his invulnerability, except for his Achilles&apos;
              heel, which led to his downfall. Armed with a spear and shield, he
              played a pivotal role in the Trojan War.
            </Text>
            <Image
              width={274}
              height={166}
              src="/images/voyceMe-2-detail.png"
              alt="voyceMe-2-detail"
              className="mt-1 md:mt-[10px]"
            />
          </CharacterItem>
          <CharacterItem
            src="/images/voyceMe-3.png"
            alt="voyceMe-3"
            character="Jackson"
          >
            <Text>
              With long, grey, unkempt hair and brown eyes, Jackson stands at
              5&apos;11&quot; with a frail, pale complexion. His skinny frame
              tells the story of a hard life on the streets.
            </Text>
            <Text className="mt-1 md:mt-[10px]">
              Armed with an weapon, known as &quot;Lovecraft&apos;s sheet,&quot;
              he&apos;s a homeless addict who has reached rock bottom. His
              relentless obsession to redeem himself in a high-stakes game is
              his sole source of hope in an otherwise bleak existence.
              Jackson&apos;s desperate journey, fueled by desperation and
              ambition, leads to a tragic encounter with Avon and Claude,
              sealing his fate in a dark and unforgiving world.
            </Text>
          </CharacterItem>
          <CharacterItem
            src="/images/voyceMe-4.png"
            alt="voyceMe-4"
            character="Love Craft"
          >
            <Text>
              Renowned for pioneering the horror fiction genre, he wields an
              unconventional weapon: Eldritch magic.
            </Text>
            <Text className="mt-1 md:mt-[10px]">
              Lovecraft&apos;s works are a testament to his unique brand of
              cosmic horror, delving into the insignificance of humanity in the
              face of incomprehensible cosmic forces.
            </Text>
          </CharacterItem>
          <CharacterItem
            src="/images/voyceMe-5.png"
            alt="voyceMe-5"
            character="Claude Young"
          >
            <Text>
              This remarkable college student stands tall at 6&apos;10&quot;
              with short black hair and a distinctive undercut.
            </Text>
            <Text className="mt-1 md:mt-[10px]">
              Sponsored by the Achilles himself, he is the shining star of the
              college baseball team. Despite his dedication, his hero complex
              leads him to constantly seek to protect and rescue others. His
              core motivation, the survival of himself and his brother,
              encourages him to change his approach to life and relationships,
              setting the stage for a compelling journey of self-discovery.
            </Text>
          </CharacterItem>
          <CharacterItem
            src="/images/voyceMe-6.png"
            alt="voyceMe-6"
            character="Shakespeare"
            className="w-[312px] h-[172px] md:w-[1040px] md:h-[575px]"
          >
            <Text>
              One of the greatest figures in English literature and world drama.
              Hailing from Stratford-upon-Avon, England, he was not only a
              playwright but also a renowned poet and actor. His remarkable body
              of work traverses a wide spectrum of themes, emotions, and human
              experiences.
            </Text>
            <Stack className="flex-row mt-1 md:mt-[10px] gap-1 md:gap-2">
              <Image
                width={isMobileScreen ? 37 : 133}
                height={isMobileScreen ? 55 : 197}
                src={"/images/voyceMe-6-detail-1.png"}
                alt="voyceMe-6-detail-1"
              />
              <Image
                width={isMobileScreen ? 37 : 133}
                height={isMobileScreen ? 55 : 197}
                src={"/images/voyceMe-6-detail-2.png"}
                alt="voyceMe-6-detail-2"
              />
            </Stack>
          </CharacterItem>
          <CharacterItem
            src="/images/voyceMe-7.png"
            alt="voyceMe-7"
            character="Cthulhu"
            className="w-[312px] h-[172px] md:w-[1040px] md:h-[575px]"
          >
            <Text>
              Cthulhu is a fictional cosmic entity and a central figure in the
              works of horror writer H.P. Lovecraft. Described as an ancient,
              monstrous being, Cthulhu is often depicted as a mix of an octopus,
              dragon, and human-like features, with a towering and terrifying
              presence. It resides in the sunken city of R&apos;lyeh beneath the
              Pacific Ocean, in a deep slumber waiting to awaken.
            </Text>
            <Image
              width={278}
              height={177}
              src="/images/voyceMe-7-detail.png"
              alt="voyceMe-7-detail"
              className="mt-1 md:mt-[10px]"
            />
          </CharacterItem>
        </Stack>

        <Stack className="gap-[10px] md:gap-[35px]">
          <Text
            className={`${mcQueenDisplay.className} text-xl md:text-4xl font-medium`}
          >
            Environment Design
          </Text>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[164px] md:w-[1040px] md:h-[550px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-8.png" alt="voyceMe-8" />
          </Box>
          <Stack direction="row" className="mx-auto gap-[5px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[138px] h-[97px] md:w-[446px] md:h-[314px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-9.png" alt="voyceMe-9" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[169px] h-[97px] md:w-[558px] md:h-[314px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-10.png" alt="voyceMe-10" />
            </Box>
          </Stack>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[164px] md:w-[1040px] md:h-[550px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-11.png" alt="voyceMe-11" />
          </Box>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[90px] md:w-[502px] md:h-[300px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-12.png" alt="voyceMe-12" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[90px] md:w-[502px] md:h-[300px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-13.png" alt="voyceMe-13" />
            </Box>
          </Stack>
          <Stack direction="row" className="mx-auto gap-[10px] md:gap-[35px]">
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[90px] md:w-[502px] md:h-[300px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-14.png" alt="voyceMe-14" />
            </Box>
            <Box
              className="relative bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[151px] h-[90px] md:w-[502px] md:h-[300px]"
              boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
            >
              <Image fill src="/images/voyceMe-15.png" alt="voyceMe-15" />
            </Box>
          </Stack>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[164px] md:w-[1040px] md:h-[550px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-16.png" alt="voyceMe-16" />
          </Box>
          <Box
            className="relative mx-auto bg-white rounded-[10px] md:rounded-[30px] overflow-hidden w-[312px] h-[164px] md:w-[1040px] md:h-[550px]"
            boxShadow="0px 24px 48px 0px rgba(16, 24, 40, 0.12)"
          >
            <Image fill src="/images/voyceMe-17.png" alt="voyceMe-17" />
          </Box>
        </Stack>
      </Stack>
      <Box className="w-full h-[219px] md:h-screen">
        {/* <DetailVideoPlayer
          src="/videos/system-royal.mp4"
          poster="/images/system-royal.png"
          name="system-royale"
        /> */}
        <VideoPlayerMultiple 
          srcs={[
            "/videos/system-royal.mp4",
            "/videos/voyceme.mp4",
          ]}
          poster="/images/system-royal.png"
          name="system-royale"
        />
      </Box>
    </Layout>
  );
}
