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
      <InputLeftElement h={"100%"} pointerEvents='none' marginLeft={isMobileScreen ? "10px" : "14px"} width={isMobileScreen ? "18px" : "24px"}>
          <PositionIcon width={isMobileScreen ? 14 : 20} height={isMobileScreen ? 14 : 20} color={ isError ? '#D98282' : '#A0A0A0' } />
        </InputLeftElement>
        <Select
          height={isMobileScreen ? "40px" : "48px"}
          borderRadius={isMobileScreen ? "10px" : "20px"}
          size={isMobileScreen ? 'md' : 'lg'}
          color={isError ? '#D98282' : '#727272'}
          bgColor="#151515"
          border={`1px solid ${isError ? '#D98282' : 'transparent'}`}
          onChange={handleInputChange}
          _placeholder={{ color: isError ? '#D98282' : 'inherit', fontSize: isMobileScreen ? 12 : 14 }}
          style={{ paddingLeft: '40px', fontSize: isMobileScreen ? 12 : 14 }}
          placeholder='Position'
          >
            <option value='2D Animation' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>2D Animation</option>
            <option value='3D Animation' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>3D Animation</option>
            <option value='2D Artist' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>2D Artist</option>
            <option value='Character Designer' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>Character Designer</option>
            <option value='Background Artist' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>Background Artist</option>
            <option value='Storyboard Artist' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>Storyboard Artist</option>
            <option value='Mangaka' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>Mangaka</option>
            <option value='Editor' className='!bg-[#151515]' style={{ fontSize: isMobileScreen ? 12 : 14 }}>Editor</option>
          </Select>
      </InputGroup>
    </FormControl>
  )
}

export {
  InputPosition
}