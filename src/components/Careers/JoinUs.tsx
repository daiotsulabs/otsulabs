import { Box, Center, Flex, Divider, Text, Heading, Container, Button, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'
import { jobs } from '.'

export default function JoinUs ({ join }: { join: any }) {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return(
    <Center className='w-full h-full'>
      <Container maxWidth={'1200'} className='h-full md:h-auto pt-14 md:pt-0'>
          <Flex color='white' className='wrap-content flex-col md:flex-row'>
          <Box flex='1' className='px-2 pt-8 pb-2 md:px-16 2xl:px-24 md:py-4'>
            <Heading
              className='text-base mb-2 md:text-[28px] 2xl:text-[32px] md:mb-8 2xl:mb-16 leading-[normal] uppercase'
              as={'h3'}
              color={'#000'}
              >JOIN US</Heading>
              <Text
                className='text-xs md:text-base 2xl:text-xl leading-[normal]'
                color={'#727272'}
              >
                Where being weeby is a way of life. Step into a culture that thrives on creativity, innovation, and passion.
              </Text>
              <ul className='mt-8'>
                {
                  jobs.map(job => (
                    <li
                      key={job.id}
                      className='rounded-[10px] md:rounded-2xl my-3 md:my-6 cursor-pointer py-1 md:py-4 px-6 md:px-10 border border-[#000000] border-solid'
                    >
                      <Link href={`/careers/${job.slug}`}>
                        <Flex justifyContent={'space-between'} alignItems={'center'}>
                          <Text color={'#000000'} fontWeight={400} className='leading-[normal] text-xs md:text-base 2xl:text-xl'>{job.name}</Text>
                          <ArrowRightIcon></ArrowRightIcon>
                        </Flex>
                      </Link>
                    </li>
                  ))
                }
              </ul>
          </Box>
          <Box className='w-4/5 h-0.5 md:w-0.5 md:h-96 mx-auto mt-[24px] mb-[40px]'>
            <Divider orientation={isMobileScreen ? 'horizontal' : 'vertical'} borderColor={isMobileScreen ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.40)'}></Divider>
          </Box>
          <Center
            className='px-2 pb-8 pt-2 md:px-16 2xl:px-24 md:py-4'
            alignItems={'flex-start'}
            flex='1'
            flexDirection={'column'}
          >
            <Heading
              className='text-base mb-2 md:text-[32px] 2xl:text-5xl md:mb-[22px] 2xl:mb-16 leading-[normal]'
              as={'h2'}
              color={'#000'}
            >
              Freelancer?
            </Heading>
            <Text
              className='text-xs md:text-base 2xl:text-xl leading-[normal]'
              color={'#727272'}
            >
              No perfect match? Don&apos;t worry! Join our freelancer network and collaborate with us on a project basis.
            </Text>
            <Box className='w-full h-[32px] 2xl:h-[48px]'></Box>
            <Button
              // style={{ background: '#000000', color: '#ffffff' }}
              colorScheme='blackAlpha'
              size={'md'}
              className='py-2 md:py-2 px-8 md:px-11 rounded-[10px] md:rounded-[16px]'
              fontSize={16}
              fontWeight={400}
              lineHeight={'normal'}
              variant='outline'
              onClick={join}
              _hover={{
                background: '#000000',
                color: '#ffffff'
              }}
            >
              Join
            </Button>
          </Center>
        </Flex>
      </Container>
    </Center>
  )
}