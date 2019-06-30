import { sample } from "lodash"

const formatRandomFont = fonts => {
  if (!fonts.length) {
    return {}
  }
  const { family, category, variants } = sample(fonts)
  return {
    family,
    category,
    variant: sample(variants)
  }
}

export default formatRandomFont
