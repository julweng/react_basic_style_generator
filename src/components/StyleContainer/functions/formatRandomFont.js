import { sample } from "lodash"
import { formatFontCategory, formatFontVariants } from "./index"

const formatRandomFont = fonts => {
  if (!fonts.length) {
    return {}
  }

  const sampledFont = sample(fonts)
  if (sampledFont.variant === undefined) {
    sampledFont.variant = sampledFont.variants[0]
  }

  const { family, category, variants, variant } = sampledFont

  const formattedVariants = formatFontVariants(variants)
  const [formattedVariant] = formatFontVariants([variant])

  return {
    family,
    category: formatFontCategory(category),
    variants: formattedVariants,
    variant: formattedVariant || formattedVariants[0]
  }
}

export default formatRandomFont
