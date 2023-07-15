import { Box, Button, Divider, ButtonProps, Slide, SlideProps, Stack, Text } from "@chakra-ui/react"
import { Header } from "../Header";
import { TwitterIcon } from "../icons";
import { useRouter } from "next/navigation";

interface MenuButtonProps extends ButtonProps {
  dark?: boolean;
}

const MenuButton = ({ children, dark, ...props }: MenuButtonProps) => {
  return (
    <Button
      color={dark ? "rgba(255, 255, 255, 0.40)" : "rgba(0, 0, 0, 0.40)"}
      _hover={{
        color: dark ? "white" : "black"
      }}
      variant="unstyled"
      fontSize="5xl"
      cursor="pointer"
      h="60px"
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
  const onClickAboutMenu = () => {
    router.push("/about");
  }
  return (
    <Slide direction="right" style={{ zIndex: 10 }} {...props}>
      <Box
        position="relative"
        className="w-full h-full"
        bgImage={showBg ? "/images/landing-home.png" : "unset"}
        bgSize="cover"
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
          className="w-full h-full flex items-center justify-center"
          background={showBg ? "rgba(0, 0, 0, 0.60)" : "white"}
          backdropFilter="blur(15px)"
        >
          <Stack direction="row" gap={120} alignItems="center">
            <Stack direction="column" alignItems="flex-start" gap="54px">
              <MenuButton dark={showBg} onClick={onClickAboutMenu}>ABOUT</MenuButton>
              <MenuButton dark={showBg}>CAREERS</MenuButton>
              <MenuButton dark={showBg}>CONTACT</MenuButton>
              <MenuButton dark={showBg}>
                <TwitterIcon fill={showBg ? "white" : "black"} />
              </MenuButton>
            </Stack>
            <Divider width="2px" background={showBg ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,.4)"} h={320} orientation="vertical" />
            <Stack fontSize="sm" color={showBg ? "#ccc" : "black"} direction="column" maxW={377} gap={22}>
              <Box
                color={showBg ? "white" : "black"}
                fontSize="xl"
              >
                Animators, artists, storytellers, content creators, and just weebs.
              </Box>
              <Box>
                <Text fontWeight="bold">Locations</Text>
                <Text w={136}>Ho Chi Minh, Vietnam Seoul, South Korea</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Contact</Text>
                <Text>hello@otsulabs.com</Text>
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
          color={showBg ? "#ccc" : "black"}>
          © 2023 Otsu Labs Inc. All Rights Reserved.
        </Box>
      </Box>
    </Slide>
  )
}

export { ModalMenu }