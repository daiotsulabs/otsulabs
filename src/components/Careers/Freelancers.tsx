import { Box, Center, Flex, Divider, Text, Heading, Container } from '@chakra-ui/react'
import Form from './Form'

export default function Freelancers () {
  return(
    <Center className='w-full h-full'>
      <Container maxWidth={'1200'} className='h-full md:h-auto pt-14 md:pt-0'>
        <Flex color='white' className='wrap-content flex-col md:flex-row'>
          <Center flex='1' flexDirection={'column'} alignItems={'flex-start'} className='px-2 pt-8 pb-2 md:px-16 2xl:px-24 md:py-4'>
            <Heading className='text-base mb-1 md:text-[28px] 2xl:text-5xl md:mb-[36px] 2xl:mb-16 leading-[normal]' as={'h2'} color={'#000'}>Freelancer</Heading>
            <Text className='text-[8px] uppercase md:normal-case md:text-base 2xl:text-xl leading-[normal]' color={'#727272'}>
              Hey there! We&apos;ve got a pretty sweet in-house team. We&apos;ve intentionally brought in thinkers, directors, and people who excel in ideation, direction, and oversight.
            </Text>
            <Text className='text-[8px] uppercase md:normal-case md:text-base 2xl:text-xl mt-[8px] md:mt-[14px] leading-[normal]' color={'#727272'}>
              That said, we&apos;re on the hunt for some skilled executioners with specific expertise. Our goal is to connect and work together by building a network of creators. It&apos;s as easy as that. So if you&apos;re an artist, animator, storyboard artist, concept artist, or character designer throw your hat in the ring!
            </Text>
          </Center>
          <Box width={'2px'} height={'440px'} className='hidden md:block'>
            <Divider orientation='vertical' color={'rgba(0, 0, 0, 0.40)'}></Divider>
          </Box>
          <Box flex='1' className='px-2 pb-8 pt-2 md:px-16 2xl:px-24 md:py-4'>
            <Form></Form>
          </Box>
        </Flex>
      </Container>
    </Center>
  )
}