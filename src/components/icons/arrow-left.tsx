import { IconProps } from "./type"

export const ArrowLeftIcon = ({ fill = 'none', color = '#000000', width = 26, height= 12, className }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 26 12" fill={fill} className={className}>
      <path d="M25 6.75C25.4142 6.75 25.75 6.41421 25.75 6C25.75 5.58579 25.4142 5.25 25 5.25L25 6.75ZM0.469669 5.46967C0.176777 5.76256 0.176777 6.23744 0.469669 6.53033L5.24264 11.3033C5.53553 11.5962 6.01041 11.5962 6.3033 11.3033C6.59619 11.0104 6.59619 10.5355 6.3033 10.2426L2.06066 6L6.3033 1.75736C6.59619 1.46447 6.59619 0.989593 6.3033 0.696699C6.01041 0.403806 5.53553 0.403806 5.24264 0.696699L0.469669 5.46967ZM25 5.25L1 5.25L1 6.75L25 6.75L25 5.25Z" fill={color}/>
    </svg>
  )
}