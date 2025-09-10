import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SlotTimeIcon(props) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9 0C4.04 0 0 4.04 0 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 1.8c3.987 0 7.2 3.213 7.2 7.2s-3.213 7.2-7.2 7.2A7.186 7.186 0 011.8 9c0-3.987 3.213-7.2 7.2-7.2zm-.9 1.8v5.773l3.864 3.863 1.273-1.272L9.9 8.627V3.6H8.1z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default SlotTimeIcon
