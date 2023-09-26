import { useEffect, useState } from "react";

export const useScrollHeader = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    let lastScrollPosition = window.scrollY;
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > lastScrollPosition) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(false);
      }
      lastScrollPosition = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isHeaderVisible };
};
