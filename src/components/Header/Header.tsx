import { Button, Stack } from "@chakra-ui/react";
import Image from "next/image";

interface HeaderProps {
  dark?: boolean;
  activeSlideIndex: number;
}
const menuItems: string[] = ["experience", "work", "process", "faq"]
function Header({ dark, activeSlideIndex }: HeaderProps) {
  return (
    <header className="fixed inset-x-0 px-11 top-[18px] z-[2]">
      <Stack justifyContent="space-between" direction="row">
        <Stack direction="row" gap="54px">
          <Image
            src={dark ? "/icons/dark-logo.svg" : "/icons/logo.svg"}
            alt="logo"
            width={60}
            height={20} />
          <Stack direction="row" gap={8}>
            {menuItems.map((item, index) => (
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
        <Button p={0} _hover={{ bg: "rgba(0,0,0,.3)" }} >
          <Image
            src={dark ? "/icons/dark-menu-icon.svg" : "/icons/menu-icon.svg"}
            alt="menu-icon"
            width={26}
            height={20} />
        </Button>
      </Stack>
    </header>
  );
}

export { Header }