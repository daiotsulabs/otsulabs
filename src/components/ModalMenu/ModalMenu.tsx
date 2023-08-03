import { Box, Button, Divider, ButtonProps, Slide, SlideProps, Stack, Text, useMediaQuery, SlideFade } from "@chakra-ui/react"
import { Header } from "../Header";
import { TwitterIcon } from "../icons";
import { useRouter } from "next/navigation";

interface MenuButtonProps extends ButtonProps {
  dark?: boolean;
}

const MenuButton = ({ children, dark, ...props }: MenuButtonProps) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')

  return (
    <Button
      color={
        dark && isMobileScreen
          ? "white"
          : dark
            ? "rgba(255, 255, 255, 0.40)"
            : isMobileScreen
              ? "black"
              : "rgba(0, 0, 0, 0.40)"
      }
      _hover={{
        color: dark ? "white" : "black"
      }}
      variant="unstyled"
      fontSize={isMobileScreen ? "2xl" : "5xl"}
      cursor="pointer"
      h={isMobileScreen ? "unset" : "60px"}
      letterSpacing={4}
      {...props}
    >
      {children}
    </Button>
  )
}

interface ModalMenuProps extends SlideProps {
  showBg?: boolean;
  onClickToggle: () => void;
}

function ModalMenu({ showBg, onClickToggle, ...props }: ModalMenuProps) {
  const router = useRouter();
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  const onClickMenuButton = (route: string) => {
    router.push(route);
  }
  return (
    <SlideFade style={{ zIndex: 10, position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }} {...props}>
      <Box
        position="relative"
        className="w-full h-full"
        bgImage={showBg ? "/images/landing-home.png" : "unset"}
        bgSize="cover"
        backgroundPosition="center"
        zIndex={10}
      >
        <Header
          isCancelIcon={true}
          showMenuItem={false}
          activeSlideIndex={0}
          onClickToggle={onClickToggle}
          dark={!showBg}
        />
        <Box
          className={`w-full h-full flex items-center ${isMobileScreen ? "flex-start" : "justify-center"}`}
          background={showBg ? "rgba(0, 0, 0, 0.60)" : "white"}
          backdropFilter="blur(15px)"
        >
          <Stack
            direction={isMobileScreen ? "column" : "row"}
            alignItems={isMobileScreen ? "flex-start" : "center"}
            px={25}
            w={"100%"}
          >
            <Box
              w={isMobileScreen ? "auto" : "50%"}
              pr={isMobileScreen ? 0 : 120}
              display={isMobileScreen ? "unset" : "flex"}
              justifyContent={isMobileScreen ? "unset" : "flex-end"}
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                gap={isMobileScreen ? "32px" : "54px"}
              >
                <MenuButton order={1} dark={showBg} onClick={() => onClickMenuButton('/about')}>ABOUT</MenuButton>
                <MenuButton order={2} dark={showBg} onClick={() => onClickMenuButton('/careers')}>CAREERS</MenuButton>
                <MenuButton order={3} dark={showBg} onClick={() => onClickMenuButton('/contact')}>CONTACT</MenuButton>
                <MenuButton order={isMobileScreen ? 0 : 4} dark={showBg}>
                  <TwitterIcon fill={showBg ? "white" : "black"} />
                </MenuButton>
              </Stack>
            </Box>
            <Divider
              width="2px"
              borderColor={showBg ? "rgba(255,255,255,0.4)" : isMobileScreen ? "black" : "rgba(0,0,0,.4)"}
              h={isMobileScreen ? 0 : 660}
              w={isMobileScreen ? 245 : 0}
              orientation={isMobileScreen ? "horizontal" : "vertical"}
              mt={isMobileScreen ? 54 : 0}
              borderLeftWidth={2}
            />
            <Stack
              fontSize="sm"
              color={showBg ? "#ccc" : "black"}
              direction="column"
              maxW={377}
              gap={22}
              mt={isMobileScreen ? 2 : 0}
              pl={isMobileScreen ? 0 : 120}
            >
              <Box
                color={
                  showBg && isMobileScreen
                    ? "rgba(255,255,255,0.6)"
                    : showBg
                      ? "white"
                      : isMobileScreen
                        ? "rgba(0,0,0,0.6)"
                        : "black"
                }
                fontSize={isMobileScreen ? "xs" : "xl"}
                maxW={isMobileScreen ? 244 : "100%"}
              >
                Animators, artists, storytellers, content creators, and just weebs.
              </Box>
              <Box>
                <Text fontWeight="bold" fontSize={isMobileScreen ? "2xl" : "sm"}>Locations</Text>
                <Text w={136} fontSize={isMobileScreen ? "xs" : "sm"}>Ho Chi Minh, Vietnam Seoul, South Korea</Text>
              </Box>
              <Box>
                {isMobileScreen
                  ? <Text fontSize="8px">© 2023 Otsu Labs Inc. All Rights Reserved.</Text>
                  : <>
                    <Text fontWeight="bold">Contact</Text>
                    <Text>hello@otsulabs.com</Text>
                  </>
                }
              </Box>
            </Stack>
          </Stack>
        </Box>
        {!isMobileScreen && <Box
          className="absolute"
          bottom={25}
          fontSize="xs"
          left="50%"
          transform="translateX(-50%)"
          color={showBg ? "#ccc" : "black"}>
          © 2023 Otsu Labs Inc. All Rights Reserved.
        </Box>}
      </Box>
    </SlideFade>
  )
}

export { ModalMenu }