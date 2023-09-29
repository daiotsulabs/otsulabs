"use client";
import { Header, Layout, ModalMenu } from "@/components";
import { useEffect, useRef, useState } from "react";
import { jobs } from "@/components/Careers";
import type { Job } from "@/components/Careers";
import {
  Center,
  Container,
  Heading,
  useDisclosure,
  Text,
  Flex,
  Box,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { mcQueenDisplay } from "../../layout";
// import Form from '@/components/Careers/Form'
import { isEmail, isUrl } from "@/utilities";
import { InputEmail } from "@/components/Input/InputEmail";
import { InputName } from "@/components/Input/InputName";
import { Textarea } from "@/components/Input/Textarea";
import { InputPortfolio } from "@/components/Input/InputPortfolio";
import { CheckCircleIcon } from "@/components/icons";
import axios from "axios";

export default function JobId() {
  const { isOpen, onToggle } = useDisclosure();
  const swiperRef = useRef();
  const path = usePathname();
  const router = useRouter();
  const [activeSlice, setActiveSlide] = useState(1);
  const [job, setJob] = useState<Job>();
  const tabs = ["join us", "freelancers"];

  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    email: true,
    portfolio: true,
    position: true,
    message: true,
    name: true,
  });
  const [name, setName] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [message, setMessage] = useState("");
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    setJob(jobs.find((j) => j.slug === path.split("/")[2]));
    job && setPosition(job.name);
    setError((prevState: any) => ({
      ...prevState,
      position: !position,
    }));
  }, [job, path, setError, position]);

  const onClickValidateForm = () => {
    if (loading) return;
    setIsValidate(true);
    console.log(error);
    const isValid = Object.values(error).every((e) => !e);
    if (
      !isValid ||
      !isEmail(email) ||
      !name ||
      !isUrl(portfolio) ||
      !position ||
      !message
    )
      return;
    const url = "https://api.oldeus.com/apply";
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("portfolio", portfolio);
    formData.append("position", position);
    formData.append("message", message);
    setLoading(true);
    axios
      .post(url, formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setIsSubmitted(true);
      })
      .catch((er) => console.log(er))
      .finally(() => {
        setLoading(false);
      });
  };
  const apply = () => {
    (swiperRef.current as any).slideNext();
  };

  const toInformation = () => {
    (swiperRef.current as any).slidePrev();
  };

  const onSlideActiveChange = (index: number) => {
    setActiveSlide(index);
  };

  const goBack = () => {
    router.back();
  };

  const [currenIndex, setCurrentIndex] = useState(0);
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex);
  };

  return (
    <Layout>
      <Header
        menuItems={[]}
        onClickToggle={onToggle}
        activeSlideIndex={1}
        onActiveSlideChange={onSlideActiveChange}
        customClassName="bg-transparent backdrop-blur-none"
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      {job ? (
        <Box className="w-full h-auto" bgImage={`url("/images/noise.png")`}>
          <Container
            maxWidth={"600"}
            className="h-full animate-page-fade pt-[80px] md:pt-[124px] px-4 md:px-0"
            color="#707070"
          >
            <Heading
              className={`${mcQueenDisplay.className} mt-2 text-[30px] md:!text-[36px] font-medium leading-[normal] text-left mb-[6px]`}
              as={'h2'}
              color={'#f5f5f5'}>
              {job?.name}
            </Heading>
            <Text className='text-[8px] md:text-[12px] uppercase tracking-[0.6px] leading-[normal] mb-6 md:mb-8' color={'#CCC'}>{job?.time} &nbsp; {job?.location}</Text>
            <Box className='pr-2 md:pr-10 swiper-no-mousewheel'>
              <Flex alignItems={'flex-end'} className='mt-6 md:mt-8'>
                <Box>
                  <Heading
                    className={`${mcQueenDisplay.className} text-base mb-1 md:mb-3 md:text-xl 2xl:text-[28px] 2xl:text-lg leading-[normal] font-medium`}
                    as={"h4"}
                    color={"#f5f5f5"}
                  >
                    Responsibilities:
                  </Heading>
                  <ul className="list-disc pl-6">
                    {job?.responsibilities.map((r, index) => (
                      <li key={index}>
                        <Text className="text-[12px] md:text-base 2xl:text-xl leading-[normal]">
                          {r}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Flex>
              <Flex alignItems={"flex-end"} className="mt-6 md:mt-8">
                <Box>
                  <Heading
                    className={`${mcQueenDisplay.className} text-base mb-1 md:mb-3 md:text-xl 2xl:text-[28px] 2xl:text-lg leading-[normal] font-medium`}
                    as={"h4"}
                    color={"#f5f5f5"}
                  >
                    Qualifications:
                  </Heading>
                  <ul className="list-disc pl-6">
                    {job?.qualifications.map((r, index) => (
                      <li key={index}>
                        <Text className="text-[12px] md:text-base 2xl:text-xl leading-[normal]">
                          {r}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Flex>
              <Flex alignItems={"flex-end"} className="mt-6 md:mt-8">
                <Box>
                  <Heading
                    className={`${mcQueenDisplay.className} text-base mb-1 md:mb-3 md:text-xl 2xl:text-[28px] 2xl:text-lg leading-[normal] font-medium`}
                    as={"h4"}
                    color={"#f5f5f5"}
                  >
                    We offer:
                  </Heading>
                  <ul className="list-disc pl-6">
                    {job?.offers.map((r, index) => (
                      <li key={index}>
                        <Text className="text-[12px] md:text-base 2xl:text-xl leading-[normal]">
                          {r}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </Box>
              </Flex>
            </Box>
            <Center
              flex="1"
              flexDirection={"column"}
              alignItems={"flex-start"}
              className="pb-4 md:py-6 gap-y-1"
            >
              <Box width={"100%"} className="mx-auto">
                {/* <Form hidden={['position']} defaultValue={{ position: job?.name }}></Form> */}
                <InputName
                  value={name}
                  setValue={setName}
                  isValidate={isValidate}
                  placeholder="Your name"
                  setError={setError}
                ></InputName>
                <InputEmail
                  value={email}
                  setValue={setEmail}
                  isValidate={isValidate}
                  setError={setError}
                ></InputEmail>
                <InputPortfolio
                  value={portfolio}
                  setValue={setPortfolio}
                  isValidate={isValidate}
                  setError={setError}
                ></InputPortfolio>
                <Textarea
                  value={message}
                  setValue={setMessage}
                  isValidate={isValidate}
                  setError={setError}
                ></Textarea>

                <Button
                  style={{ background: "#ffffff", color: "#000000" }}
                  className={`${mcQueenDisplay.className} w-full`}
                  size={isMobileScreen ? "md" : "lg"}
                  borderRadius={isMobileScreen ? 10 : 16}
                  fontSize={16}
                  fontWeight={400}
                  lineHeight={"normal"}
                  isLoading={loading}
                  loadingText="Sending"
                  variant="outline"
                  spinnerPlacement="end"
                  onClick={onClickValidateForm}
                  h={isMobileScreen ? "40px" : "48px"}
                >
                  {isSubmitted ? "Sent" : "Send"}
                  {isSubmitted && (
                    <>
                      <span className="ml-1"></span>
                      <CheckCircleIcon
                        width={18}
                        height={18}
                        color="#ffffff"
                      ></CheckCircleIcon>
                    </>
                  )}
                </Button>
                {isSubmitted && (
                  <Text
                    fontSize={isMobileScreen ? 10 : 16}
                    marginTop={isMobileScreen ? "6px" : "10px"}
                    fontWeight={400}
                  >
                    Thanks for getting in touch! Your message is delivered and
                    we will do our best to reply to you soon.
                  </Text>
                )}
                {isMobileScreen && (
                  <Box
                    onClick={goBack}
                    className={`${mcQueenDisplay.className} uppercase text-xs text-center mt-5 mb-3 cursor-pointer color-white`}
                    color={"#ffffff"}
                    letterSpacing={1.2}
                  >
                    Back to careers
                  </Box>
                )}
              </Box>
            </Center>
          </Container>
        </Box>
      ) : (
        <></>
      )}
    </Layout>
  );
}
