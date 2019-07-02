import { isEmpty } from "lodash"
import { extractFontStyle } from "./index"

const formatStyle = (font, color) => {
  const { fontColor, backgroundColor } = color

  if (isEmpty(font)) {
    return {
      color: fontColor,
      backgroundColor
    }
  }

  const { category, family, variants, variant } = font
  const defaultVariant = !isEmpty(variant)
    ? extractFontStyle(variant)
    : extractFontStyle(variants[0])

  const { fontWeight, fontStyle } = defaultVariant

  return {
    color: fontColor,
    backgroundColor,
    fontFamily: `${family}, ${category}`,
    fontWeight,
    fontStyle
  }
}

export default formatStyle
