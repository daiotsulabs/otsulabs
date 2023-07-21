import { Input, InputGroup, InputLeftElement, FormControl } from '@chakra-ui/react'
import { UserIcon } from '../icons'
import { useEffect } from 'react'

const InputName = ({ value, setValue, isValidate = false, placeholder, setError }: { value: string, setValue: any, isValidate: boolean, placeholder: string, setError?: any }) => {

  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }
  const isError = (value === '' && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      name: isError
  }));
  }, [isError])


  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement pointerEvents='none' marginTop={'4px'}>
          <UserIcon width={24} height={24} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Input
          borderRadius={20}
          size={'lg'}
          color={isError ? '#D98282' : '#727272'}
          border={`1px solid ${isError ? '#D98282' : '#B3B3B3'}`}
          type='text'
          value={value} onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit' }}
          placeholder={placeholder} />
      </InputGroup>
    </FormControl>
  )
}

export {
  InputName
}