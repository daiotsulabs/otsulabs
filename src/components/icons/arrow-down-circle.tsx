import { IconProps } from "./type"

export const ArrowDownCircleIcon = ({ fill = 'none', color = '#000000', width = 20, height= 21 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 21" fill={fill}>
      <path d="M6 10L10 14L14 10" stroke={color} strokeLinecap="round"/>
      <circle cx="10" cy="10.5" r="9.5" stroke={color}/>
    </svg>
  )
}