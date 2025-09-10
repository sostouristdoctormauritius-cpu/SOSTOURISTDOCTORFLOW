import * as React from "react"
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from "react-native-svg"

function HomeConsultationBlock(props) {
  return (
    <Svg
      width={398}
      height={124}
      viewBox="0 0 398 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_910_6554)">
        <Rect x={0.5} width={397} height={124} rx={16} fill="url(#paint0_linear_910_6554)" />
        <G opacity={0.5} fill="#fff">
          <Path opacity={0.1} d="M254.194-22.17L388.24 30.15v88.464L254.194 65.82v-87.99z" />
          <Path opacity={0.2} d="M521.816-22.117L387.774 30.148v88.371l134.042-52.738v-87.898z" />
          <Path
            opacity={0.3}
            d="M254.194-21.88L388.24-74.674 522.286-21.88v.395L388.24 31.308 254.194-21.485v-.395z"
          />
          <Path opacity={0.1} d="M-123.824 28.015l134.046 52.32V168.8l-134.046-52.794v-87.99z" />
          <Path opacity={0.2} d="M143.798 28.068L9.756 80.333v88.371l134.042-52.738V28.068z" />
          <Path
            opacity={0.3}
            d="M-123.824 28.305L10.222-24.489l134.045 52.794v.395L10.222 81.494-123.824 28.7v-.395z"
          />
          <Path opacity={0.1} d="M198.071-.164l55.891 21.815v36.886l-55.891-22.013V-.164z" />
          <Path opacity={0.2} d="M309.657-.142l-55.889 21.793v36.846l55.889-21.99V-.141z" />
          <Path
            opacity={0.3}
            d="M198.071-.043l55.891-22.013L309.853-.043v.165l-55.891 22.012L198.071.122v-.165zM244.917 140.779l55.891-22.012 55.891 22.012v.165l-55.891 22.013-55.891-22.013v-.165z"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_910_6554"
          x1={397.5}
          y1={124}
          x2={122.425}
          y2={-131.346}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D94B4B" />
          <Stop offset={1} stopColor="#C6619E" />
        </LinearGradient>
        <ClipPath id="clip0_910_6554">
          <Rect x={0.5} width={397} height={124} rx={16} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeConsultationBlock
