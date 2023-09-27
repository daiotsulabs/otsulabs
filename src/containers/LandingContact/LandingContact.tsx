"use client"
import { useState } from 'react'
import { Box, Center, Text, useDisclosure, Container, Button, useMediaQuery, Flex, Image } from '@chakra-ui/react'
import { ArrowRightIcon, CheckCircleIcon } from '@/components/icons'
import { InputLink } from '@/components/Input/InputLink'
import { InputEmail } from '@/components/Input/InputEmail'
import { InputName } from '@/components/Input/InputName'
import { Textarea } from '@/components/Input/Textarea'
import { isEmail, isUrl } from '@/utilities'
import { mcQueenDisplay } from '@/app/layout'
import axios from 'axios'

function LandingContact() {
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
    <Center className="w-full h-auto bg-black relative items-start md:items-center pt-[60px] md:pt-[100px]" bgImage={`url("/images/noise.png")`}>
      <Container maxWidth={'1200px'} className="px-10 md:px-[120px] 2xl:px-24 static md:absolute" top={!isMobileScreen ? '150px' : '0px'}>
        <Flex className='flex flex-col mt-0 md:mt-[15px] md:flex-row gap-x-4 items-center'>
          <Box flex={2} className="text-center md:text-left mx-auto w-full md:w-initial md:ml-auto">
            {
              isMobileScreen && <Text className={`${mcQueenDisplay.className} text-[20px] mb-[30px] font-medium`} color="#f5f5f5">Contact</Text>
            }
            <Box className="pt-0 pb-6 md:pb-8">
              <Text className={`${mcQueenDisplay.className} text-[16px] md:text-lg font-medium`} color="#f5f5f5">Art & Animation Director</Text>
              <Text className="text-[12px] md:text-[14px] font-normal text-[#636363]">erene@otsulabs.com</Text>
            </Box>
            <Box className="pt-0 pb-6 md:pb-8">
              <Text className={`${mcQueenDisplay.className} text-[16px] md:text-lg font-medium`} color="#f5f5f5">Operations & Management</Text>
              <Text className="text-[12px] md:text-[14px] font-normal text-[#636363]">khoa@otsulabs.com</Text>
            </Box>
            <Box className="pt-0 pb-6 md:pb-8">
              <Text className={`${mcQueenDisplay.className} text-[16px] md:text-lg font-medium`} color="#f5f5f5">Partnerships & Outreach</Text>
              <Text className="text-[12px] md:text-[14px] font-normal text-[#636363]">sewon@otsulabs.com</Text>
            </Box>
            <Text className="mt-[10px] mb-[0px] text-xs md:text-[14px] 2xl:text-[18px] font-bold text-white">
              <Flex alignItems={'center'} justifyContent={isMobileScreen ? 'center' : 'flex-start'} gap={2}>
                For project inquiries
                {
                  !isMobileScreen && <ArrowRightIcon color={'#ffffff'} width={20} height={20}></ArrowRightIcon>
                }
              </Flex>
              {
                isMobileScreen && <Flex className='mt-4' justifyContent={'center'} >
                  <Image
                    src="/icons/arrow-down.svg"
                    alt="arrow-down"
                    width={12}
                    height={12}
                  />
                </Flex>
              }
            </Text>
          </Box>
          <Box flex='3' className={`${isMobileScreen ? 'w-full' : ''} pb-8`}>
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
        </Flex>
      </Container>
    </Center>
  )
}

export {
  LandingContact
}
