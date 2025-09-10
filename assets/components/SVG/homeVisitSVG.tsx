import * as React from "react"
import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg"

function HomeVisitSVG(props) {
  return (
    <Svg
      width={144}
      height={142}
      viewBox="0 0 144 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.100098} width={143.8} height={141.8} rx={70.9} fill="#00934E" fillOpacity={0.08} />
      <G clipPath="url(#clip0_1902_6784)">
        <Path
          d="M100.422 69.145L94.76 63.5v-9.365c0-1.208-.963-2.187-2.15-2.187h-2.997c-1.115 0-2.02.92-2.02 2.055v2.35L74.74 43.538a3.866 3.866 0 00-5.48 0L43.577 69.145a3.7 3.7 0 00-.811 3.992 3.591 3.591 0 003.325 2.272h1.367v20.213c0 2.085 1.662 3.778 3.714 3.778h41.654c2.05 0 3.714-1.691 3.714-3.778V75.409h1.367a3.59 3.59 0 003.325-2.272 3.697 3.697 0 00-.811-3.992z"
          fill="#30B549"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1902_6784">
          <Path fill="#fff" transform="translate(42.5 42.4)" d="M0 0H59V57H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default HomeVisitSVG
