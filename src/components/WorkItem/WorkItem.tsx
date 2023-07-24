import { Box, ListItem, Text, UnorderedList, useMediaQuery } from "@chakra-ui/react"
import Image from "next/image";

interface WorkItemProps {
  image: string;
  project: string;
  descriptions: string[];
}

function WorkItem({ image, project, descriptions }: WorkItemProps) {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)")
  return (
    <Box className="w-full h-full relative cursor-pointer group/workItem">
      <Image
        fill
        className="rounded-[20px]"
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
        className={`absolute inset-0 flex justify-end flex-col font-bold transition duration-500 ease-in-out opacity-0 group-hover/workItem:opacity-100 ${isMobileScreen && "opacity-100"}`}
        px={4}
        py={5}
        rounded="20px"
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 88.02%)"
      >
        <Text
          fontSize={{ base: "md", sm: "2xl" }}
          color="white"
          letterSpacing={isMobileScreen ? 0.64 : 0.96}
        >
          Project: {project}
        </Text>
        <UnorderedList>
          {descriptions.map((item, index) => (
            <ListItem
              fontSize={isMobileScreen ? "8px" : "10px"}
              key={index}
              className="uppercase"
              color="rgba(255,255,255,.5)"
              letterSpacing={isMobileScreen ? 0.8 : 1}
            >
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  )
}

export { WorkItem }