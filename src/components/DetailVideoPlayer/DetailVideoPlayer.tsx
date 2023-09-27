import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const DetailVideoPlayer = ({
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
              filter: "brightness(0.5)"
            }}
            priority
            className="z-[10]"
          />
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
        className="w-full h-full object-cover z-[4]"
      >
        <source src={src} type="video/mp4" />
      </video>
    </Box>
  );
};
