import { Input, InputGroup, InputLeftElement, FormControl, useMediaQuery } from '@chakra-ui/react'
import { UserIcon } from '../icons'
import { useEffect } from 'react'

const InputName = ({ value, setValue, isValidate = false, placeholder, setError }: { value: string, setValue: any, isValidate: boolean, placeholder: string, setError?: any }) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }
  const isError = (value === '' && isValidate)

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      name: isError
    }));
  }, [isError, setError])


  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={isMobileScreen ? '16px' : '20px'}>
        <InputLeftElement h={"100%"} pointerEvents='none' marginLeft={isMobileScreen ? "10px" : "24px"} width={isMobileScreen ? "18px" : "28px"}>
          <UserIcon width={isMobileScreen ? 14 : 28} height={isMobileScreen ? 14 : 28} color={isError ? '#D98282' : '#636363'} />
        </InputLeftElement>
        <Input
          height={isMobileScreen ? "40px" : "66px"}
          borderRadius={isMobileScreen ? "10px" : "20px"}
          size={isMobileScreen ? 'md' : 'lg'}
          color={isError ? '#D98282' : '#636363'}
          bgColor="#151515"
          border={`0.5px solid ${isError ? '#D98282' : 'transparent'}`}
          type='text'
          style={{ fontSize: isMobileScreen ? 12 : 16 }}
          value={value} onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 12 : 16 }}
          placeholder={placeholder}
          paddingLeft={isMobileScreen ? "36px" : "68px"} />
      </InputGroup>
    </FormControl>
  )
}

export {
  InputName
}