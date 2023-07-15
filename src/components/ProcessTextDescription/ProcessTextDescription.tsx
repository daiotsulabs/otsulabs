import { Box, BoxProps } from "@chakra-ui/react"

interface IProps extends BoxProps {
}

function ProcessTextDescription({ children, ...props }: IProps) {
  return (
    <Box
      w={180}
      className="absolute"
      textAlign="center"
      fontFamily="Grand Rainbow Demo"
      {...props}
    >
      {children}
    </Box>
  )
}

export { ProcessTextDescription }