const generateMsg = (type) => `select a ${type}`

const generateCssRule = (str, type) => {
  if (type === "font family") {
    const [family, category] = str.split(",")
    return str ? `"${family}",${category}` : generateMsg("font family")
  }

  if (type === "font weight") {
    return str ? `${str}` : generateMsg(type)
  }
  return str ? `"${str}"` : generateMsg(type)
}

export default generateCssRule
