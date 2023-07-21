import { IconProps } from "./type"

export const CheckCircleIcon = ({ fill = 'none', color = '#000000', width = 20, height= 20 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill={fill}>
      <path d="M6.78906 10.5715L8.98549 12.3286C9.04448 12.3772 9.11355 12.412 9.18769 12.4306C9.26182 12.4491 9.33915 12.4509 9.41406 12.4358C9.48969 12.4216 9.56137 12.3913 9.62423 12.3469C9.68709 12.3025 9.73966 12.2451 9.77835 12.1786L13.2176 6.28577" stroke={color} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.0033 16.4643C13.8496 16.4643 16.9676 13.3463 16.9676 9.50005C16.9676 5.65378 13.8496 2.53577 10.0033 2.53577C6.15708 2.53577 3.03906 5.65378 3.03906 9.50005C3.03906 13.3463 6.15708 16.4643 10.0033 16.4643Z" stroke={color} strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}