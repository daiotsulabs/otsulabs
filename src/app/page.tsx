"use client";
import { Header, Layout, ModalMenu } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { LandingHome } from "@/containers/LandingHome";
// import { Noise } from '@/components/Noise'
import {
  LandingAbout,
  LandingExperience,
  LandingWorkV3,
  LandingContact,
} from "@/containers";
import {
  Box,
  Button,
  Center,
  Stack,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import "swiper/css/free-mode";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const swiperRef = useRef();
  const router = useRouter();
  const workRef = useRef<any>(null);
  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");
  const [currenIndex, setCurrentIndex] = useState(0);
  const [hideArrow, setHideArrow] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const menuItems = ["home", "experience", "work", "faq"];
  // const menuItems = ["home", "experience", "work", "faq", "contact"];
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const setActiveIndex = (index: number) => {
    if (!swiperRef.current) return;
    (swiperRef.current as any).slideTo(index, 500);
  };
  const onSlideActiveChange = (index: number) => {
    setActiveIndex(index);
  };
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    if (scrollPosition > windowHeight) {
      setHideArrow(true);
    } else {
      setHideArrow(false);
    }
  };

  useEffect(() => {
    const hashtag = window.location.hash?.split("#")[1];
    window.addEventListener("scroll", handleScroll);

    if (menuItems.includes(hashtag)) {
      setTimeout(() => {
        setCurrentIndex(menuItems.indexOf(hashtag));
        setActiveIndex(menuItems.indexOf(hashtag));
        if (workRef.current) {
          const topPos =
            workRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: topPos, // scroll so that the element is at the top of the view
            behavior: "smooth", // smooth scroll
          });
        }
        history.replaceState(null, "", " ");
      }, 600);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout className="bg-[#010101]">
      {/* <Box className="bg-noise" /> */}
      {/* <Noise></Noise> */}

      {!isOpen && (
        <Header
          menuItems={menuItems}
          toHome={false}
          onActiveSlideChange={onSlideActiveChange}
          onClickToggle={onToggle}
          activeSlideIndex={currenIndex}
          visibleHeader={isScrollingUp}
        />
      )}
      {isOpen && (
        <ModalMenu
          showBg={currenIndex === 0}
          in={isOpen}
          onClickToggle={onToggle}
        />
      )}
      {isMobileScreen ? (
        <Stack direction="column">
          <Box className="w-screen h-screen">
            <LandingHome hideArrow={hideArrow} hideTagLine={isOpen} />
          </Box>
          <Box className="w-screen h-[309px]">
            <LandingExperience />
          </Box>
          <Box className="w-screen h-auto" ref={workRef}>
            <LandingWorkV3 />
          </Box>
          <Box className="w-screen h-auto">
            <LandingAbout />
          </Box>
          <Box className="w-screen h-auto mb-20">
            {/* <LandingContact /> */}
            {/* <Center className="h-full bg-black">
              <Contact className="w-4/5 px-12"></Contact>
            </Center> */}
          </Box>
        </Stack>
      ) : (
        <Swiper
          className="w-full h-full"
          slidesPerView={1}
          direction="vertical"
          freeMode={true}
          mousewheel={{
            releaseOnEdges: true,
            thresholdDelta: 20,
          }}
          speed={1000}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          onScroll={(swiper, event: WheelEvent) => {
            setIsScrollingUp(event.deltaY > 0);
          }}
          preventInteractionOnTransition={true}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <LandingHome hideTagLine={isOpen} />
          </SwiperSlide>
          <SwiperSlide>
            <LandingExperience />
          </SwiperSlide>
          <SwiperSlide>
            <LandingWorkV3 />
          </SwiperSlide>
          <SwiperSlide>
            <LandingAbout />
          </SwiperSlide>
          {/* <SwiperSlide>
            <LandingContact />
          </SwiperSlide> */}
        </Swiper>
      )}
      <Box
        className={`fixed right-0 pr-6 md:pr-[45px] bottom-5 md:bottom-[45px] z-[1000] transition duration-1000 transition-transform ${
          showButton ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Button
          onClick={() => router.push("/careers")}
          className={`!h-9 md:!h-10 md:w-[178px] text-xs md:text-lg font-normal rounded-full bg-white`}
        >
          We are hiring!
        </Button>
      </Box>
    </Layout>
  );
}
