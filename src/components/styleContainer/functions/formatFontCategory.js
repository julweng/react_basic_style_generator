const formatFontCategory = (str) => {
  if (str === "serif" || str === "sans-serif") {
    return str
  }
  if (str === "handwriting" || str === "display") {
    return "cursive"
  }
}

export default formatFontCategory
