"use client"
import { Header, Layout, ModalMenu } from '@/components'
import { useState } from 'react'
import { Box, Center, Flex, Divider, Text, useDisclosure, Heading, Container, Button, useMediaQuery } from '@chakra-ui/react'
import { CheckCircleIcon } from '@/components/icons'
import { InputLink } from '@/components/Input/InputLink'
import { InputEmail } from '@/components/Input/InputEmail'
import { InputName } from '@/components/Input/InputName'
import { Textarea } from '@/components/Input/Textarea'
import { isEmail, isUrl } from '@/utilities'
import axios from 'axios'

export default function Contact() {
  const { isOpen, onToggle } = useDisclosure()
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({
    email: true,
    link: true,
    message: true,
    name: true
  })
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [message, setMessage] = useState('')
  const [isValidate, setIsValidate] = useState(false)

  const onClickValidateForm = () => {
    if (isSubmitted || loading) return
    setIsValidate(true)
    const isValid = Object.values(error).every(e => !e)
    if (!isValid || !isEmail(email) || (link && !isUrl(link)) || !name || !message) return
    const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd2ICKgb7Ez67XjrFTlG7BV2R2PtmnBgHSiI7wuzq9R8BFuFQ/formResponse'
    const formData = new FormData()
    formData.append('entry.1612312889', name)
    formData.append('entry.1511487044', email)
    formData.append('entry.1198144821', link)
    formData.append('entry.1436747493', message)
    formData.append('dlut', '1690296662893')
    formData.append('fvv', '1')
    formData.append('partialResponse', JSON.stringify([null,null,"8604501822367546106"]))
    formData.append('pageHistory', '0')
    formData.append('fbzx', '8604501822367546106')
    setLoading(true)
    axios.post(url, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Upgrade-Insecure-Requests': 1,
        'Dnt': 1,
        'Origin': 'https://docs.google.com',
        'Referer': 'https://docs.google.com/'
      }
    })
      .then((res) => console.log(res))
      .catch((er) => console.log(er))
      .finally(() => {
        setLoading(false)
        setIsSubmitted(true)
      })
  }

  return (
    <Layout>
      <Header
        menuItems={["contact"]}
        onClickToggle={onToggle}
        dark={true}
        activeSlideIndex={1}
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      <Center className='w-full h-full'>
        <Container maxWidth={'1200'} className='h-full md:h-auto pt-14 md:pt-0'>
          <Flex color='white' className='wrap-content flex-col md:flex-row'>
            <Center
              flex='1'
              flexDirection={'column'}
              alignItems={'flex-start'}
              className='px-2 pt-8 pb-2 md:px-16 2xl:px-24 md:py-4'>
              <Heading
                className='text-base mb-2 md:text-[28px] 2xl:text-5xl md:mb-[36px] md:mb-16 leading-[normal] uppercase'
                as={'h2'}
                color={'#000'}>CONTACT</Heading>
              <Text className='text-xs md:text-base 2xl:text-xl leading-[normal]' color={'#727272'}>Got an idea? Reach out to us and let&apos;s get started. From concept to creation, we&apos;re here to guide you.</Text>
            </Center>
            <Box className='hidden md:block md:w-0.5 md:h-96 mx-auto'>
              <Divider
                orientation={isMobileScreen ? 'horizontal' : 'vertical'}
                width={'100%!important'}
                height={'100%!important'}
                borderColor={'rgba(0, 0, 0, 0.40)'}></Divider>
            </Box>
            <Box flex='1' className='px-2 pb-8 pt-2 md:px-16 2xl:px-24 md:py-4'>
              <InputName value={name} setValue={setName} isValidate={isValidate} placeholder='Your name' setError={setError}></InputName>
              <InputEmail value={email} setValue={setEmail} isValidate={isValidate} setError={setError}></InputEmail>
              <InputLink value={link} setValue={setLink} isValidate={isValidate} setError={setError}></InputLink>
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
                Send
                {
                  isSubmitted && <>
                    <span className='ml-1'></span>
                    <CheckCircleIcon width={18} height={18} color='#ffffff'></CheckCircleIcon>
                  </>
                }
              </Button>
              {
                isSubmitted &&
                <Text className='leading-[normal]' fontSize={isMobileScreen ? 10 : 16} marginTop={isMobileScreen ? '6px' : '10px'} color={'#727272'} fontWeight={400}>
                  Thanks for getting in touch! Your message is delivered and we will do our best to reply to you soon.
                </Text>
              }
            </Box>
          </Flex>
        </Container>
      </Center>
    </Layout>
  )
}

// entry.1612312889: qwrqwr
// entry.1511487044: qwrqwr
// entry.1198144821: qwrwq
// entry.1436747493: qwrqwr
// fvv: 1
// partialResponse: [null,null,"-6853388364090563258"]
// pageHistory: 0
// fbzx: -6853388364090563258
