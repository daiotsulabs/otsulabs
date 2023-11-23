import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LanguageIcon } from "../icons";

const LanguageButton = () => {
  const initialFocusRef = useRef<any>();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [isHover, setIsHover] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const onChangeLanguage = (lang: "vi" | "en") => {
    onClose();
    const path = pathname.replace("/vi", "");
    if (lang === "en") {
      router.push(path);
    } else {
      router.push(`/vi${path}`);
    }
  };
  return (
    <Popover
      initialFocusRef={initialFocusRef}
      placement="bottom-end"
      isOpen={isOpen}
      onClose={onClose}
    >
      <PopoverTrigger>
        <Button
          onClick={() => onOpen()}
          className={`w-[25px] h-[25px] p-0 min-w-0 rounded-full ${
            isOpen || isHover ? "bg-white" : "bg-transparent"
          }`}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <LanguageIcon fill={isOpen || isHover ? "#010101" : undefined} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[115px] border-none rounded-[15px] overflow-hidden bg-[#545354]">
        <PopoverBody className="p-0 text-lg text-white">
          <Box
            className="border-b border-[#f5f5f5] py-2 cursor-pointer text-center"
            onClick={() => onChangeLanguage("en")}
          >
            English
          </Box>
          <Box
            className="py-2 text-center cursor-pointer"
            onClick={() => onChangeLanguage("vi")}
          >
            Vietnamese
          </Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export { LanguageButton };
