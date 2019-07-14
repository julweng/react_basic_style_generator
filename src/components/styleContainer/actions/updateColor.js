import { sample } from "lodash"
import randomColorScheme from "constants/randomColorScheme"
import ActionTypes from "./actionTypes"

const updateColor = (side = "", fontColor = "", backgroundColor = "") => {
  const color =
    !fontColor && !backgroundColor
      ? sample(randomColorScheme)
      : { fontColor, backgroundColor }
  return {
    type: ActionTypes.UPDATE_COLOR,
    side,
    color
  }
}

export default updateColor
