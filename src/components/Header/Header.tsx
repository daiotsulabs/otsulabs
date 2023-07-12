import { Button, Stack } from "@chakra-ui/react";
import Image from "next/image";

const MenuButton = ({ children }: { children: string }) => {
  return (
    <Button variant="link" className="uppercase text-xs" color="whiteAlpha.400" letterSpacing="1.2px">{children}</Button>
  )
}

function Header() {
  return (
    <header className="fixed inset-x-0 px-11 top-[18px]">
      <Stack justifyContent="space-between" direction="row">
        <Stack direction="row" gap="54px">
          <Image src="/icons/logo.svg" alt="logo" width={60} height={20} />
          <Stack direction="row" gap={8}>
            <MenuButton>experience</MenuButton>
            <MenuButton>work</MenuButton>
            <MenuButton>process</MenuButton>
            <MenuButton>faq</MenuButton>
          </Stack>
        </Stack>
        <Button p={0} _hover={{ bg: "rgba(0,0,0,.3)" }} >
          <Image src="/icons/menu-icon.svg" alt="menu-icon" width={26} height={20} />
        </Button>
      </Stack>
    </header>
  );
}

export { Header }