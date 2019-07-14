const formatFontFamily = str => {
  if (/\s/.test(str)) {
    return str.split(" ").join("+")
  }
  return str
}

export default formatFontFamily
