"use client"
import { Header, Layout, ModalMenu } from '@/components'
import { useState } from 'react'
import { Box, Center, Flex, Square, Stack, Divider, Text, useDisclosure, Heading, Container, Input, InputGroup, InputLeftElement, Button, FormControl, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import Image from 'next/image'
import { CheckCircleIcon, EmailIcon, LinkIcon, UserIcon, WriteIcon } from '@/components/icons'
import { InputLink } from '@/components/Input/InputLink'
import { InputEmail } from '@/components/Input/InputEmail'
import { InputName } from '@/components/Input/InputName'
import { Textarea } from '@/components/Input/Textarea'

export default function Contact() {
  const { isOpen, onToggle } = useDisclosure()
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
    if (!isValid || !email || !name || !link || !message) return
    setTimeout(() => {
      setLoading(false)
      setIsSubmitted(true)
    }, 1000)
    setLoading(true)
  }

  
  return (
    <Layout>
      <Header
        menuItems={["contact"]}
        onClickToggle={onToggle}
        dark={true}
        activeSlideIndex={1}
      />
      <ModalMenu in={isOpen} onClickToggle={onToggle} />
      <Center className='w-full h-full'>
        <Container maxWidth={'1200'}>
          <Flex color='white' className='wrap-content flex-col lg:flex-row'>
            <Center flex='1' flexDirection={'column'} alignItems={'flex-start'} className='px-24 py-4'>
              <Heading fontSize={48} marginBottom={'60px'} as={'h2'} color={'#000'}>CONTACT</Heading>
              <Text fontSize={20} color={'#727272'}>Got an idea? Reach out to us and let's get started. From concept to creation, we're here to guide you.</Text>
            </Center>
            <Box width={'2px'} height={'440px'} className='hidden lg:block'>
              <Divider orientation='vertical' color={'rgba(0, 0, 0, 0.40)'}></Divider>
            </Box>
            <Box flex='1' className='px-24 py-4'>
              <InputName value={name} setValue={setName} isValidate={isValidate} placeholder='Your name' setError={setError}></InputName>
              <InputEmail value={email} setValue={setEmail} isValidate={isValidate} setError={setError}></InputEmail>
              <InputLink value={link} setValue={setLink} isValidate={isValidate} setError={setError}></InputLink>
              <Textarea value={message} setValue={setMessage} isValidate={isValidate} setError={setError}></Textarea>
              <Button
                style={{ background: '#000000', color: '#ffffff' }}
                colorScheme='blackAlpha'
                className='w-full'
                size={'lg'}
                borderRadius={'20px'}
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
                <Text fontSize={16} marginTop='12px' color={'#727272'} fontWeight={400}>
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
