import { InputGroup, InputLeftElement, FormControl, Textarea as Input } from '@chakra-ui/react'
import { WriteIcon } from '../icons'
import { useEffect } from 'react'

const Textarea = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {

  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const isError = (value === '' && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      message: isError
  }));
  }, [isError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement pointerEvents='none' marginTop={'4px'}>
          <WriteIcon width={24} height={24} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Input
          size={'lg'}
          maxHeight={300}
          borderRadius={20}
          color={isError ? '#D98282' : '#727272'}
          border={`1px solid ${isError ? '#D98282' : '#B3B3B3'}`}
          value={value}
          onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit' }}
          paddingLeft={'2.5rem'}
          placeholder='Write your message' />
      </InputGroup>
    </FormControl>
  )
}

export {
  Textarea
}