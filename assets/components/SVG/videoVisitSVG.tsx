import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function VideoVisitSVG(props) {
  return (
    <Svg
      width={159}
      height={159}
      viewBox="0 0 159 159"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={159} height={159} rx={79.5} fill="#00934E" fillOpacity={0.08} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.3 56.313h17.907c7.488 0 12.716 5.16 12.716 12.555v21.264c0 7.395-5.228 12.556-12.716 12.556H61.299c-7.488 0-12.716-5.16-12.716-12.556V68.868c0-7.395 5.228-12.555 12.716-12.555zm42.804 7.354a4.275 4.275 0 014.245.198 4.422 4.422 0 012.068 3.77v23.731a4.419 4.419 0 01-2.068 3.77c-.708.443-1.5.669-2.298.669a4.278 4.278 0 01-1.95-.474l-4.58-2.31a5.018 5.018 0 01-2.745-4.505V70.481c0-1.92 1.052-3.647 2.746-4.5l4.582-2.314z"
        fill="#30B549"
      />
    </Svg>
  )
}

export default VideoVisitSVG
