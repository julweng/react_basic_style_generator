import { isEmpty } from "lodash"

const extractFontStyle = variant => {
  if (isEmpty(variant)) {
    return
  }

  const [value] = Object.keys(variant)

  if (value === "regular") {
    return {
      fontWeight: 400,
      fontStyle: "normal"
    }
  } else if (value === "italic") {
    return {
      fontWeight: 400,
      fontStyle: "italic"
    }
  }

  if (!isNaN(Number(value))) {
    return {
      fontWeight: Number(value),
      fontStyle: "normal"
    }
  } else {
    return {
      fontWeight: Number(value.slice(0, 3)),
      fontStyle: value.slice(3)
    }
  }
}

export default extractFontStyle
