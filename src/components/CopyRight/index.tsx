import { Box, useMediaQuery } from '@chakra-ui/react'

export default function CopyRight ({ showBg, bottom = 25 }: { showBg?: boolean, bottom?: number }) {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return(
    <>
      {!isMobileScreen && <Box
          className="absolute"
          bottom={bottom}
          fontSize="xs"
          left="50%"
          transform="translateX(-50%)"
          color={showBg ? "#ccc" : "black"}>
          © 2023 Otsu Labs Inc. All Rights Reserved.
        </Box>}
    </>
  )
}
