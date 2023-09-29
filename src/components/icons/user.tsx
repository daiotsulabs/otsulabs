import { IconProps } from "./type"

export const UserIcon = ({ fill = 'none', color = '#000000', width = 28, height= 28 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28" fill={fill}>
      <path d="M13.7785 15.5119C16.176 15.5119 18.1196 13.5684 18.1196 11.1709C18.1196 8.77338 16.176 6.82983 13.7785 6.82983C11.381 6.82983 9.4375 8.77338 9.4375 11.1709C9.4375 13.5684 11.381 15.5119 13.7785 15.5119Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.36719 22.2839C7.14205 21.012 8.23107 19.9609 9.52956 19.2314C10.8281 18.502 12.2923 18.1189 13.7817 18.1189C15.271 18.1189 16.7353 18.502 18.0338 19.2314C19.3323 19.9609 20.4213 21.012 21.1962 22.2839" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7789 25.0622C20.0124 25.0622 25.0656 20.009 25.0656 13.7755C25.0656 7.542 20.0124 2.48877 13.7789 2.48877C7.54542 2.48877 2.49219 7.542 2.49219 13.7755C2.49219 20.009 7.54542 25.0622 13.7789 25.0622Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}