import {
  Box,
  Button,
  ButtonProps,
  SlideProps,
  Stack,
  Text,
  useMediaQuery,
  SlideFade,
  Img,
} from "@chakra-ui/react";
import { Header } from "../Header";
import { useRouter } from "next/navigation";
import { mcQueenDisplay } from "@/app/layout";

interface MenuButtonProps extends ButtonProps {
  dark?: boolean;
  className?: string;
}

const MenuButton = ({
  children,
  dark,
  className,
  ...props
}: MenuButtonProps) => {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");

  return (
    <Button
      color="#f7f7f7"
      opacity={0.4}
      _hover={{
        opacity: 1,
      }}
      className={`${className} ${mcQueenDisplay.className} text-4xl font-[600]`}
      variant="unstyled"
      cursor="pointer"
      h={isMobileScreen ? "unset" : "54px"}
      {...props}
    >
      {children}
    </Button>
  );
};

const SocialButton = ({ children, ...props }: ButtonProps) => {
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");

  return (
    <Button
      color={"#707070"}
      _hover={{
        color: "#f7f7f7",
      }}
      className={`animate-menu-fade transition-opacity delay-[900ms] text-[15px] font-normal tracking-[1.5px] uppercase`}
      variant="unstyled"
      cursor="pointer"
      h={isMobileScreen ? "unset" : "20px"}
      {...props}
    >
      {children}
    </Button>
  );
};

interface ModalMenuProps extends SlideProps {
  showBg?: boolean;
  onClickToggle: () => void;
}

function ModalMenu({ showBg, onClickToggle, ...props }: ModalMenuProps) {
  const router = useRouter();
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
  const onClickMenuButton = (route: string) => {
    onClickToggle();
    router.push(route);
  };
  return (
    <SlideFade
      style={{
        zIndex: 19,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      {...props}
    >
      <Box
        position="relative"
        className="w-full h-screen"
        bgSize="cover"
        backgroundPosition="center"
        zIndex={10}
        background={showBg ? "#010101" : "#1D1E22"}
      >
        {/* {!showBg && <Box className="bg-noise" />} */}
        <Header
          isCancelIcon={true}
          showMenuItem={false}
          activeSlideIndex={0}
          onClickToggle={onClickToggle}
          customClassName="bg-transparent backdrop-blur-none"
        />
        <Box
          className={`w-full h-full flex items-center ${
            isMobileScreen ? "flex-start" : "justify-center"
          }`}
          margin="auto"
          padding={isMobileScreen ? "0 44px" : "0"}
          backdropFilter={showBg ? "blur(8px)" : "none"}
        >
          <Stack
            direction={isMobileScreen ? "column" : "row"}
            alignItems={isMobileScreen ? "flex-start" : "center"}
            justifyContent="space-between"
            w={"100%"}
            className="md:px-[250px]"
          >
            <Box
              display={isMobileScreen ? "unset" : "flex"}
              justifyContent={isMobileScreen ? "unset" : "flex-end"}
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                gap={isMobileScreen ? 4 : "30px"}
              >
                <MenuButton
                  dark={true}
                  onClick={() => onClickMenuButton("/about")}
                >
                  About
                </MenuButton>
                <MenuButton
                  dark={true}
                  onClick={() => onClickMenuButton("/work")}
                >
                  Work
                </MenuButton>
                <MenuButton
                  dark={true}
                  onClick={() => onClickMenuButton("/careers")}
                >
                  Careers
                </MenuButton>
                <MenuButton
                  className="relative group hover:cursor-fun"
                  dark={true}
                  onClick={() => onClickMenuButton("/funtime")}
                >
                  Fun Time
                </MenuButton>
              </Stack>
            </Box>
            <Stack
              fontSize="sm"
              color={"#707070"}
              direction="column"
              maxW={377}
              gap={isMobileScreen ? 1.5 : "36px"}
              className="mt-11 md:mt-0"
            >
              <Box>
                <Text
                  color="#f5f5f5"
                  className={`animate-menu-fade transition-opacity delay-[1500ms] text-xs md:text-xl font-medium ${mcQueenDisplay.className} leading-6`}
                  mb={isMobileScreen ? 0 : 1.5}
                >
                  Based In
                </Text>
                <Text
                  className="animate-menu-fade transition-opacity delay-[1700ms]"
                  w={127}
                  fontSize={isMobileScreen ? "xs" : "sm"}
                >
                  Saigon, Vietnam
                </Text>
                <Text
                  className="animate-menu-fade transition-opacity delay-[1900ms]"
                  w={127}
                  fontSize={isMobileScreen ? "xs" : "sm"}
                >
                  Seoul, South Korea
                </Text>
              </Box>
              {/* {!isMobileScreen && (
                <Stack direction="column" alignItems="flex-start" gap="5px">
                  <Text
                    color="#f5f5f5"
                    className={`animate-menu-fade transition-opacity delay-[1800ms] text-xl font-medium ${mcQueenDisplay.className} leading-6`}
                  >
                    Socials
                  </Text>
                  <SocialButton
                    onClick={() => router.push("https://twitter.com/OtsuLabs")}
                  >
                    twitter
                  </SocialButton>
                  <SocialButton>tiktok</SocialButton>
                  <SocialButton>youtube</SocialButton>
                </Stack>
              )} */}
            </Stack>
          </Stack>
        </Box>
        <Box
          className="absolute text-xs text-[15px]"
          bottom={25}
          left="50%"
          transform="translateX(-50%)"
          color={"#707070"}
        >
          © 2023 Otsu Labs
        </Box>
      </Box>
    </SlideFade>
  );
}

export { ModalMenu };
