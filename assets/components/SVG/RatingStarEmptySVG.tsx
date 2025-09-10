import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RatingStarEmptySVG(props) {
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
        d="M10.352.076l2.234 6.876h7.23L13.966 11.2l2.234 6.875-5.849-4.249-5.848 4.25L6.738 11.2.889 6.95h7.23L10.351.077z"
        fill="#BFBFBF"
      />
    </Svg>
  )
}

export default RatingStarEmptySVG
