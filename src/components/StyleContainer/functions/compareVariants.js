import { isEmpty } from "lodash"

const compareVariants = (variantObj, valueToCompare) => {
  if (isEmpty(variantObj)) {
    return false
  }
  const [variant] = Object.keys(variantObj)
  return variant === valueToCompare
}

export default compareVariants
