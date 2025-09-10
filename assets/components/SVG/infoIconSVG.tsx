import * as React from "react"
import Svg, { Defs, Image, Path, Pattern, Use } from "react-native-svg"

function InfoIconSVG(props) {
  return (
    <Svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0.499512H16V16.499512H0z" />
      <Defs>
        <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#image0_710_9643" transform="scale(.01042)" />
        </Pattern>
        <Image
          id="image0_710_9643"
          width={96}
          height={96}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9klEQVR4nO2dy29PQRTHPwjVbiRFF4SfHXtbIRI0Qlvx/BNQIQT/g4V3ddEQC0sbr5XH0mPnGV2IH9J4LFBshEV75CZDRNT84jf3zpm555N8N31lzjm/zsw9c+ZcMAzDMAzDMAzD0EUP0AvsA4aBW8BjoAmMA9+dxt3Xiu/ddD+7F1gHzI9tREp0AQPAKefMSUDa1KT7WyeBfqAztpHamA6sAEaALwEc7tNX4CLQB8ygxswGBoEXFTh9KhXT1m43llpNM4eAtxEd/6eKsRx0Y8ua4t/+pQKHyxR6DWwjQ5YA1xQ4WFrUFaBBJmxy20RJTF+AHSRMh9tOSuIacbYkxVzgngLnSSDdAbpJhAXuwUcy0yiwGOUsA8YUOEtK0pizUSULgVcKnCQVbFUbGuf8UQXOkYr0zCUKVdCR2YIrLeqult3RGQXOkEg6Hdv5WxU4QSJrS8z0wmcFDpDI+hRrUb6qwHhRlDuqPL8T22hRpiLTWwldkff7PmKN60VVx52HI3/SfMQc2wFKptj3vrEAMFUA3pX9XzAY+RMmLYwx9vh2lVm9EPMAXRIJQHHQP62MAKxWYJwkEIBCq8oIwHkFhkkiATgX2vmdip56fYiS8+Sgi/GAAqMkMW0MGYAcDtelYh0LGYAcz3ilZD0I5fyeQFXKddMEMC9EAHoVGCOJak2IAOxTYIgkqj0hAjCswBCp85HlTQWGSKK6HiIATxQYIr/JhyjSoxAB0FZs5UMUqUhets1HBYZIogF4HyIA3xUYIokG4JsFgPQDYFMQcacgW4SJuwjbNpS421BtD2I+JLcHMW2pCB+SWypCWzLOh+SWjNOWjvYhuaWj5ys7kPEhig5kiqtb2R1J+hAluk9ATiowSBILwNGQAehXYJAkFoANIQNghVnELcwqsNJEWg7AWUrAinNpOQAryypPbyqYW33EHt/zssrTC+yCBt4A7KRE7IoS3uZ/pXdgLLoL2hTEX32wn4quqcbsfOgj1riaVXblXa9gsZOc7wO0grUq4JfzLxGBhmtUITXXeMxecn3KUtVSsQrbNxOZ0wocIZF0AgV0uL6aUjPdBmahhDmuBENqoqcaG7nWqW3lYpRSh8atS0mgdXGO09EosIhE6HZ9NSWjBbebxJgJHMngOWFE027nf/tMpPoCh+1kQiOx3NFlzTuddlMXGrpuyT9SykHLSTTS5boLvlHg8N/39vvr9pa9DvcStZgH/U3XZE9FF/SYLHc9iT5U4PSi89cFV7lcWvVCqnS6k6XjwENXYdyuwydc755jbn6v1WsL22UesNZddBgCbrjANN3tzZ+vs/3ovvbQXQsacr+zJlTPHsMwDMMwDMMwDALxAzoGiotGXuSSAAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default InfoIconSVG
