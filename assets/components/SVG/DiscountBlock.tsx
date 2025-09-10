import * as React from "react"
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from "react-native-svg"

function DiscountBlock(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={388}
      height={180}
      viewBox="0 0 388 180"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_868_10375)">
        <Rect x={0.5} width={387} height={180} rx={16} fill="url(#paint0_linear_868_10375)" />
        <G opacity={0.5} fill="#fff">
          <Path opacity={0.1} d="M247.804-32.182l130.669 75.948v128.415L247.804 95.545V-32.182z" />
          <Path opacity={0.2} d="M508.684-32.105L378.019 43.764v128.28l130.665-76.556V-32.105z" />
          <Path
            opacity={0.3}
            d="M247.804-31.762l130.669-76.636 130.669 76.636v.574L378.473 45.448 247.804-31.188v-.574z"
          />
          <Path opacity={0.1} d="M-120.692 40.667L9.977 116.617v128.415l-130.669-76.636V40.667z" />
          <Path opacity={0.2} d="M140.188 40.745L9.523 116.613v128.281l130.665-76.556V40.745z" />
          <Path
            opacity={0.3}
            d="M-120.692 41.088L9.977-35.548l130.669 76.636v.573L9.977 118.298l-130.669-76.637v-.573z"
          />
          <Path opacity={0.1} d="M193.094-.238l54.484 31.668v53.543l-54.484-31.954V-.238z" />
          <Path opacity={0.2} d="M301.87-.206l-54.482 31.634v53.487l54.482-31.92v-53.2z" />
          <Path
            opacity={0.3}
            d="M193.094-.062l54.484-31.954L302.061-.062v.239L247.578 32.13 193.094.177v-.24zM238.761 204.357l54.483-31.954 54.483 31.954v.239l-54.483 31.954-54.483-31.954v-.239z"
          />
        </G>
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_868_10375"
          x1={387.5}
          y1={180}
          x2={27.9945}
          y2={-44.106}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#227580" />
          <Stop offset={1} stopColor="#000709" />
        </LinearGradient>
        <ClipPath id="clip0_868_10375">
          <Rect x={0.5} width={387} height={180} rx={16} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default DiscountBlock
