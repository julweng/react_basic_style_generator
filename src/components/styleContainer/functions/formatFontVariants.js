import { convertVariantToOption } from "./index"
const formatFontVariants = variants => {
  if (!Array.isArray(variants) || !variants.length) {
    return [{ regular: "regular" }]
  }

  const formattedVariants = []

  variants.forEach(variant => {
    const newVariant = {}
    newVariant[variant] = convertVariantToOption(variant)
    formattedVariants.push(newVariant)
  })

  return formattedVariants
}

export default formatFontVariants
