import { IconProps } from "./type"

export const ArrowUpCircleIcon = ({ fill = 'none', color = '#000000', width = 20, height= 20 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill={fill}>
      <path d="M14 11.5L10 7.5L6 11.5" stroke="black" strokeLinecap="round"/>
      <circle cx="10" cy="10" r="9.5" transform="rotate(-180 10 10)" stroke={color}/>
    </svg>
  )
}