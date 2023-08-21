import { Container, Center, Flex, useMediaQuery } from "@chakra-ui/react"
import { Contact, Faq } from "."

function LandingAbout() {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return (
    <Center className="w-full h-full bg-black relative items-start md:items-center pt-[100px]">
      <Container maxWidth={'1320px'} className="px-10 md:px-[120px] 2xl:px-24 static md:absolute" top={!isMobileScreen ? '150px' : '0px'}>
        <Flex className='flex flex-col mt-[15px] md:flex-row gap-x-4'>
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