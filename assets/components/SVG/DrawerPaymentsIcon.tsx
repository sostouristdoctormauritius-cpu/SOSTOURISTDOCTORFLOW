import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

function DrawerPaymentsIconSVG(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24} cy={24} r={24} fill="#EBF6F1" fillOpacity={0.7} />
      <Rect x={10} y={14} width={28} height={20} rx={2.5} fill="#9AE3BE" />
      <Path fill="#00934E" d="M10 18H38V22H10z" />
      <Rect x={12} y={29} width={12} height={2} rx={1} fill="#fff" />
    </Svg>
  )
}

export default DrawerPaymentsIconSVG
