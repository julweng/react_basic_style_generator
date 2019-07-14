import formatFontCategory from "./formatFontCategory"

describe("formatFontCategory", () => {
  it("Should return the word cursive if original string is handwriting", () => {
    const result = formatFontCategory("handwriting")
    expect(result).toEqual("cursive")
  })

  it("Should return the word cursive if original string is display", () => {
    const result = formatFontCategory("display")
    expect(result).toEqual("cursive")
  })

  it("Should return the original string if it is serif", () => {
    const result = formatFontCategory("serif")
    expect(result).toEqual("serif")
  })

  it("Should return the original string if it is sans-serif", () => {
    const result = formatFontCategory("sans-serif")
    expect(result).toEqual("sans-serif")
  })
})
