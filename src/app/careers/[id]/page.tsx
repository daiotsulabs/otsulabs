"use client";
import { Header, Layout, ModalMenu } from "@/components";
import { useEffect, useRef, useState } from "react";
import { jobsEN, jobsVN } from "@/components/Careers";
import type { Job } from "@/components/Careers";
import {
  Center,
  Container,
  Heading,
  useDisclosure,
  Text,
  Box,
  Button,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";
import { mcQueenDisplay } from "../../layout";
import { isEmail, isUrl } from "@/utilities";
import { InputEmail } from "@/components/Input/InputEmail";
import { InputName } from "@/components/Input/InputName";
import { Textarea } from "@/components/Input/Textarea";
import { InputPortfolio } from "@/components/Input/InputPortfolio";
import { CheckCircleIcon } from "@/components/icons";
import axios from "axios";
import Image from "next/image";

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
  const isVi = path.includes("/vi/");

  useEffect(() => {
    const jobs = isVi ? jobsVN : jobsEN;
    const jobId = isVi ? path.split("/")[3] : path.split("/")[2];
    setJob(jobs.find((j) => j.slug === jobId));
    job && setPosition(job.name);
    setError((prevState: any) => ({
      ...prevState,
      position: !position,
    }));
  }, [job, path, setError, position, isVi]);

  const onClickValidateForm = () => {
    if (loading) return;
    setIsValidate(true);
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

  const onSlideActiveChange = (index: number) => {
    setActiveSlide(index);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <Layout
      showBackButton
      toggleMenu={isOpen}
      backButtonClassName="md:block hidden"
    >
      <Header
        menuItems={[]}
        onClickToggle={onToggle}
        activeSlideIndex={1}
        onActiveSlideChange={onSlideActiveChange}
        customClassName="bg-transparent backdrop-blur-none"
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      {job ? (
        <Box className="w-full h-auto bg-[#010101]">
          <Container
            className="h-full animate-page-fade pt-[80px] md:pt-[124px] max-w-[310px] md:max-w-[1040px] px-0"
            color="#707070"
          >
            <Heading
              className={`${mcQueenDisplay.className} mt-2 text-[30px] md:text-4xl font-medium leading-[normal] mb-[15px] md:mb-[6px] text-center`}
              as={"h2"}
              color={"#f5f5f5"}
            >
              {job?.name}
            </Heading>
            <Text
              className="text-[8px] md:text-[15px] uppercase tracking-[0.8px] md:tracking-[1.5px] leading-[normal] text-center"
              color={"#f7f7f7"}
            >
              {job?.time} &nbsp; {job?.location}
            </Text>
            {job.images?.length || job.videos?.length ? (
              <Stack className="flex-row justify-between w-full my-[30px] md:my-[70px]">
                <Box className="w-[147px] md:w-[502px] h-[117px] md:h-[400px] relative overflow-hidden rounded-[10px] md:rounded-[30px]">
                  {job.videos?.length ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={job.videos[0]} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      fill
                      alt="work-image"
                      src={job.images[0]}
                      className="object-cover"
                    />
                  )}
                </Box>
                <Box className="w-[147px] md:w-[502px] h-[117px] md:h-[400px] relative overflow-hidden rounded-[10px] md:rounded-[30px]">
                  {job.videos?.length ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={job.videos[1]} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      fill
                      alt="work-image"
                      src={job.images[1]}
                      className="object-cover"
                    />
                  )}
                </Box>
              </Stack>
            ) : (
              <Box className="h-20" />
            )}

            <Stack className="flex-col md:flex-row justify-between w-full gap-[30px] mb-[30px] md:mb-[35px]">
              <Stack className="w-[310px] md:w-[502px] text-lg md:gap-[30px]">
                <Text
                  className={`${mcQueenDisplay.className} text-center md:text-left font-medium text-xl text-[#F5F5F5]`}
                >
                  {isVi ? "Trách nhiệm" : "Responsibilities"}
                </Text>
                <ul className="list-disc pl-6 [&>li:not(:last-child)]:mb-2 md:[&>li:not(:last-child)]:mb-5">
                  {job?.responsibilities.map((r, index) => (
                    <li key={index}>
                      <Text className="text-xs md:text-lg">{r}</Text>
                    </li>
                  ))}
                </ul>
              </Stack>
              <Stack className="w-[310px] md:w-[502px] text-lg md:gap-[30px]">
                <Text
                  className={`${mcQueenDisplay.className} text-center md:text-left font-medium text-xl text-[#F5F5F5]`}
                >
                  {isVi ? "Yêu cầu" : "Requirements"}
                </Text>
                <ul className="list-disc pl-6 [&>li:not(:last-child)]:mb-2 md:[&>li:not(:last-child)]:mb-5">
                  {job?.qualifications.map((r, index) => (
                    <li key={index}>
                      <Text className="text-xs md:text-lg">{r}</Text>
                    </li>
                  ))}
                </ul>
              </Stack>
            </Stack>

            <Text
              className={`${mcQueenDisplay.className} text-center md:text-left font-medium text-xl text-[#F5F5F5] mb-[15px] md:mb-[35px]`}
            >
              {isVi ? "Chúng Tôi Cung Cấp" : "We Offer"}
            </Text>

            <Stack className="flex-col md:flex-row justify-between w-full mb-[30px] md:mb-[35px]">
              <Stack
                className={`w-[310px] ${
                  job.images.length || job.videos?.length
                    ? "md:w-[502px]"
                    : "w-full"
                } text-lg gap-[30px]`}
              >
                <ul className="list-disc pl-6 [&>li:not(:last-child)]:mb-2 md:[&>li:not(:last-child)]:mb-5">
                  {job?.offers.map((r, index) => (
                    <li key={index}>
                      <Text className="text-xs md:text-lg">{r}</Text>
                    </li>
                  ))}
                </ul>
              </Stack>
              {(job.images?.length || job.videos?.length) && (
                <Stack className="w-[310px] h-[310px] md:w-[502px] md:h-[502px] relative mt-[30px] md:mt-0 overflow-hidden rounded-[10px] md:rounded-[30px]">
                  {job.videos?.length ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={job.videos[2]} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      alt="work-3"
                      src={job.images[2]}
                      fill
                      className="object-cover"
                    />
                  )}
                </Stack>
              )}
            </Stack>

            <Center
              flex="1"
              flexDirection={"column"}
              alignItems={"flex-start"}
              className="pb-10 md:pt-6 md:pb-[140px] gap-y-1"
            >
              {/* <Box width={"100%"} maxW={"600px"} className="mx-auto">
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
              </Box> */}
            </Center>
          </Container>
        </Box>
      ) : (
        <></>
      )}
    </Layout>
  );
}
