import { Box, Center, Flex, Text, Heading, Container, Button, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
import { mcQueenDisplay } from '@/app/layout'
import { ArrowRightIcon } from '@/components/icons'
import { jobs } from '.'

export default function JoinUs({ join }: { join: any }) {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  return (
    <Center className='w-full h-full bg-black px-6 animate-page-fade'>
      <Container maxWidth={'1200'} className='h-full md:h-auto pt-[90px] md:pt-0 px-0'>
        <Flex color='#707070' className='wrap-content flex-col md:flex-row items-start justify-between' gap={isMobileScreen ? "44px" : 244}>
          <Box flex='1'>
            <Heading
              className={`${mcQueenDisplay.className} text-[32px] mb-5 md:text-[36px] leading-[normal] text-center md:text-left font-medium`}
              as={'h2'}
              color={'#f5f5f5'}
            >Careers</Heading>
            <Text
              className='text-xs md:text-base 2xl:text-xl leading-[normal]'
              color={'#727272'}
              mt={5}
            >
              Where being weeby is a way of life. Step into a culture that thrives on creativity, innovation, and passion.
            </Text>
            <ul className='mt-8'>
              {
                jobs.map(job => (
                  <li
                    key={job.id}
                    className='bg-[#151515] rounded-[10px] md:rounded-2xl my-3 md:my-6 cursor-pointer border border-[#000000] border-solid'
                  >
                    <Link href={`/careers/${job.slug}`}>
                      <Flex justifyContent={'space-between'} alignItems={'center'} className='py-2 md:py-4 px-6 md:px-8'>
                        <Text fontWeight={400} className='leading-[normal] text-xs md:text-base 2xl:text-xl'>{job.name}</Text>
                        <ArrowRightIcon color='#A0A0A0' width={isMobileScreen ? 20 : 26} height={isMobileScreen ? 20 : 26} />
                      </Flex>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Box>
          <Center
            maxW={400}
            alignItems={'flex-start'}
            flex='1'
            flexDirection={'column'}
          >
            <Heading
              className={`${mcQueenDisplay.className} text-[32px] mb-2 w-full md:text-[36px] leading-[normal] text-center md:text-left font-medium`}
              as={'h2'}
              color={'#f5f5f5'}
            >
              No perfect match?
            </Heading>
            <Text
              className='text-xs md:text-base 2xl:text-xl leading-[normal]'
              my={isMobileScreen ? 2 : 3}
            >
              Don't worry! Join our freelancer network and collaborate with us on a project basis.

            </Text>
            <Text
              className='text-xs md:text-base 2xl:text-xl leading-[normal]'
              my={isMobileScreen ? 2 : 3}
            >
              We're always looking for skilled artists, animators, storyboard artists, concept artists, and character designers to join our extended team.
            </Text>
            <Text
              className='text-xs md:text-base 2xl:text-xl leading-[normal]'
              my={isMobileScreen ? 2 : 3}
            >
              Interested? Throw your hat in the ring!
            </Text>
            <Text className={`${mcQueenDisplay.className} text-xl 2xl:text-2xl text-white mt-2`}>
              contact@otsulabs.com
            </Text>
          </Center>
        </Flex>
      </Container>
    </Center>
  )
}