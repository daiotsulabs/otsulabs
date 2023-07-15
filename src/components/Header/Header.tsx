import { Box, Button, Stack } from "@chakra-ui/react";
import { CancelIcon, Logo, MenuIcon } from "../icons";
import { useRouter } from "next/navigation";

interface HeaderProps {
  dark?: boolean;
  activeSlideIndex: number;
  onClickToggle: () => void;
  showMenuItem?: boolean;
  isCancelIcon?: boolean;
  menuItems?: string[];
}
function Header({
  dark,
  activeSlideIndex,
  showMenuItem = true,
  isCancelIcon,
  onClickToggle,
  menuItems = ["experience", "work", "process", "faq"]
}: HeaderProps) {
  const router = useRouter();
  return (
    <header className="fixed inset-x-0 px-11 top-[18px] z-[2]">
      <Stack justifyContent="space-between" direction="row" alignItems="center">
        <Stack direction="row" gap="54px" alignItems="flex-end">
          <Box cursor="pointer" onClick={() => router.push("/")}>
            <Logo fill={dark ? "black" : "white"} />
          </Box>
          <Stack direction="row" gap={8}>
            {showMenuItem && menuItems.map((item, index) => (
              <Button
                key={index}
                variant="link"
                className="uppercase text-md"
                color={dark ? "black" : "white"}
                opacity={0.4}
                letterSpacing="1.2px"
                isActive={activeSlideIndex === (index + 1)}
                _active={{
                  opacity: 1,
                  textDecoration: "underline",
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
        </Stack>
        <Button cursor="pointer" onClick={onClickToggle} p={0} variant="unstyled" >
          {
            isCancelIcon
              ? <CancelIcon fill={dark ? "black" : "white"} />
              : <MenuIcon fill={dark ? "black" : "white"} />
          }
        </Button>
      </Stack>
    </header>
  );
}

export { Header }