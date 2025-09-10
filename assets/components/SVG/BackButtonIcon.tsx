import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BackButtonIcon(props) {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.834 14.32c0 .443-.33.809-.757.867l-.119.008h-17.5a.875.875 0 01-.118-1.742l.118-.008h17.5c.484 0 .876.392.876.875z"
        fill="#212121"
      />
      <Path
        d="M13.134 20.728a.875.875 0 01-1.136 1.325l-.099-.085-7.058-7.028a.875.875 0 01-.085-1.142l.085-.098 7.058-7.029a.875.875 0 011.32 1.142l-.085.098-6.435 6.41 6.435 6.407z"
        fill="#212121"
      />
    </Svg>
  )
}

export default BackButtonIcon
