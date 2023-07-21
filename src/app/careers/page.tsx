"use client"
import { Header, Layout, ModalMenu } from '@/components'
import { Box, Center, Flex, Divider, Text, useDisclosure, Heading, Container, Button } from '@chakra-ui/react'
import { ArrowRightIcon } from '@/components/icons'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Contact() {
  const { isOpen, onToggle } = useDisclosure()
  // const router = useRouter()
  const [tab, setTab] = useState('join-us')

  // useEffect(() => {
  //   setTab(router.query.tab as string || 'join-us')
  // }, [router.query])

  return (
    <Layout>
      <Header
        menuItems={["join us", "freelancers"]}
        onClickToggle={onToggle}
        dark={true}
        activeSlideIndex={1}
      />
      <ModalMenu in={isOpen} onClickToggle={onToggle} />
      <Center className='w-full h-full'>
        <Container maxWidth={'1200'}>
          <Flex color='white' className='wrap-content flex-col lg:flex-row'>
            <Box flex='1' className='px-24 py-4'>
              <Heading
                fontSize={32}
                marginBottom={'6px'}
                as={'h3'}
                color={'#000'}
                textTransform={'uppercase'}
                >JOIN US</Heading>
                <Text
                  fontSize={20}
                  color={'#727272'}
                >
                  Where being weeby is a way of life. Step into a culture that thrives on creativity, innovation, and passion.
                </Text>
                <ul>
                  <li className='rounded-2xl my-6 cursor-pointer py-4 px-10 border border-[#000000] border-solid'>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={'#000000'} fontSize={20} fontWeight={400} lineHeight={'no'}>Animation Director</Text>
                      <ArrowRightIcon></ArrowRightIcon>
                    </Flex>
                  </li>
                  <li className='rounded-2xl my-6 cursor-pointer py-4 px-10 border border-[#000000] border-solid'>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={'#000000'} fontSize={20} fontWeight={400} lineHeight={'no'}>Art Director</Text>
                      <ArrowRightIcon></ArrowRightIcon>
                    </Flex>
                  </li>
                  <li className='rounded-2xl my-6 cursor-pointer py-4 px-10 border border-[#000000] border-solid'>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={'#000000'} fontSize={20} fontWeight={400} lineHeight={'no'}>2D Artist</Text>
                      <ArrowRightIcon></ArrowRightIcon>
                    </Flex>
                  </li>
                  <li className='rounded-2xl my-6 cursor-pointer py-4 px-10 border border-[#000000] border-solid'>
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Text color={'#000000'} fontSize={20} fontWeight={400} lineHeight={'no'}>Storyboard Artist</Text>
                      <ArrowRightIcon></ArrowRightIcon>
                    </Flex>
                  </li>
                </ul>
            </Box>
            <Box width={'2px'} height={'440px'} className='hidden lg:block'>
              <Divider orientation='vertical' color={'rgba(0, 0, 0, 0.40)'}></Divider>
            </Box>
            <Center
              className='px-24 py-4'
              alignItems={'flex-start'}
              flex='1'
              flexDirection={'column'}
            >
              <Heading
                fontSize={48}
                marginBottom={'6px'}
                as={'h2'}
                color={'#000'}
              >
                Freelancer?
              </Heading>
              <Text
                fontSize={18}
                color={'#727272'}
              >
                No perfect match? Don't worry! Join our freelancer network and collaborate with us on a project basis.
              </Text>
              <Box className='w-full' height={'48px'}></Box>
              <Button
                // style={{ background: '#000000', color: '#ffffff' }}
                colorScheme='blackAlpha'
                size={'md'}
                padding={'12px 44px'}
                borderRadius={'16px'}
                fontSize={16}
                fontWeight={400}
                lineHeight={'normal'}
                variant='outline'
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
    </Layout>
  )
}
