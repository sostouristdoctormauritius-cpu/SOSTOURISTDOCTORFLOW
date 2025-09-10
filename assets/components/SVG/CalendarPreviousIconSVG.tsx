import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CalendarPreviousIconSVG(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.141 9.057c.047-.048.225-.255.39-.425.971-1.069 3.504-2.819 4.83-3.353.201-.086.71-.267.982-.279.26 0 .51.06.746.182.296.17.533.437.663.753.083.22.213.875.213.887.13.717.202 1.883.202 3.171 0 1.228-.072 2.346-.178 3.075-.012.011-.142.826-.284 1.105-.26.51-.77.827-1.315.827h-.047c-.354-.012-1.1-.33-1.1-.34-1.255-.536-3.73-2.2-4.724-3.306 0 0-.28-.284-.402-.461a1.486 1.486 0 01-.284-.887c0-.353.107-.681.308-.949z"
        fill="#9E9E9E"
      />
    </Svg>
  )
}

export default CalendarPreviousIconSVG
