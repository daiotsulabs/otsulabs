import { Input, InputGroup, InputLeftElement, FormControl } from '@chakra-ui/react'
import { LinkIcon } from '../icons'
import { useEffect } from 'react'

const InputLink = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {

  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const pattern = /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

  const isError = ((value === '' || !pattern.test(value)) && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      link: isError
  }));
  }, [isError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement pointerEvents='none' marginTop={'4px'}>
          <LinkIcon width={24} height={24} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Input
          borderRadius={20}
          size={'lg'}
          color={isError ? '#D98282' : '#727272'}
          border={`1px solid ${isError ? '#D98282' : '#B3B3B3'}`}
          type='value'
          value={value} onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit' }}
          placeholder='Link (optional)' />
      </InputGroup>
    </FormControl>
  )
}

export {
  InputLink
}