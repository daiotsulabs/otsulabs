import { Box, Button, Stack, useMediaQuery } from "@chakra-ui/react";
import { CancelIcon, Logo, MenuIcon, SingleLogo } from "../icons";
import { useRouter } from "next/navigation";

interface HeaderProps {
  dark?: boolean;
  activeSlideIndex: number;
  onClickToggle: () => void;
  showMenuItem?: boolean;
  isCancelIcon?: boolean;
  menuItems?: string[];
  onActiveSlideChange?: Function
  toHome?: boolean
}
function Header({
  dark,
  activeSlideIndex,
  showMenuItem = true,
  isCancelIcon,
  onClickToggle,
  menuItems = ["experience", "work", "process", "faq"],
  onActiveSlideChange,
  toHome = true
}: HeaderProps) {
  const router = useRouter();
  const [isMobileScreen] = useMediaQuery('(max-width: 480px)')
  const [isMediumScreen] = useMediaQuery('(max-width: 1441px)')
  return (
    <header className={`fixed inset-x-0 ${isMobileScreen ? "pl-6 pr-[18px] top-[16px]" : "px-11 top-[18px]"} z-[2]`}>
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Stack direction="row" gap="54px" alignItems="center" className={isMobileScreen ? "unset" : isMediumScreen ? "h-[36px]" : "h-[42px]"}>
          <Box cursor="pointer" onClick={() => toHome ? router.push("/") : onActiveSlideChange?.(0)}>
            <SingleLogo width={isMediumScreen ? 21 : 32} height={isMediumScreen ? 21 : 32} fill={dark ? "black" : "white"} />
          </Box>
          <Stack direction="row" gap={8}>
            {showMenuItem && !isMobileScreen && menuItems.map((item, index) => (
              <Button
                key={index}
                variant="link"
                className="uppercase text-md"
                color={dark ? "black" : "white"}
                opacity={0.4}
                letterSpacing={isMediumScreen ? "1.2px" : "1.6px"}
                fontSize={isMediumScreen ? "xs" : "md"}
                isActive={activeSlideIndex === (index + 1)}
                fontWeight={400}
                _active={{
                  opacity: 1,
                  textDecoration: "underline",
                }}
                onClick={() => {
                  const active = index + 1
                  onActiveSlideChange && onActiveSlideChange(active)
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Button cursor="pointer" onClick={onClickToggle} p={0} variant="unstyled" sx={{ minW: 0 }} >
          {
            isCancelIcon
              ? <CancelIcon fill={dark ? "black" : "white"} />
              : <MenuIcon
                width={isMobileScreen ? 20 : undefined}
                height={isMobileScreen ? 12 : undefined}
                fill={dark ? "black" : "white"}
              />
          }
        </Button>
      </Stack>
    </header>
  );
}

export { Header }