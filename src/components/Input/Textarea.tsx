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
        <InputLeftElement pointerEvents='none' marginTop={isMobileScreen ? '0px' : '4px'}>
          <WriteIcon width={isMobileScreen ? 18 : 24} height={isMobileScreen ? 18 : 24} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Input
          size={isMobileScreen ? 'md' : 'lg'}
          maxHeight={isMobileScreen ? 350 : 400}
          minHeight={isMobileScreen ? 200 : 250}
          borderRadius={isMobileScreen ? 10 : 20}
          color={isError ? '#D98282' : '#727272'}
          border={`1px solid ${isError ? '#D98282' : '#B3B3B3'}`}
          value={value}
          onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 14 : 16 }}
          paddingLeft={'2.6rem'}
          placeholder='Write your message' />
      </InputGroup>
    </FormControl>
  )
}

export {
  Textarea
}