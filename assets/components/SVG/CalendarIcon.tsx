import * as React from "react"
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg"

function CalendarIcon(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={20} cy={20} r={20} fill="#00934E" fillOpacity={0.08} />
      <G clipPath="url(#clip0_1534_12180)">
        <Path
          d="M25.185 13.334h-.74v-1.482h-1.482v1.482h-5.926v-1.482h-1.481v1.482h-.741c-.822 0-1.482.666-1.482 1.481v10.37c0 .815.66 1.482 1.482 1.482h10.37c.815 0 1.482-.667 1.482-1.482v-10.37c0-.815-.667-1.481-1.482-1.481zM20 15.556a2.22 2.22 0 012.222 2.222A2.22 2.22 0 0120 20a2.22 2.22 0 01-2.222-2.222A2.22 2.22 0 0120 15.556zm4.445 8.889h-8.89v-.741c0-1.482 2.964-2.296 4.445-2.296 1.482 0 4.445.814 4.445 2.296v.74z"
          fill="#00934E"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1534_12180">
          <Path fill="#fff" transform="translate(11.111 11.111)" d="M0 0H17.7778V17.7778H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default CalendarIcon
