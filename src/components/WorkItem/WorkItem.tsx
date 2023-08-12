import { Box, Text, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image";

interface WorkItemProps {
  image: string;
  project: string;
  border?: boolean;
}

function WorkItem({ image, project, border = true }: WorkItemProps) {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)")
  return (
    <Box className="w-full h-full relative cursor-pointer group/workItem" borderWidth={.5} borderColor={border ? "#f5f5f5" : "transparent"} >
      <Image
        fill
        src={image}
        alt={image}
        style={
          {
            boxShadow: isMobileScreen ? "unset" : "0px 10px 30px 0px rgba(0, 0, 0, 0.15)",
            objectFit: "cover",
            objectPosition: "center"
          }
        }
        priority
      />
      <Box
        className={`absolute inset-0 font-bold transition duration-500 ease-in-out opacity-0 group-hover/workItem:opacity-100 ${isMobileScreen && "opacity-100"}`}
        bg={isMobileScreen ? "transparent" : "rgba(0, 0, 0, 0.80)"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        h={"100%"}
      >
        <Text
          fontSize={{ base: "md", sm: "2xl" }}
          color="white"
          letterSpacing={isMobileScreen ? 0.64 : 0.96}
        >
          {isMobileScreen ? "" : project}
        </Text>
      </Box>
    </Box>
  )
}

export { WorkItem }