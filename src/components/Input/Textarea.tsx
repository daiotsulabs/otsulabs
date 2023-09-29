import { InputGroup, InputLeftElement, FormControl, Textarea as Input, useMediaQuery } from '@chakra-ui/react'
import { WriteIcon } from '../icons'
import { useEffect } from 'react'

const Textarea = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const isError = (value === '' && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      message: isError
    }));
  }, [isError, setError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement pointerEvents='none' marginLeft={isMobileScreen ? "10px" : "24px"} width={isMobileScreen ? "18px" : "28px"} mt={isMobileScreen ? 0 : 3}>
          <WriteIcon width={isMobileScreen ? 14 : 28} height={isMobileScreen ? 14 : 28} color={isError ? '#D98282' : '#636363'} />
        </InputLeftElement>
        <Input
          pt={isMobileScreen ? 3 : 21}
          size={isMobileScreen ? 'md' : 'lg'}
          maxHeight={isMobileScreen ? 350 : 400}
          minHeight={isMobileScreen ? 200 : 250}
          borderRadius={isMobileScreen ? 10 : 16}
          color={isError ? '#D98282' : '#636363'}
          bgColor="#151515"
          border={`1px solid ${isError ? '#D98282' : 'transparent'}`}
          value={value}
          onChange={handleInputChange}
          style={{ fontSize: isMobileScreen ? 12 : 16 }}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 12 : 16 }}
          placeholder='Write your message'
          paddingLeft={isMobileScreen ? "36px" : "68px"} />
      </InputGroup>
    </FormControl>
  )
}

export {
  Textarea
}