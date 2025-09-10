import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function ArrowToRightFilledSVG(props) {
  return (
    <Svg
      width={32}
      height={33}
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect y={0.547363} width={32} height={32} rx={5.30121} fill="#2FB645" />
      <Path
        d="M18.52 16.68L16.5 14.98l-2.66-2.243c-.222-.185-.347-.41-.31-.7a.724.724 0 01.48-.616.743.743 0 01.792.133c.474.394.943.793 1.414 1.19 1.303 1.098 2.606 2.197 3.912 3.292.258.217.416.474.32.808a.923.923 0 01-.267.427c-1.8 1.529-3.609 3.049-5.417 4.568a.77.77 0 01-1.086-.075c-.288-.33-.246-.794.106-1.09 1.48-1.25 2.963-2.497 4.445-3.745l.291-.247z"
        fill="#FEFEFE"
      />
    </Svg>
  )
}

export default ArrowToRightFilledSVG
