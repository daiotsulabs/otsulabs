import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import Image from "next/image";

interface WorkItemProps {
  image: string;
  project: string;
  descriptions: string[];
}

function WorkItem({ image, project, descriptions }: WorkItemProps) {
  return (
    <Box className="w-full h-full relative cursor-pointer group/workItem">
      <Image
        fill
        className="rounded-[20px]"
        src={image}
        alt={image}
        style={
          {
            boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.15)",
            objectFit: "cover",
            objectPosition: "center"
          }
        }
        priority
      />
      <Box
        className="absolute inset-0 flex justify-end flex-col font-bold rounded-[20px] transition duration-500 ease-in-out opacity-0 group-hover/workItem:opacity-100"
        px={4}
        py={5}
        bg="linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 88.02%)"
      >
        <Text fontSize={{ base: "2xl" }} color="white">Project: {project}</Text>
        <UnorderedList>
          {descriptions.map((item, index) => (
            <ListItem
              fontSize="10px"
              key={index}
              className="uppercase"
              color="rgba(255,255,255,.5)"
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