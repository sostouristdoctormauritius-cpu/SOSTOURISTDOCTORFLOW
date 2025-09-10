import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RatingStarFullSVG(props) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.574.076l2.234 6.876h7.229L13.189 11.2l2.233 6.875-5.848-4.249-5.849 4.25L5.96 11.2.111 6.95H7.34L9.574.077z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.574.076l2.234 6.876h7.229L13.189 11.2l2.233 6.875-5.848-4.249-5.849 4.25L5.96 11.2.111 6.95H7.34L9.574.077z"
        fill="#FFCB46"
      />
    </Svg>
  )
}

export default RatingStarFullSVG
