import { find } from "lodash"
import ActionTypes from "./actionTypes"

const updateFont = (fonts, side = "", family = "", variant = "") => {
  const selectedFont = find(fonts, ["family", family])

  if (selectedFont) {
    selectedFont.variant = variant
  }

  return {
    type: ActionTypes.UPDATE_FONT,
    side,
    fonts: selectedFont ? [selectedFont] : fonts
  }
}

export default updateFont
