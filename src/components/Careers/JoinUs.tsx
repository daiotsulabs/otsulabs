import {
  Box,
  Center,
  Flex,
  Text,
  Heading,
  Container,
  Button,
  useMediaQuery,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { mcQueenDisplay } from "@/app/layout";
import { ArrowRightIcon } from "@/components/icons";
import { jobsEN } from ".";
import Image from "next/image";

export default function JoinUs({ join }: { join: any }) {
  const [isMobileScreen] = useMediaQuery("(max-width: 768px)");

  const handleScrollToCareers = () => {
    const el = document.getElementById("open-positions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Center className="w-full py-[91px] md:pt-[140px] md:pb-[208px] px-[20px] animate-page-fade">
      <Container className="h-full md:h-auto md:pt-0 px-0 max-w-[310px] md:max-w-[1040px]">
        <Center flexDirection="column">
          <Heading
            className={`${mcQueenDisplay.className} text-[32px] md:text-[36px] leading-[normal] text-center md:text-left font-medium`}
            as={"h2"}
            color={"#f5f5f5"}
          >
            Careers
          </Heading>
          <Text
            className="text-xs text-center md:text-lg my-[30px] md:my-[35px] max-w-[440px]"
            color={"#707070"}
          >
            Step into a culture where being weeby is a way of life. We thrive on
            creativity, innovation, and passion.
          </Text>
          <Button
            onClick={handleScrollToCareers}
            className="h-6 md:h-10 rounded-full bg-white px-2 md:px-5 font-normal text-xs md:text-lg"
          >
            Open Positions
          </Button>

          <Stack className="flex-row justify-between w-full my-[30px]">
            <Box className="w-[147px] h-[117px] md:w-[502px] md:h-[400px] relative rounded-[10px] md:rounded-[30px] overflow-hidden">
              <Image fill alt="work-image" src="/images/work-3.png" />
            </Box>
            <Box className="w-[147px] h-[117px] md:w-[502px] md:h-[400px] relative rounded-[10px] md:rounded-[30px] overflow-hidden">
              <Image fill alt="work-image" src="/images/work.png" />
            </Box>
          </Stack>

          <Text
            className={`${mcQueenDisplay.className} text-[#f5f5f5] text-xl md:text-4xl mt-0 md:mt-10 mb-[30px] md:mb-[35px]`}
          >
            Our Core Principles
          </Text>
          <Stack className="items-center max-w-[625px] text-center text-xs md:text-base text-[#707070] gap-[15px] md:gap-[35px]">
            <Text className="text-[10px] md:text-[15px] uppercase text-[#f5f5f5] tracking-[1.5px]">
              Passion for storytelling
            </Text>
            <Text>
              We&apos;re storytellers at heart. Our North Star is simple: a
              boundless passion for storytelling. It&apos;s the spark that
              ignites our imagination and the fuels our commitment to creating
              extraordinary experiences and products.
            </Text>
            <Text className="text-[10px] md:text-[15px] uppercase text-[#f5f5f5] tracking-[1.5px] mt-[10px] md:mt-0">
              collaborative spirit
            </Text>
            <Text>
              Otsu Labs is a team of creators, each with special skills, kinda
              like the Straw Hat Pirates of One Piece - a diverse crew with a
              common goal.
            </Text>
            <Text className="text-[10px] md:text-[15px] uppercase text-[#f5f5f5] tracking-[1.5px] mt-[10px] md:mt-0">
              no compromise on quality
            </Text>
            <Text>
              Quality is not just a goal; it&apos;s a fundamental value that
              shapes our work. That&apos;s why every member of our team embraces
              a commitment to excellence.
            </Text>
          </Stack>

          <Image
            alt="work-2"
            src="/images/work-2.png"
            width={isMobileScreen ? 310 : 1040}
            height={isMobileScreen ? 88 : 300}
            className="my-[30px] md:mt-[67px] md:mb-[70px] rounded-[10px] md:rounded-[30px] overflow-hidden"
          />

          <Stack
            className="w-full flex-col md:flex-row justify-between items-center"
            id="open-positions"
          >
            <ul className="w-full md:w-[440px]">
              {jobsEN.map((job) => (
                <li
                  key={job.id}
                  className="bg-[#151515] rounded-[10px] md:rounded-2xl my-3 md:my-6 cursor-pointer border border-[#000000] border-solid"
                >
                  <Link href={`/careers/${job.slug}`}>
                    <Flex
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      className="py-2 md:py-4 px-6 md:px-8"
                    >
                      <Text
                        fontWeight={400}
                        className="leading-[normal] text-xs md:text-base 2xl:text-xl text-[#A0A0A0]"
                      >
                        {job.name}
                      </Text>
                      <ArrowRightIcon
                        color="#A0A0A0"
                        width={isMobileScreen ? 20 : 26}
                        height={isMobileScreen ? 20 : 26}
                      />
                    </Flex>
                  </Link>
                </li>
              ))}
            </ul>
            <Stack className="max-w-[365px] items-center text-xs md:text-base md:items-start text-center md:text-left text-[#707070] gap-[30px]">
              <Text
                className={`${mcQueenDisplay.className} text-[#f5f5f5] text-xl md:text-4xl font-medium`}
              >
                No perfect match?
              </Text>
              <Stack gap={3}>
                <Text>
                  Don&apos;t worry! Join our freelancer network and collaborate
                  with us on a project basis.
                </Text>
                <Text>
                  We&apos;re always looking for skilled artists, animators,
                  storyboard artists, concept artists, and character designers
                  to join our extended team.
                </Text>
                <Text>Interested? Throw your hat in the ring!</Text>
              </Stack>
              <Text
                className={`${mcQueenDisplay.className} text-xl md:text-2xl text-[#f5f5f5]`}
              >
                contact@otsulabs.com
              </Text>
            </Stack>
          </Stack>
        </Center>
      </Container>
    </Center>
  );
}
