import { matrixSans } from "@/app/layout";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const phrases = [
  "Project “retoro world” phase 1.",
  "\n",
  "Ready.",
  "\n",
  "\n",
  "Open “Website”.",
  "\n",
  "Ready.",
  "\n",
  "\n",
  "\n",
  "Embracing the golden era of anime.",
  "\n",
  "Welcome to unconventional world.",
  "\n",
  "\n",
  "Ready.",
  "\n",
  "New",
  "\n",
  "\n",
  "Loading...",
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    let currentText = "";
    let currentPhraseIndex = 0;
    let currentCharacter = 0;
    let totalDuration = 0;

    const typingEffect = setInterval(() => {
      if (currentPhraseIndex === phrases.length) {
        clearInterval(typingEffect);
        return;
      }

      currentText += phrases[currentPhraseIndex][currentCharacter];
      setText(currentText);

      totalDuration += 25;
      currentCharacter += 1;

      if (currentCharacter === phrases[currentPhraseIndex].length) {
        currentPhraseIndex += 1;
        currentCharacter = 0;
      }
    }, 25); // Adjust typing speed here (milliseconds)

    // Clean up interval on unmount or when typing completes
    return () => clearInterval(typingEffect);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        }
        return prev;
      });
    }, 39);
    return () => clearInterval(interval);
  }, []);
  return (
    <Flex
      className={`w-screen h-screen p-12 md:px-[200px] md:py-[95px] ${matrixSans.className} justify-between`}
      backgroundColor="#f5f5f5"
    >
      <Box className="text-[10px] md:text-base whitespace-pre-line uppercase">{text}</Box>
      <Box className="self-end text-base md:text-2xl">{progress}%</Box>
    </Flex>
  );
};

export { LoadingScreen };
