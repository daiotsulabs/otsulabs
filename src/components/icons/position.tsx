import { IconProps } from "./type"

export const PositionIcon = ({ fill = 'none', color = '#000000', width = 25, height= 25 }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 25 25" fill={fill}>
      <path d="M23.2835 18.1429V21.5715C23.2835 22.0261 23.1029 22.4621 22.7814 22.7836C22.4599 23.1051 22.0239 23.2857 21.5692 23.2857H18.1406" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.1406 1H21.5692C22.0239 1 22.4599 1.18061 22.7814 1.5021C23.1029 1.82359 23.2835 2.25963 23.2835 2.71429V6.14286" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 6.14286V2.71429C1 2.25963 1.18061 1.82359 1.5021 1.5021C1.82359 1.18061 2.25963 1 2.71429 1H6.14286" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.14286 23.2857H2.71429C2.25963 23.2857 1.82359 23.1051 1.5021 22.7836C1.18061 22.4621 1 22.0261 1 21.5715V18.1429" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.1395 11.2857C13.0488 11.2857 13.9209 10.9245 14.5639 10.2815C15.2069 9.63854 15.5681 8.76647 15.5681 7.85716C15.5681 6.94785 15.2069 6.07578 14.5639 5.43279C13.9209 4.78981 13.0488 4.42859 12.1395 4.42859C11.2302 4.42859 10.3581 4.78981 9.71514 5.43279C9.07216 6.07578 8.71094 6.94785 8.71094 7.85716C8.71094 8.76647 9.07216 9.63854 9.71514 10.2815C10.3581 10.9245 11.2302 11.2857 12.1395 11.2857Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6639 19C18.2208 17.6192 17.3507 16.4147 16.179 15.5602C15.0073 14.7056 13.5946 14.2452 12.1444 14.2452C10.6942 14.2452 9.28151 14.7056 8.10984 15.5602C6.93818 16.4147 6.06809 17.6192 5.625 19H18.6639Z" stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}