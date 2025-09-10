import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function OnlineStatusSVG(props) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={10} cy={10.9761} r={8.5} stroke="#2FB645" strokeWidth={3} />
      <Circle cx={10.0001} cy={10.9759} r={5.83333} fill="#2FB645" />
    </Svg>
  )
}

export default OnlineStatusSVG
