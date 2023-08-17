"use client"
import { Header, Layout, ModalMenu } from '@/components'
import { useState } from 'react'
import { Box, Center, Text, useDisclosure, Container, Button, useMediaQuery } from '@chakra-ui/react'
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
    const url = 'https://api.oldeus.com/contact'
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('link', link)
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

  return (
    <Layout>
      <Header
        menuItems={[]}
        onClickToggle={onToggle}
        dark={true}
        activeSlideIndex={1}
      />
      {isOpen && <ModalMenu in={isOpen} onClickToggle={onToggle} />}
      <Center className='w-full h-full bg-black'>
        <Container maxWidth={540} className='h-full px-6 md:px-auto md:h-auto pt-20 md:pt-0'>
          <Box className='text-md md:text-[28px] text-[#f5f5f5] font-bold uppercase' textAlign={isMobileScreen ? "left" : "center"} letterSpacing={4}>Contact</Box>
          {isMobileScreen && <Box
            color="#707070"
            className='text-xs'
            maxWidth={284}
            mb={8}
          >Got an idea? Reach out to us and let&apos;s get started. From concept to creation, we&apos;re here to guide you.</Box>}
          <Box flex='1' className='pb-8'>
            <InputName value={name} setValue={setName} isValidate={isValidate} placeholder='Your name' setError={setError}></InputName>
            <InputEmail value={email} setValue={setEmail} isValidate={isValidate} setError={setError}></InputEmail>
            <InputLink value={link} setValue={setLink} isValidate={isValidate} setError={setError}></InputLink>
            <Textarea value={message} setValue={setMessage} isValidate={isValidate} setError={setError}></Textarea>
            <Button
              style={{ background: '#ffffff', color: '#000000' }}
              colorScheme='whiteAlpha'
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
              borderWidth={0.5}
              borderColor='#5f5f5'
              h={isMobileScreen ? "40px" : "48px"}
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
