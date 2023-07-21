import { IconProps } from "./type"

export const ArrowRightIcon = ({ fill = 'none', color = '#000000', width = 26, height= 24 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 24" fill={fill}>
      <path d="M2.34375 12H23.6531" stroke={color} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.9141 17.6678L23.6512 12L17.9141 6.33228" stroke={color} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}