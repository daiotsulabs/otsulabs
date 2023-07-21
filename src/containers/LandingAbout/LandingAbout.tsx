import { Accordion, AccordionButton, Container, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, Grid, GridItem, Heading, Text, Button, useMediaQuery } from "@chakra-ui/react"
import { Contact, Faq } from "."

function LandingAbout() {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return (
    <Center className="w-full h-full mt-[72px] md:mt-0 bg-white relative items-start md:items-center">
      <Container maxWidth={'1200px'} className="px-6 md:px-16 2xl:px-24 static md:absolute" top={!isMobileScreen ? '200px' : '0px'}>
        <Flex className='flex flex-col md:flex-row gap-x-4'>
          <Faq></Faq>
          {
            isMobileScreen ? <></> : <Contact></Contact>
          }
        </Flex>
      </Container>
    </Center>
  )
}

export { LandingAbout }