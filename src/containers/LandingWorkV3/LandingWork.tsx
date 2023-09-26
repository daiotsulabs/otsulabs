import { Box, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import styled from "@emotion/styled";
import { mcQueenDisplay } from "@/app/layout";
import Image from "next/image";
import "swiper/css/effect-cards";
import "swiper/css";

const landingWorkImages = [
  {
    src: "/images/Conviction.png",
    project: "Conviction",
  },
  {
    src: "/images/AlexH.png",
    project: "Alex Hugh",
  },
  {
    src: "/images/on1forces.png",
    project: "0NE1 FORCE",
  },
  {
    src: "/images/MusicFrens.png",
    project: "Music Frens",
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
    <Box
      onClick={() => {
        console.log("clicked");
      }}
      className="w-full h-full relative cursor-pointer group/workItem z-[11]"
    >
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
            className="z-[10]"
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
  return (
    <Box
      className="w-full h-full"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgImage={`url("/images/noise.png")`}
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
        <Box className="absolute uppercase text-xs tracking-[1.2px] cursor-pointer -bottom-[110px] left-1/2 -translate-x-1/2">
          learn more
        </Box>
      </Box>
    </Box>
  );
};

// const MobileContent = () => {
//   const [activeIndex, setActiveIndex] = useState(-1);
//   return (
//     <>
//       <Box
//         className="w-full h-full bg-black relative"
//         zIndex={9}
//         px={6}
//         pt={"60px"}
//       >
//         <Stack direction="column">
//           {landingWorkImages.map((project, index) => (
//             <Box
//               onClick={() => setActiveIndex(index)}
//               key={index}
//               w="100%"
//               h={128}
//               maxH={"calc(20vh - 38px)"}
//             >
//               <WorkItem
//                 border={false}
//                 image={project.src}
//                 project={project.project}
//               />
//             </Box>
//           ))}
//         </Stack>
//       </Box>
//       {activeIndex >= 0 && (
//         <SlideFade
//           in={activeIndex >= 0}
//           className="bg-black px-6 pt-[60px]"
//           style={{
//             zIndex: 10,
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//           }}
//         >
//           <Stack direction="column" className="items-center pt-[140px]">
//             <Box className="font-bold text-xs text-[#f5f5f5] mb-[16px]">
//               {landingWorkImages[activeIndex].project}
//             </Box>
//             <Box w={"100%"} h="193px" className="relative">
//               <Box className="absolute inset-0">
//                 <VideoPlayer
//                   src={landingWorkVideos[activeIndex].src}
//                   poster={landingWorkImages[activeIndex].src}
//                 />
//               </Box>
//             </Box>
//             <Stack
//               mt={11}
//               justifyContent="flex-start"
//               direction="row"
//               fontSize={"10px"}
//               color="#707070"
//               letterSpacing={1.2}
//               textTransform="uppercase"
//               gap={"10px"}
//               alignItems="center"
//             >
//               <Box>{landingWorkImages[activeIndex].project}</Box>
//               <Divider height={"10px"} orientation="vertical" />
//               <Box>{landingWorkImages[activeIndex].date}</Box>
//               <Divider height={"10px"} orientation="vertical" />
//               <Box>{landingWorkImages[activeIndex].description}</Box>
//               <Button
//                 style={{
//                   background: "#ffffff",
//                   color: "#000000",
//                   fontSize: "12px",
//                   fontWeight: "normal",
//                 }}
//                 className="absolute bottom-[85px] left-1/2 -translate-x-1/2 rounded-full"
//                 variant="outline"
//                 height={35}
//                 w={"96px"}
//                 onClick={() => setActiveIndex(-1)}
//               >
//                 Back
//               </Button>
//             </Stack>
//           </Stack>
//         </SlideFade>
//       )}
//     </>
//   );
// };

function LandingWorkV3() {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
  // if (isMobileScreen) {
  //   return <MobileContent />;
  // }
  return <DesktopContent />;
}

const StyledSlide = styled(SwiperSlide)`
  & .swiper-slide-shadow {
    background: rgba(0, 0, 0, 0.5) !important;
  }
`;

export { LandingWorkV3 };
