import { Input, InputGroup, InputLeftElement, FormControl } from '@chakra-ui/react'
import { EmailIcon } from '../icons'
import { useEffect } from 'react'

const InputEmail = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {

  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  const isError = ((value === '' || !pattern.test(value)) && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      email: isError
  }));
  }, [isError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement pointerEvents='none' marginTop={'4px'}>
          <EmailIcon width={24} height={24} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Input
          borderRadius={20}
          size={'lg'}
          color={isError ? '#D98282' : '#727272'}
          border={`1px solid ${isError ? '#D98282' : '#B3B3B3'}`}
          type='email'
          value={value} onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit' }}
          placeholder='Email Address' />
      </InputGroup>
    </FormControl>
  )
}

export {
  InputEmail
}