import { useEffect, useState } from 'react'
import { Text, Button, useMediaQuery, Box } from '@chakra-ui/react'
import { CheckCircleIcon } from '@/components/icons'
import { isEmail, isUrl } from '@/utilities'
import { InputPortfolio } from '@/components/Input/InputPortfolio'
import { InputEmail } from '@/components/Input/InputEmail'
import { InputName } from '@/components/Input/InputName'
import { Textarea } from '@/components/Input/Textarea'
import { InputPosition } from '../Input/InputPosition'

type FormType = {
  email?: string
  link?: string
  position?: string
  message?: string
  name?: string
}

export default function Form ({ hidden = [], defaultValue }: { hidden?: string[], defaultValue?: FormType }) {
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

  useEffect(() => {
    defaultValue && setEmail(defaultValue.email || '')
    defaultValue && setLink(defaultValue.link || '')
    defaultValue && setPosition(defaultValue.position || '')
    defaultValue && setMessage(defaultValue.message || '')
    defaultValue && setName(defaultValue.name || '')
  }, [defaultValue])

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

  return(
    <div>
      {
        hidden.includes('name') ? <div></div> : <InputName value={name} setValue={setName} isValidate={isValidate} placeholder='Your name' setError={setError}></InputName>
      }
      {
        hidden.includes('email') ? <div></div> : <InputEmail value={email} setValue={setEmail} isValidate={isValidate} setError={setError}></InputEmail>
      }
      {
        hidden.includes('position') ? <div></div> : <InputPosition value={position} setValue={setPosition} isValidate={isValidate} setError={setError}></InputPosition>
      }
      {
        hidden.includes('link') ? <div></div> : <InputPortfolio value={link} setValue={setLink} isValidate={isValidate} setError={setError}></InputPortfolio>
      }
      {
        hidden.includes('message') ? <div></div> : <Textarea value={message} setValue={setMessage} isValidate={isValidate} setError={setError}></Textarea>
      }

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
    </div>
  )
}