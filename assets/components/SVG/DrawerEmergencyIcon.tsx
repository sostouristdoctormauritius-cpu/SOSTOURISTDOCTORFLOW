import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function DrawerEmergencyIconSVG(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24} cy={24} r={24} fill="#FE1B1B" fillOpacity={0.15} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 12h-9v8h-8v9h8v8h9v-8h8v-9h-8v-8z"
        fill="#FE1B1B"
        fillOpacity={0.8}
      />
    </Svg>
  )
}

export default DrawerEmergencyIconSVG
