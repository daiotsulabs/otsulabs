import { Input, InputGroup, InputLeftElement, FormControl, useMediaQuery } from '@chakra-ui/react'
import { LinkIcon } from '../icons'
import { useEffect, useState } from 'react'
import { isUrl } from '@/utilities'

const InputPortfolio = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const isError = ((value === '' || !isUrl(value)) && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      link: isError
  }));
  }, [isError, isValidate, setError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement pointerEvents='none' marginTop={isMobileScreen ? '0px' : '4px'}>
          <LinkIcon width={isMobileScreen ? 18 : 24} height={isMobileScreen ? 18 : 24} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Input
          borderRadius={isMobileScreen ? 10 : 20}
          size={isMobileScreen ? 'md' : 'lg'}
          color={isError ? '#D98282' : '#727272'}
          border={`1px solid ${isError ? '#D98282' : '#B3B3B3'}`}
          type='value'
          value={value} onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 14 : 16 }}
          placeholder='Link to portfolio' />
      </InputGroup>
    </FormControl>
  )
}

export {
  InputPortfolio
}