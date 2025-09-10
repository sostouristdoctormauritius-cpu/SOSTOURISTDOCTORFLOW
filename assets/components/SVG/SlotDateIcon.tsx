import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SlotDateIcon(props) {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.75.5A3.25 3.25 0 0118 3.75v11.5a3.25 3.25 0 01-3.25 3.25H3.25A3.25 3.25 0 010 15.25V3.75A3.25 3.25 0 013.25.5h11.5zM16.5 6h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 001.75-1.75V6zM4.75 12a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM9 12a1.25 1.25 0 110 2.5A1.25 1.25 0 019 12zM4.75 8a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM9 8a1.25 1.25 0 110 2.5A1.25 1.25 0 019 8zm4.25 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm1.5-6H3.25A1.75 1.75 0 001.5 3.75v.75h15v-.75A1.75 1.75 0 0014.75 2z"
        fill="#2FB547"
      />
    </Svg>
  )
}

export default SlotDateIcon
