import { Box, BoxProps } from "@chakra-ui/react"
import Image from "next/image"

interface IProps extends BoxProps {
  imageSrc?: string;
}

function ProcessArrow({ imageSrc = "arrow-1", ...props }: IProps) {
  return (
    <Box className="absolute" {...props}>
      <Image
        src={`/icons/${imageSrc}.svg`}
        alt="arrow"
        width={118}
        height={86}
        priority
      />
    </Box>
  )
}

export { ProcessArrow }