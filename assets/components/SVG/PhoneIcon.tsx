import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function PhoneCallSVG(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={41}
      height={41}
      viewBox="0 0 41 41"
      fill="none"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={40} height={40} rx={20} fill="#EBF6F1" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.136 20.867c3.102 3.102 3.806-.486 5.782 1.488 1.904 1.904 2.999 2.285.586 4.697-.302.243-2.223 3.166-8.972-3.581-6.75-6.748-3.829-8.67-3.586-8.972 2.42-2.42 2.794-1.318 4.699.586 1.975 1.974-1.612 2.68 1.49 5.782z"
        fill="#00934E"
      />
    </Svg>
  )
}

export default PhoneCallSVG
