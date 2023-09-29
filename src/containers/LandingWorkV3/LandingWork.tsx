import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import styled from "@emotion/styled";
import { mcQueenDisplay } from "@/app/layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "swiper/css/effect-cards";
import "swiper/css";
import { WorkItem } from "@/components";

const landingWorkImages = [
  {
    src: "/images/Conviction.png",
    project: "Conviction",
    url: "/conviction",
  },
  {
    src: "/images/AlexH.png",
    project: "Alex Hugh",
    url: "/alexhugh",
  },
  {
    src: "/images/on1forces.png",
    project: "0N1 FORCE",
    url: "/on1forces",
  },
  {
    src: "/images/MusicFrens.png",
    project: "Music Frens",
    url: "/musicfrens",
  },
];

const landingWorkVideos = [
  { src: "/videos/conviction.mp4" },
  { src: "/videos/alexh.mp4" },
  { src: "/videos/on1forces.mp4" },
  { src: "/videos/musicfrens.mp4" },
];

const VideoPlayer = ({
  src,
  poster,
  name,
}: {
  src: string;
  poster: string;
  name: string;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentInstace = videoRef.current;
    currentInstace?.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    return () => currentInstace?.pause();
  }, [videoRef]);

  return (
    <Box className="w-full h-full relative cursor-pointer group/workItem z-[11]">
      {!isPlaying && (
        <>
          <Image
            fill
            src={poster}
            alt={name}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
            className="z-[10] brightness-50"
          />
          <Text
            className={`${mcQueenDisplay.className} left-9 bottom-6 font-medium text-4xl absolute z-10`}
            color="#f5f5f5"
          >
            {name}
          </Text>
          <Image
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play();
                setIsPlaying(true);
              }
            }}
            width={55}
            height={55}
            alt="play"
            src="icons/play.svg"
            className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-10"
          />
        </>
      )}
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        controls
        className="w-full h-full object-cover rounded-[32px] z-[4]"
      >
        <source src={src} type="video/mp4" />
      </video>
    </Box>
  );
};

const DesktopContent = () => {
  const [currenIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<any>(null);
  const router = useRouter();

  const handleClickDetail = () => {
    const link =
      currenIndex === 0
        ? "/conviction"
        : currenIndex === 1
        ? "/alexhugh"
        : currenIndex === 2
        ? "/on1forces"
        : "/musicfrens";
    router.push(link);
  };

  return (
    <Box
      className="w-full h-full"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className="relative text-[#f5f5f5]">
        <Swiper
          ref={sliderRef}
          nested={true}
          effect="cards"
          direction="vertical"
          cardsEffect={{
            perSlideOffset: 12,
            rotate: false,
          }}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[940px] h-[529px] relative"
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
        >
          {landingWorkImages.map((project, index) => (
            <StyledSlide className="rounded-[32px]" key={index}>
              <VideoPlayer
                src={landingWorkVideos[index].src}
                poster={project.src}
                name={project.project}
              />
            </StyledSlide>
          ))}
        </Swiper>
        <Stack
          direction="column"
          justifyContent="space-between"
          className="absolute z-[1] w-[100px] h-[109px] -right-[115px] tracking-[1.2px] uppercase font-normal top-1/2 -translate-y-2/4"
        >
          {landingWorkImages.map((project, index) => (
            <Box
              key={index}
              className={`text-xs ${
                currenIndex === index ? "opacity-100" : "opacity-40"
              } duration-75 ease-in-out transition-all cursor-pointer`}
              onClick={() => {
                if (sliderRef.current) {
                  sliderRef.current?.swiper.slideTo(index);
                }
              }}
            >
              {project.project}
            </Box>
          ))}
        </Stack>
        <Box
          onClick={handleClickDetail}
          className="absolute uppercase text-xs tracking-[1.2px] cursor-pointer -bottom-[110px] left-1/2 -translate-x-1/2 hover:underline"
        >
          learn more
        </Box>
      </Box>
    </Box>
  );
};

const MobileContent = () => {
  const router = useRouter();
  return (
    <Box
      className="w-full h-auto bg-black relative"
      zIndex={9}
      px={10}
      pt={"30px"}
    >
      <Stack direction="column" gap="15px">
        {landingWorkImages.map((project, index) => (
          <Box
            onClick={() => router.push(project.url)}
            key={index}
            w="100%"
            h={128}
            maxH={"calc(20vh - 38px)"}
          >
            <WorkItem image={project.src} project={project.project} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

function LandingWorkV3() {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
  if (isMobileScreen) {
    return <MobileContent />;
  }
  return <DesktopContent />;
}

const StyledSlide = styled(SwiperSlide)`
  & .swiper-slide-shadow {
    background: rgba(0, 0, 0, 0.5) !important;
  }
`;

export { LandingWorkV3 };
