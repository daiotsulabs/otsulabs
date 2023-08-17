import { Input, InputGroup, InputLeftElement, FormControl, useMediaQuery } from '@chakra-ui/react'
import { LinkIcon } from '../icons'
import { useEffect } from 'react'

const InputLink = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const pattern = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

  const isError = value ? (!pattern.test(value) && isValidate) : false

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      link: isError
    }));
  }, [isError, setError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement h={"100%"} pointerEvents='none' marginLeft={isMobileScreen ? "10px" : "14px"} width={isMobileScreen ? "18px" : "24px"}>
          <LinkIcon width={isMobileScreen ? 14 : 20} height={isMobileScreen ? 14 : 20} color={isError ? '#D98282' : '#A0A0A0'} />
        </InputLeftElement>
        <Input
          height={isMobileScreen ? "40px" : "48px"}
          borderRadius={isMobileScreen ? 10 : 16}
          size={isMobileScreen ? 'md' : 'lg'}
          color={isError ? '#D98282' : '#727272'}
          bgColor="#151515"
          border={`0.5px solid ${isError ? '#D98282' : 'transparent'}`}
          type='value'
          value={value} onChange={handleInputChange}
          style={{ fontSize: isMobileScreen ? 12 : 14 }}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 12 : 14 }}
          placeholder='Link (optional)'
          paddingLeft="40px" />
      </InputGroup>
    </FormControl>
  )
}

export {
  InputLink
}