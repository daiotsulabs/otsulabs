"use client"
import { Header, Layout, ModalMenu } from '@/components'
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
import axios from 'axios'

export default function JobId() {
  const { isOpen, onToggle } = useDisclosure()
  const swiperRef = useRef()
  const path = usePathname()
  const router = useRouter()
  const [activeSlice, setActiveSlide] = useState(1)
  const [job, setJob] = useState<Job>()
  const tabs = ["join us", "freelancers"]

  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const [email, setEmail] = useState('')
  const [position, setPosition] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    email: true,
    portfolio: true,
    position: true,
    message: true,
    name: true
  })
  const [name, setName] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [message, setMessage] = useState('')
  const [isValidate, setIsValidate] = useState(false)

  useEffect(() => {
    setJob(jobs.find(j => j.slug === path.split('/')[2]))
    job && setPosition(job.name)
    setError((prevState: any) => ({
      ...prevState,
      position: !position
    }));
  }, [job, path, setError, position])

  const onClickValidateForm = () => {
    if (loading) return
    setIsValidate(true)
    console.log(error)
    const isValid = Object.values(error).every(e => !e)
    if (!isValid || !isEmail(email) || !name || !isUrl(portfolio) || !position || !message) return
    const url = 'https://api.oldeus.com/apply'
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('portfolio', portfolio)
    formData.append('position', position)
    formData.append('message', message)
    setLoading(true)
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then((res) => {
        setIsSubmitted(true)
      })
      .catch((er) => console.log(er))
      .finally(() => {
        setLoading(false)
      })
  }
  const apply = () => {
    (swiperRef.current as any).slideNext()
  }

  const toInformation = () => {
    (swiperRef.current as any).slidePrev()
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
        menuItems={[]}
        onClickToggle={onToggle}
        activeSlideIndex={1}
        onActiveSlideChange={onSlideActiveChange}
        dark={true}
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      {
        job ? <Swiper
          className='w-full h-full bg-black'
          slidesPerView={1}
          direction='vertical'
          mousewheel={false}
          allowTouchMove={false}
          speed={1000}
          onSwiper={(swiper: any) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}>
          <SwiperSlide>
            <Container maxWidth={'992'} className='h-full flex items-start md:items-center animate-page-fade' color='#707070'>
              <Center
                flex='1'
                flexDirection={'column'}
                alignItems={'flex-start'}
                className='px-2 pt-20 md:pt-8 pb-2 md:px-20 md:py-4 gap-y-1'>
                <Box onClick={goBack} className='uppercase underline text-xs cursor-pointer' color="#f5f5f5" opacity={0.4} letterSpacing={1.2}>
                  Back to careers
                </Box>
                <Heading
                  className='mt-2 text-base md:text-[28px] uppercase leading-[normal] text-left md:text-center mb-[18px]'
                  as={'h2'}
                  color={'#f5f5f5'}
                  letterSpacing={4}>
                  {job?.name}
                </Heading>
                <Text className='text-[8px] md:text-xs uppercase tracking-[0.6px] leading-[normal] mb-6 md:mb-8' color={'#CCC'}>{job?.time}</Text>
                <Box className='max-h-[calc(400px)] pr-2 md:pr-10 overflow-y-auto scroll swiper-no-mousewheel'>
                  <Flex gap={6} className='flex-col md:flex-row'>
                    <Box className='flex-1'>
                      <Heading
                        className='text-xs mb-0 md:mb-2 md:text-base 2xl:text-[28px] 2xl:text-lg uppercase leading-[normal]'
                        as={'h4'}
                        color={'#f5f5f5'}>Responsibilities:</Heading>
                      <ul className='list-disc pl-6'>
                        {
                          job?.responsibilities.map((r, index) => (
                            <li key={index}>
                              <Text className='text-[10px] md:text-sm 2xl:text-base leading-[normal]'>{r}</Text>
                            </li>
                          ))
                        }
                      </ul>
                    </Box>
                    <Box className='flex-1'>
                      <Heading
                        className='text-xs mb-0 md:mb-2 md:text-base 2xl:text-[28px] 2xl:text-lg uppercase leading-[normal]'
                        as={'h4'}
                        color={'#f5f5f5'}>Qualifications:</Heading>
                      <ul className='list-disc pl-6'>
                        {
                          job?.qualifications.map((r, index) => (
                            <li key={index}>
                              <Text className='text-[10px] md:text-sm 2xl:text-base leading-[normal]'>{r}</Text>
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
                  <Flex alignItems={'flex-end'} className='mt-6 md:mt-0'>
                    <Box>
                      <Heading
                        className='text-xs mb-0 md:mb-2 md:text-base 2xl:text-[28px] 2xl:text-lg uppercase leading-[normal]'
                        as={'h4'}
                        color={'#f5f5f5'}>We offer:</Heading>
                      <ul className='list-disc pl-6'>
                        {
                          job?.offers.map((r, index) => (
                            <li key={index}>
                              <Text className='text-[10px] md:text-sm 2xl:text-base leading-[normal]'>{r}</Text>
                            </li>
                          ))
                        }
                      </ul>
                    </Box>
                  </Flex>
                </Box>
                <Center className='w-full mt-[16px] md:mt-[36px]'>
                  <Button
                    style={{ background: '#ffffff', color: '#000000' }}
                    colorScheme='blackAlpha'
                    size={'md'}
                    className='py-2 md:py-2 px-4 md:px-8 2xl:px-11 rounded-full md:flex justify-center min-w-[100px]'
                    fontSize={16}
                    fontWeight={400}
                    variant='outline'
                    onClick={apply}
                    height={"40px"}
                  >
                    Apply
                  </Button>
                </Center>
              </Center>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
            <Container maxWidth={'992'} className='h-full flex items-start md:items-center' color='#707070'>
              <Center
                flex='1'
                flexDirection={'column'}
                alignItems={'flex-start'}
                className='px-2 pt-20 md:pt-8 pb-2 md:px-20 md:py-4 gap-y-1'>
                <Box maxWidth={'492px'} width={'100%'} className='mx-auto'>
                  <Box onClick={toInformation} className='text-xs uppercase cursor-pointer underline' color={'#f5f5f5'} opacity={0.4}>
                    back to description
                  </Box>
                  <Heading
                    className='mt-3 mb-5 text-base md:text-[28px] 2xl:text-5xl uppercase leading-[normal] text-left mx-0 md:mx-auto md:tracking-[4px]'
                    as={'h2'}
                    color={'#f5f5f5'}>
                    {job?.name}
                  </Heading>
                  {/* <Form hidden={['position']} defaultValue={{ position: job?.name }}></Form> */}
                  <InputName value={name} setValue={setName} isValidate={isValidate} placeholder='Your name' setError={setError}></InputName>
                  <InputEmail value={email} setValue={setEmail} isValidate={isValidate} setError={setError}></InputEmail>
                  <InputPortfolio value={portfolio} setValue={setPortfolio} isValidate={isValidate} setError={setError}></InputPortfolio>
                  <Textarea value={message} setValue={setMessage} isValidate={isValidate} setError={setError}></Textarea>

                  <Button
                    style={{ background: '#ffffff', color: '#000000' }}
                    className='w-full'
                    size={isMobileScreen ? 'md' : 'lg'}
                    borderRadius={isMobileScreen ? 10 : 16}
                    fontSize={16}
                    fontWeight={400}
                    lineHeight={'normal'}
                    isLoading={loading}
                    loadingText='Sending'
                    variant='outline'
                    spinnerPlacement='end'
                    onClick={onClickValidateForm}
                    h={isMobileScreen ? "40px" : "48px"}
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
                    <Text fontSize={isMobileScreen ? 10 : 16} marginTop={isMobileScreen ? '6px' : '10px'} fontWeight={400}>
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
