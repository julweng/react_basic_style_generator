import ActionTypes from "./actionTypes"

const updateFont = (
  state,
  side = "",
  family = "",
  category = "",
  variant = ""
) => {
  const isStyleSpecified = family && category && variant
  const fonts = isStyleSpecified ? [{ family, category, variant }] : state.fonts
  return {
    type: ActionTypes.UPDATE_FONT,
    side,
    fonts
  }
}

export default updateFont
