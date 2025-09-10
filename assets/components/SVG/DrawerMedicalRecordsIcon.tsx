import * as React from "react"
import Svg, { Circle, Path, Rect } from "react-native-svg"

function DrawerMedicalRecordsIconSVG(props) {
  return (
    <Svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={24} cy={24} r={24} fill="#EBF6F1" fillOpacity={0.7} />
      <Rect x={13.7522} y={9} width={21.4955} height={29.9402} rx={2.30309} fill="#9AE3BE" />
      <Path fill="#26A76A" d="M22.3198 11.3031H25.91262V21.283160000000002H22.3198z" />
      <Path
        transform="rotate(90 29.106 14.497)"
        fill="#26A76A"
        d="M29.1062 14.4967H32.699020000000004V24.47676H29.1062z"
      />
      <Rect x={16.0554} y={27.9365} width={16.8893} height={1.53539} rx={0.575773} fill="#fff" />
      <Rect x={16.0554} y={31.0073} width={16.8893} height={1.53539} rx={0.575773} fill="#fff" />
      <Rect x={16.0554} y={34.0781} width={16.8893} height={1.53539} rx={0.575773} fill="#fff" />
    </Svg>
  )
}

export default DrawerMedicalRecordsIconSVG
