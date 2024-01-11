"use client"
import {
  Box,
  Center,
  Flex,
  Divider,
  Text,
  Heading,
  Container,
  useMediaQuery,
useDisclosure,
} from '@chakra-ui/react';
import { Header, Layout, ModalMenu } from '@/components'
// import Form from '@/components/Careers/Form'
import { useRouter } from 'next/navigation'

export default function Freelancers() {
  const { isOpen, onToggle } = useDisclosure()
  const router = useRouter()
  const onSlideActiveChange = (index: number) => {
  }

  const goBack = () => {
    router.back()
  }

  return (
    <Layout>
      <Header
        menuItems={[]}
        onClickToggle={onToggle}
        activeSlideIndex={1}
        onActiveSlideChange={onSlideActiveChange}
        dark={true}
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      <Center className='w-full h-full bg-black'>
        <Container maxWidth={'992'} className='h-full flex items-start md:items-center animate-page-fade' color='#707070'>
        <Center
          flex='1'
          flexDirection={'column'}
          alignItems={'flex-start'}
          className='px-2 pt-20 md:pt-8 pb-2 md:px-20 md:py-4 gap-y-1'>
            <Box maxWidth={'492px'} width={'100%'} className='mx-auto'>
              <Box onClick={goBack} className='text-xs uppercase cursor-pointer underline' color={'#f5f5f5'} opacity={0.4}>
                back to careers
              </Box>
              <Heading
                className='mt-3 mb-5 text-base md:text-[28px] 2xl:text-5xl uppercase leading-[normal] text-left mx-0 md:mx-auto md:tracking-[4px]'
                as={'h2'}
                color={'#f5f5f5'}>
                Freelancers
              </Heading>
              {/* <Form></Form> */}
            </Box>
          </Center>
        </Container>
      </Center>
    </Layout>
  )
}
