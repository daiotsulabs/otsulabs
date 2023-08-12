import { Input, InputGroup, InputLeftElement, FormControl, useMediaQuery } from '@chakra-ui/react'
import { EmailIcon } from '../icons'
import { useEffect } from 'react'
import { isEmail } from '@/utilities'

const InputEmail = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }


  const isError = ((value === '' || !isEmail(value)) && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      email: isError
    }));
  }, [isError, setError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement h={"100%"} pointerEvents='none' marginLeft={"24px"} width={isMobileScreen ? "18px" : "24px"}>
          <EmailIcon width={isMobileScreen ? 18 : 24} height={isMobileScreen ? 18 : 24} color={isError ? '#D98282' : '#A0A0A0'} />
        </InputLeftElement>
        <Input
          height={isMobileScreen ? "44px" : "66px"}
          borderRadius={isMobileScreen ? 10 : 20}
          size={isMobileScreen ? 'md' : 'lg'}
          color={isError ? '#D98282' : '#727272'}
          bgColor="#151515"
          border={`0.5px solid ${isError ? '#D98282' : 'transparent'}`}
          type='email'
          value={value} onChange={handleInputChange}
          style={{ fontSize: isMobileScreen ? 14 : 16 }}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 14 : 16 }}
          placeholder='Email Address'
          paddingLeft="64px" />
      </InputGroup>
    </FormControl>
  )
}

export {
  InputEmail
}