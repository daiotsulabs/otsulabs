import { mcQueenDisplay } from "@/app/layout";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

interface WorkItemProps {
  image: string;
  project: string;
  onClick?: () => void;
}

function WorkItem({ image, project, onClick }: WorkItemProps) {
  return (
    <Box onClick={onClick} className="w-full h-full relative">
      <Image
        fill
        src={image}
        alt={image}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(0.5)",
        }}
        priority
        className="rounded-[10px]"
      />
      <Text
        className={`absolute bottom-4 left-5 font-medium text-xl text-[#f5f5f5] ${mcQueenDisplay.className}`}
      >
        {project}
      </Text>
    </Box>
  );
}

export { WorkItem };
