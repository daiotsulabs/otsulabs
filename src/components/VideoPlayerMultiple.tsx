import { Box, Button, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VideoPlayerMultiple = ({
  srcs,
  poster,
  name,
}: {
  srcs: string[];
  poster: string;
  name: string;
}) => {
  const [currentActive, setCurrentActive] = useState<number>(1);
  const [sourcePlay, setSourcePlay] = useState<string>(srcs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const currentInstace = videoRef.current;
    currentInstace?.addEventListener("ended", () => {
      setIsPlaying(false);
    });
    currentInstace?.addEventListener("pause", () => {
      setIsPlaying(false);
    });
    return () => currentInstace?.pause();
  }, [videoRef]);

  const handleSelectTrailer = (index: number) => {
    if (index === currentActive) {
      videoRef.current?.play();
    } else if (videoRef.current) {
      videoRef.current.src = srcs[index];
      videoRef.current.load();
      videoRef.current.play();
      setCurrentActive(index);
    }
    setIsPlaying(true);
  };

  return (
    <Box
      onClick={() => {
        if (isPlaying) {
          setIsPlaying(false);
        }
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
              filter: "brightness(0.5)",
            }}
            priority
            className="z-[10]"
          />
          <Stack
            direction="row"
            className="gap-6 md:gap-11 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-10"
          >
            <Button
              onClick={() => handleSelectTrailer(0)}
              className="text-xs md:text-lg font-normal rounded-full bg-white md:px-[34px]"
            >
              Trailer 1
            </Button>
            <Button
              onClick={() => handleSelectTrailer(1)}
              className="text-xs md:text-lg font-normal rounded-full bg-white md:px-[34px]"
            >
              Trailer 2
            </Button>
          </Stack>
          {/* <Image
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
          /> */}
        </>
      )}
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        controls
        className="w-full h-full object-cover z-[4]"
      >
        <source src={sourcePlay} type="video/mp4" />
      </video>
    </Box>
  );
};

export { VideoPlayerMultiple };
