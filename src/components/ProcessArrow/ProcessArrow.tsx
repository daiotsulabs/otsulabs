import { Box, BoxProps } from "@chakra-ui/react"
import Image from "next/image"

interface IProps extends BoxProps {
  imageSrc?: string;
  widthImage?: number | string;
  heightImage?: number | string;
}

function ProcessArrow({ imageSrc = "arrow-1", widthImage = 118, heightImage = 86, ...props }: IProps) {
  return (
    <Box className="absolute" {...props}>
      <Box className="relative" w={widthImage} h={heightImage}>
        <Image
          src={`/icons/${imageSrc}.svg`}
          alt="arrow"
          fill
          priority
        />
      </Box>
    </Box>
  )
}

export { ProcessArrow }