import { Box, Center, Flex, Text, Heading, Container, Button, useMediaQuery } from '@chakra-ui/react'
import Link from 'next/link'
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
              className='uppercase text-md md:text-[28px] text-[#f5f5f5] font-bold uppercase'
              as={'div'}
              letterSpacing={4}
            >
              JOIN US
            </Heading>
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
                      <Flex justifyContent={'space-between'} alignItems={'center'} className='py-2 md:py-4 px-6 md:px-10'>
                        <Text fontWeight={400} className='leading-[normal] text-xs md:text-base 2xl:text-xl'>{job.name}</Text>
                        <ArrowRightIcon color='#A0A0A0' />
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
              className='uppercase text-md md:text-[28px] text-[#f5f5f5] font-bold uppercase'
              as={'div'}
              letterSpacing={4}
            >
              Freelancer?
            </Heading>
            <Text
              className='text-xs md:text-base 2xl:text-xl leading-[normal]'
              my={5}
            >
              No perfect match? Don&apos;t worry! Join our freelancer network and collaborate with us on a project basis.
            </Text>
            {!isMobileScreen && <Text
              className='text-xs md:text-base 2xl:text-xl leading-[normal]'
              mb={10}
            >
              We have an awesome in-house team with creative thinkers and directors. But, we&apos;re looking for skilled artists, animators, storyboard artists, concept artists, and character designers to join our extended team. Interested? Throw your hat in the ring!
            </Text>}
            <Link href={"/careers/freelancer"} >
              <Button
                style={{ background: '#ffffff', color: '#000000' }}
                size={'md'}
                className='py-2 md:py-2 px-8 md:px-11 rounded-full flex-1'
                fontSize={16}
                fontWeight={400}
                variant='outline'
                onClick={join}
                height={isMobileScreen ? "40px" : "44px"}
              >
                Join
              </Button>
            </Link>
          </Center>
        </Flex>
      </Container>
    </Center>
  )
}