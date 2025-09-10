import * as React from "react"
import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg"

function DrawerConsultationIconSVG(props) {
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
      <G clipPath="url(#clip0_836_7615)">
        <Path
          d="M34.856 32.06a13.314 13.314 0 003.154-8.62C38 16.02 31.953 10 24.5 10 17.047 10 11 16.02 11 23.44s6.047 13.44 13.5 13.44c2.4 0 4.65-.63 6.6-1.72l6.9 1.72-3.154-4.82h.01z"
          fill="#9AE3BE"
        />
        <Path
          d="M30.708 18.21H18.293v1.7h12.415v-1.7zM30.708 22.59H18.293v1.7h12.415v-1.7zM30.708 26.97h-9.292v1.7h9.292v-1.7z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_836_7615">
          <Path fill="#fff" transform="translate(11 10)" d="M0 0H27V26.88H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DrawerConsultationIconSVG
