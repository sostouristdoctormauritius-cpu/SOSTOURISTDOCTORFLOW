import * as React from "react"
import Svg, { Path } from "react-native-svg"

function DownloadSVGICon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <Path
        d="M8.5 12.138l-5-5 1.4-1.45 2.6 2.6V.138h2v8.15l2.6-2.6 1.4 1.45-5 5zm-6 4c-.55 0-1.02-.196-1.412-.587A1.93 1.93 0 01.5 14.138v-3h2v3h12v-3h2v3c0 .55-.196 1.021-.587 1.413a1.92 1.92 0 01-1.413.587h-12z"
        fill="#656565"
      />
    </Svg>
  )
}

export default DownloadSVGICon
