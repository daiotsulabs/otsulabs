import { Container, Center, Flex, useMediaQuery } from "@chakra-ui/react"
import { Contact, Faq } from "."

function LandingAbout() {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return (
    <Center className="w-full h-auto bg-black relative items-start md:items-center pt-[60px] md:pt-[100px]" bgImage={`url("/images/noise.png")`}>
      <Container maxWidth={'940px'} className="px-10 md:px-[120px] 2xl:px-24 static md:absolute" top={!isMobileScreen ? '150px' : '0px'}>
        <Flex className='flex flex-col mt-0 md:mt-[15px] md:flex-row gap-x-4'>
          <Faq />
        </Flex>
      </Container>
    </Center>
  )
}

export { LandingAbout }