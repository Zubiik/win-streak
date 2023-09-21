import * as React from "react"
const SvgComponent = (props) => (
  <div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#3DD1E7"
      d="M31.475 44.516a2.823 2.823 0 0 1-2.201-1.044L15.642 26.538a2.823 2.823 0 0 1 0-3.585L29.754 6.02A2.826 2.826 0 1 1 34.1 9.632L21.484 24.76l12.193 15.127a2.823 2.823 0 0 1-2.202 4.63Z"
    />
    </svg>
  </div>
    
)
export default SvgComponent
