import { InputGroup, InputLeftElement, FormControl, Select, useMediaQuery } from '@chakra-ui/react'
import { PositionIcon } from '../icons'
import { useEffect } from 'react'

const InputPosition = ({ value, setValue, isValidate = false, setError }: { value: string, setValue: any, isValidate: boolean, setError?: any }) => {
  const [isMobileScreen] = useMediaQuery('(max-width: 768px)')
  const handleInputChange = (e: any) => {
    setValue(e.target.value)
  }

  const isError = value === '' && isValidate

  useEffect(() => {
    setError((prevState: any) => ({
      ...prevState,
      position: isError
  }));
  }, [isError, setError])

  return (
    <FormControl isInvalid={isError}>
      <InputGroup marginY={'20px'}>
        <InputLeftElement pointerEvents='none' marginTop={isMobileScreen ? '0px' : '4px'}>
          <PositionIcon width={isMobileScreen ? 18 : 24} height={isMobileScreen ? 18 : 24} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Select
          borderRadius={isMobileScreen ? 10 : 20}
          size={isMobileScreen ? 'md' : 'lg'}
          color={isError ? '#D98282' : '#727272'}
          border={`1px solid ${isError ? '#D98282' : '#B3B3B3'}`}
          onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 14 : 16 }}
          style={{ paddingLeft: '40px', fontSize: isMobileScreen ? 14 : 16 }}
          placeholder='Position'
          >
            <option value='2D Animation' style={{ fontSize: isMobileScreen ? 14 : 16 }}>2D Animation</option>
            <option value='3D Animation' style={{ fontSize: isMobileScreen ? 14 : 16 }}>3D Animation</option>
            <option value='2D Artist' style={{ fontSize: isMobileScreen ? 14 : 16 }}>2D Artist</option>
            <option value='Character Designer' style={{ fontSize: isMobileScreen ? 14 : 16 }}>Character Designer</option>
            <option value='Background Artist' style={{ fontSize: isMobileScreen ? 14 : 16 }}>Background Artist</option>
            <option value='Storyboard Artist' style={{ fontSize: isMobileScreen ? 14 : 16 }}>Storyboard Artist</option>
            <option value='Mangaka' style={{ fontSize: isMobileScreen ? 14 : 16 }}>Mangaka</option>
            <option value='Editor' style={{ fontSize: isMobileScreen ? 14 : 16 }}>Editor</option>
          </Select>
      </InputGroup>
    </FormControl>
  )
}

export {
  InputPosition
}