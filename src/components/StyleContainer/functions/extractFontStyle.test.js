import extractFontStyle from "./extractFontStyle"

describe("extractFontStyle", () => {
  it("Should return font weight of 400 and font style of normal if variant is regular", () => {
    const style = extractFontStyle({ regular: "regular" })
    expect(style).toEqual({
      fontWeight: 400,
      fontStyle: "normal"
    })
  })

  it("Should return font weight of 400 and font style of italic if variant is italic", () => {
    const style = extractFontStyle({ italic: "italic" })
    expect(style).toEqual({
      fontWeight: 400,
      fontStyle: "italic"
    })
  })

  it("Should return font weight of variant's weight and font style of normal if variant only has font weight", () => {
    const style = extractFontStyle({ "900": "900" })
    expect(style).toEqual({
      fontWeight: 900,
      fontStyle: "normal"
    })
  })

  it("Should return font weight and style if variant has both style and weight", () => {
    const style = extractFontStyle({ "900italic": "900 italic" })
    expect(style).toEqual({
      fontWeight: 900,
      fontStyle: "italic"
    })
  })
})
