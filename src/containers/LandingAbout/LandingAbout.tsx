import { Container, Center, Flex, useMediaQuery } from "@chakra-ui/react"
import { Contact, Faq } from "."

function LandingAbout() {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return (
    <Center className="w-full h-full bg-black relative items-start md:items-center pt-[68px]">
      <Container maxWidth={'1320px'} className="px-[53px] md:px-10 2xl:px-24 static md:absolute" top={!isMobileScreen ? '200px' : '0px'}>
        <Flex className='flex flex-col md:flex-row gap-x-4'>
          <Faq />
          {
            !isMobileScreen && <Contact />
          }
        </Flex>
      </Container>
    </Center>
  )
}

export { LandingAbout }