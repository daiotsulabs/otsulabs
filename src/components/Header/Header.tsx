import { Box, Button, Stack, useMediaQuery } from "@chakra-ui/react";
import { CancelIcon, MenuIcon, SingleLogo } from "../icons";
import { useRouter } from "next/navigation";

interface HeaderProps {
  dark?: boolean;
  activeSlideIndex: number;
  onClickToggle: () => void;
  showMenuItem?: boolean;
  isCancelIcon?: boolean;
  menuItems?: string[];
  onActiveSlideChange?: Function;
  toHome?: boolean;
}
function Header({
  activeSlideIndex,
  showMenuItem = true,
  isCancelIcon,
  onClickToggle,
  menuItems = ["home", "experience", "work", "faq", "contact"],
  onActiveSlideChange,
  toHome = true,
}: HeaderProps) {
  const router = useRouter();
  const [isMobileScreen] = useMediaQuery("(max-width: 480px)");
  const [isMediumScreen] = useMediaQuery("(max-width: 1441px)");
  return (
    <header className="fixed pl-6 pr-[20px] top-[16px] md:inset-x-11 md:top-3 z-[2] h-[60px] bg-black/30 backdrop-blur-xl rounded-full">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        h="100%"
      >
        <Box
          cursor="pointer"
          onClick={() => (toHome ? router.push("/") : onActiveSlideChange?.(0))}
          w={50}
        >
          <SingleLogo
            width={isMediumScreen ? 21 : 32}
            height={isMediumScreen ? 21 : 32}
            fill={"white"}
          />
        </Box>
        <Stack direction="row" gap={8}>
          {showMenuItem &&
            !isMobileScreen &&
            menuItems.map((item, index) => (
              <Button
                key={index}
                variant="link"
                className="uppercase text-xs xl:text-md "
                color={"white"}
                opacity={0.4}
                letterSpacing={isMediumScreen ? "1.2px" : "1.6px"}
                isActive={activeSlideIndex === index}
                fontWeight={400}
                _active={{
                  opacity: 1,
                }}
                onClick={() => {
                  const active = index;
                  onActiveSlideChange && onActiveSlideChange(active);
                }}
              >
                {item}
              </Button>
            ))}
        </Stack>
        <Button
          cursor="pointer"
          onClick={onClickToggle}
          p={0}
          className="text-xs xl:text-md"
          variant="unstyled"
          sx={{ minW: 0 }}
          color="#f5f5f5"
          w={50}
          textAlign={isMobileScreen ? "right" : "center"}
        >
          {isCancelIcon && isMobileScreen ? (
            <CancelIcon className="ml-auto" fill={"white"} />
          ) : isMobileScreen ? (
            <MenuIcon
              className="ml-auto"
              width={20}
              height={12}
              fill={"white"}
            />
          ) : null}
          {isCancelIcon && !isMobileScreen
            ? "CLOSE"
            : !isMobileScreen
            ? "MENU"
            : null}
        </Button>
      </Stack>
    </header>
  );
}

export { Header };
