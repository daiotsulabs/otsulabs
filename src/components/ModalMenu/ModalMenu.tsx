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
        color: dark ? "#f7f7f7" : "black",
      }}
      className={`${className} animate-menu-fade transition-opacity delay-[900ms] ${mcQueenDisplay.className} text-4xl font-bold`}
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
        zIndex: 10,
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
        className="w-full h-full"
        bgSize="cover"
        backgroundPosition="center"
        zIndex={10}
        background={showBg ? "rgba(0, 0, 0, 0.60)" : "black"}
        backgroundImage={showBg ? "none" : "url(/images/noise.png)"}
      >
        <Header
          isCancelIcon={true}
          showMenuItem={false}
          activeSlideIndex={0}
          onClickToggle={onClickToggle}
        />
        <Box
          className={`w-full h-full flex items-center ${
            isMobileScreen ? "flex-start" : "justify-center"
          }`}
          maxW={isMobileScreen ? "100%" : "1440px"}
          margin="auto"
          padding={isMobileScreen ? "0 44px" : "0"}
          backdropFilter="blur(8px)"
        >
          <Stack
            direction={isMobileScreen ? "column" : "row"}
            alignItems={isMobileScreen ? "flex-start" : "center"}
            justifyContent="space-between"
            w={"100%"}
            className="px-[250px]"
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
                <MenuButton
                  dark={true}
                  onClick={() => onClickMenuButton("/about")}
                >
                  About
                </MenuButton>
                <MenuButton
                  dark={true}
                  onClick={() => onClickMenuButton("/about")}
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
                  className="relative group"
                  dark={true}
                  onClick={() => onClickMenuButton("/funtime")}
                >
                  Fun Time
                  <Img
                    width="40px"
                    height="40px"
                    src="/images/funtime.png"
                    alt="funtime"
                    className="absolute hidden left-[120px] top-1/2 -translate-y-1/2 duration-300 group-hover:block"
                  />
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
                  color="#f5f5f5"
                  className={`animate-menu-fade transition-opacity delay-[1500ms] text-xl font-medium ${mcQueenDisplay.className} leading-6`}
                  mb={isMobileScreen ? 0 : 1.5}
                >
                  Based In
                </Text>
                <Text
                  className="animate-menu-fade transition-opacity delay-[1700ms]"
                  w={127}
                  fontSize={isMobileScreen ? "xs" : "sm"}
                >
                  Saigon, Vietnam Seoul, South Korea
                </Text>
              </Box>
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
            </Stack>
          </Stack>
        </Box>
        <Box
          className="absolute"
          bottom={25}
          fontSize="15px"
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
