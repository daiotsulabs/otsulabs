import { Box, Center, Flex, Divider, Text, Heading, Container, useMediaQuery } from '@chakra-ui/react'
import Form from './Form'

export default function Freelancers () {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return(
    <Center className='w-full h-full bg-black'>
      <Container maxWidth={'1200'} className='h-full md:h-auto pt-14 md:pt-0'>
        <Flex color='white' className='wrap-content flex-col md:flex-row items-center'>
          <Center flex='1' flexDirection={'column'} alignItems={'flex-start'} className='px-2 pt-8 pb-2 md:px-16 2xl:px-24 md:py-4'>
            <Heading className='text-base mb-1 md:text-[28px] 2xl:text-5xl md:mb-[36px] 2xl:mb-16 leading-[normal]' as={'h2'} color={'#F5F5F5'}>Freelancer</Heading>
          </Center>
          <Divider
            width="2px"
            className='hidden md:block'
            borderColor={isMobileScreen ? "black" : "rgba(0,0,0,.4)"}
            h={isMobileScreen ? 0 : 660}
            w={isMobileScreen ? 245 : 0}
            orientation={isMobileScreen ? "horizontal" : "vertical"}
            mt={isMobileScreen ? 54 : 0}
            borderLeftWidth={2}
            />
          <Box flex='1' className='w-full px-2 pb-8 pt-2 md:px-16 2xl:px-24 md:py-4'>
            <Form></Form>
          </Box>
        </Flex>
      </Container>
    </Center>
  )
}