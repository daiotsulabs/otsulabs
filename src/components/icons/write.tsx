import { IconProps } from "./type"

export const WriteIcon = ({ fill = 'none', color = '#000000', width = 28, height= 28 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 28 28" fill={fill}>
      <path d="M2.49219 25.0623H21.5928" stroke={color} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.9124 18.9848L7.70312 19.9224L8.57133 14.6437L20.2574 2.99239C20.4188 2.82964 20.6109 2.70046 20.8225 2.6123C21.0341 2.52415 21.261 2.47876 21.4903 2.47876C21.7195 2.47876 21.9465 2.52415 22.1581 2.6123C22.3697 2.70046 22.5617 2.82964 22.7231 2.99239L24.5637 4.83299C24.7265 4.99441 24.8557 5.18646 24.9438 5.39806C25.032 5.60966 25.0774 5.83662 25.0774 6.06585C25.0774 6.29507 25.032 6.52203 24.9438 6.73363C24.8557 6.94523 24.7265 7.13728 24.5637 7.2987L12.9124 18.9848Z" stroke={color} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}