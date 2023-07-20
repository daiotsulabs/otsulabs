import { Box, Stack, useMediaQuery } from "@chakra-ui/react"

function StyledPagination({
  dark,
  activeIndex,
  total
}: { dark?: boolean, activeIndex?: number, total: number }) {
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')

  return (
    <Stack
      direction="column"
      className={`fixed z-[2] ${isMobileScreen ? "bottom-[70px] left-4" : "top-1/2 left-[30px] translate-y-[-50%]"} `}
      gap={isMobileScreen ? "8px" : "20px"}
    >
      {[...new Array(total)].map((_, index) => (
        <Box
          key={index}
          className="flex items-center justify-center rounded-full"
          w={3}
          h={3}
          borderWidth="1px"
          borderColor={
            dark && activeIndex === index
              ? "black"
              : activeIndex === index
                ? "white"
                : "transparent"
          }
        >
          <Box
            w={1.5}
            h={1.5}
            bgColor={dark ? "black" : "white"}
            className="rounded-full" />
        </Box>
      ))}
    </Stack>
  )
}

export { StyledPagination }