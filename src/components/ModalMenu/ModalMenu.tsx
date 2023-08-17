import { Box, Button, ButtonProps, SlideProps, Stack, Text, useMediaQuery, SlideFade } from "@chakra-ui/react"
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
      letterSpacing={10}
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
        // bgImage={showBg ? "/images/landing-home.png" : "unset"}
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
          padding={isMobileScreen ? "0 44px" : "0"}
          background={showBg ? "rgba(0, 0, 0, 0.60)" : "black"}
          backdropFilter="blur(15px)"
        >
          <Stack
            direction={isMobileScreen ? "column" : "row"}
            alignItems={isMobileScreen ? "flex-start" : "center"}
            justifyContent="center"
            gap={isMobileScreen ? 45 : 440}
            w={"100%"}
          >
            <Box
              display={isMobileScreen ? "unset" : "flex"}
              justifyContent={isMobileScreen ? "unset" : "flex-end"}
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                gap={isMobileScreen ? "32px" : "30px"}
              >
                <MenuButton dark={true} onClick={() => onClickMenuButton('/about')}>ABOUT</MenuButton>
                <MenuButton dark={true} onClick={() => onClickMenuButton('/careers')}>CAREERS</MenuButton>
                <MenuButton dark={true} onClick={() => onClickMenuButton('/contact')}>CONTACT</MenuButton>
                <MenuButton dark={true}>
                  <TwitterIcon opacity={.4} fill={"#f5f5f5"} width={34} height={32} />
                </MenuButton>
              </Stack>
            </Box>
            <Stack
              fontSize="sm"
              color={"#707070"}
              direction="column"
              maxW={377}
              gap={isMobileScreen ? 6 : "36px"}
            >
              <Box>
                <Text
                  fontWeight="bold"
                  color="#f7f7f7"
                  textTransform="uppercase"
                  fontSize={"xs"}
                  mb={isMobileScreen ? 0 : 15}>
                  Based in
                </Text>
                <Text w={136} fontSize={isMobileScreen ? "xs" : "sm"}>Saigon, Vietnam Seoul, South Korea</Text>
              </Box>
              <Box>
                <Text
                  fontWeight="bold"
                  color="#f7f7f7"
                  textTransform="uppercase"
                  fontSize={"xs"}
                  mb={isMobileScreen ? 0 : 15}>Get in touch</Text>
                <Text fontSize={isMobileScreen ? "xs" : "sm"}>hello@otsulabs.com</Text>
              </Box>
            </Stack>
          </Stack>
        </Box>
        <Box
          className="absolute"
          bottom={25}
          fontSize="xs"
          left="50%"
          transform="translateX(-50%)"
          color={"#707070"}>
          © Otsu Labs 2023
        </Box>
      </Box>
    </SlideFade>
  )
}

export { ModalMenu }