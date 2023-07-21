"use client"
import { Header, Layout, ModalMenu, StyledPagination } from '@/components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useRef, useState } from 'react'
import { jobs } from '@/components/Careers'
import type { Job } from '@/components/Careers'
import { Center, Container, Heading, useDisclosure, Text, Flex, Box, Divider, Button, useMediaQuery } from '@chakra-ui/react'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@/components/icons/arrow-left'
// import Form from '@/components/Careers/Form'
import { isEmail, isUrl } from '@/utilities'
import { InputEmail } from '@/components/Input/InputEmail'
import { InputName } from '@/components/Input/InputName'
import { Textarea } from '@/components/Input/Textarea'
import { InputPortfolio } from '@/components/Input/InputPortfolio'
import { CheckCircleIcon } from '@/components/icons'

export default function JobId () {
  const { isOpen, onToggle } = useDisclosure()
  const swiperRef = useRef()
  const [tab, setTab] = useState('join us')
  const path = usePathname()
  const router = useRouter()
  const [activeSlice, setActiveSlide] = useState(1)
  const [job, setJob] = useState<Job>()
  const tabs = ["join us", "freelancers"]

  useEffect(() => {
    setJob(jobs.find(j => j.slug === path.split('/')[2]))
    job && setPosition(job.name)
  }, [job, path])

  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    email: true,
    link: true,
    position: true,
    message: true,
    name: true
  })
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [message, setMessage] = useState('')
  const [isValidate, setIsValidate] = useState(false)

  const onClickValidateForm = () => {
    if (loading) return
    setIsValidate(true)
    const isValid = Object.values(error).every(e => !e)
    if (!isValid || !isEmail(email) || !name || !isUrl(link) || !position || !message) return
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1000)
    setLoading(true)
  }
  const apply = () => {
    (swiperRef.current as any).slideNext()
  }

  const onSlideActiveChange = (index: number) => {
    setActiveSlide(index)
  }

  const goBack = () => {
    router.back()
  }

  const [currenIndex, setCurrentIndex] = useState(0)
  const handleSlideChange = (swiper: any) => {
    setCurrentIndex(swiper.activeIndex)
  }

  return (
    <Layout>
      <Header
        menuItems={tabs}
        onClickToggle={onToggle}
        activeSlideIndex={2}
        onActiveSlideChange={onSlideActiveChange}
        dark={true}
      />
      <ModalMenu in={isOpen} onClickToggle={onToggle} />
      <StyledPagination dark={true} activeIndex={currenIndex} total={2} />
      {
        job ? <Swiper
          className='w-full h-full'
          slidesPerView={1}
          direction='vertical'
          mousewheel={true}
          speed={1000}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}>
          <SwiperSlide>
            <Container maxWidth={'992'} className='h-full pt-16'>
              <Center
                flex='1'
                flexDirection={'column'}
                alignItems={'flex-start'}
                className='px-2 pt-8 pb-2 md:px-24 md:py-4 gap-y-1'>
                <Box onClick={goBack}>
                  <ArrowLeftIcon></ArrowLeftIcon>
                </Box>
                <Heading
                  className='mt-2 text-base md:text-[28px] 2xl:text-5xl uppercase leading-[normal] text-left md:text-center'
                  as={'h2'}
                  color={'#000'}>
                    {job?.name}
                  </Heading>
                  <Text className='text-[8px] md:text-xs uppercase tracking-[0.6px] leading-[normal] mb-6 md:mb-8' color={'#CCC'}>{job?.time}</Text>
                <Flex gap={6} className='flex-col md:flex-row'>
                  <Box className='flex-1'>
                    <Heading
                      className='text-xs mb-0 md:mb-2 md:text-base 2xl:text-[28px] 2xl:text-lg uppercase leading-[normal]'
                      as={'h4'}
                      color={'#727272'}>Responsibilities:</Heading>
                    <ul className='list-disc pl-6'>
                      {
                        job?.responsibilities.map((r, index) => (
                          <li key={index}>
                            <Text className='text-[10px] md:text-sm 2xl:text-base leading-[normal]' color={'#727272'}>{r}</Text>
                          </li>
                        ))
                      }
                    </ul>
                  </Box>
                  <Box className='flex-1'>
                    <Heading
                      className='text-xs mb-0 md:mb-2 md:text-base 2xl:text-[28px] 2xl:text-lg uppercase leading-[normal]'
                      as={'h4'}
                      color={'#727272'}>Qualifications:</Heading>
                    <ul className='list-disc pl-6'>
                      {
                        job?.qualifications.map((r, index) => (
                          <li key={index}>
                            <Text className='text-[10px] md:text-sm 2xl:text-base leading-[normal]' color={'#727272'}>{r}</Text>
                          </li>
                        ))
                      }
                    </ul>
                  </Box>
                </Flex>
                <Divider
                  borderColor={'rgba(0, 0, 0, 0.40)'}
                  className='my-6 hidden md:block'
                />
                <Flex alignItems={'flex-end'}>
                  <Box>
                    <Heading
                      className='text-xs mb-0 md:mb-2 md:text-base 2xl:text-[28px] 2xl:text-lg uppercase leading-[normal]'
                      as={'h4'}
                      color={'#727272'}>We offer:</Heading>
                    <ul className='list-disc pl-6'>
                      {
                        job?.qualifications.map((r, index) => (
                          <li key={index}>
                            <Text className='text-[10px] md:text-sm 2xl:text-base leading-[normal]' color={'#727272'}>{r}</Text>
                          </li>
                        ))
                      }
                    </ul>
                  </Box>
                  <Button
                    // style={{ background: '#000000', color: '#ffffff' }}
                    colorScheme='blackAlpha'
                    size={'md'}
                    className='py-2 md:py-2 px-4 md:px-8 2xl:px-11 rounded-[10px] md:rounded-[16px] hidden md:block flex-[1_1_100px] md:flex-[1_1_120px]'
                    fontSize={16}
                    fontWeight={400}
                    lineHeight={'normal'}
                    variant='outline'
                    onClick={apply}
                    _hover={{
                      background: '#000000',
                      color: '#ffffff'
                    }}
                  >
                    Apply
                  </Button>
                </Flex>
              </Center>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container maxWidth={'992'} className='h-full pt-16'>
              <Center
                flex='1'
                flexDirection={'column'}
                alignItems={'flex-start'}
                className='px-2 pt-8 pb-2 md:px-24 md:py-4 gap-y-1'>
                <Box onClick={goBack}>
                  <ArrowLeftIcon></ArrowLeftIcon>
                </Box>
                <Heading
                  className='mt-2 text-base md:text-[28px] 2xl:text-5xl uppercase leading-[normal] text-left md:text-center mx-0 md:mx-auto md:tracking-[4px]'
                  as={'h2'}
                  color={'#000'}>
                    <span className='hidden md:inline'>APPLY </span>
                    {job?.name}
                </Heading>
                <Text className='text-[8px] md:text-xs uppercase tracking-[0.6px] leading-[normal] mb-6 md:mb-8 block md:hidden' color={'#CCC'}>{job?.time}</Text>
                <Box maxWidth={'492px'} width={'100%'} className='mx-auto'>
                  {/* <Form hidden={['position']} defaultValue={{ position: job?.name }}></Form> */}
                  <InputName value={name} setValue={setName} isValidate={isValidate} placeholder='Your name' setError={setError}></InputName>
                  <InputEmail value={email} setValue={setEmail} isValidate={isValidate} setError={setError}></InputEmail>
                  <InputPortfolio value={link} setValue={setLink} isValidate={isValidate} setError={setError}></InputPortfolio>
                  <Textarea value={message} setValue={setMessage} isValidate={isValidate} setError={setError}></Textarea>

                  <Button
                    style={{ background: '#000000', color: '#ffffff' }}
                    colorScheme='blackAlpha'
                    className='w-full'
                    size={isMobileScreen ? 'md' : 'lg'}
                    borderRadius={isMobileScreen ? 10 : 20}
                    fontSize={16}
                    fontWeight={400}
                    lineHeight={'normal'}
                    isLoading={loading}
                    loadingText='Sending'
                    variant='outline'
                    spinnerPlacement='end'
                    onClick={onClickValidateForm}  
                  >
                    Apply
                    {
                      isSubmitted && <>
                        <span className='ml-1'></span>
                        <CheckCircleIcon width={18} height={18} color='#ffffff'></CheckCircleIcon>
                      </>
                    }
                  </Button>
                  {
                    isSubmitted &&
                    <Text fontSize={isMobileScreen ? 10 : 16} marginTop={isMobileScreen ? '6px': '10px'} color={'#727272'} fontWeight={400}>
                      Thanks for getting in touch! Your message is delivered and we will do our best to reply to you soon.
                    </Text>
                  }
                </Box>
              </Center>
            </Container>
          </SwiperSlide>
        </Swiper>
        : <></>
      }
    </Layout>
  )
}
