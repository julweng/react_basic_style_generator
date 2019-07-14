import formatFontFamily from "./formatFontFamily"

describe("formatFontFamily", () => {
  it("Should return original string if string contains no spaces", () => {
    const result = formatFontFamily("Roboto")
    expect(result).toEqual("Roboto")
  })

  it("Should return string separated by plus sign if original string contains space", () => {
    const result = formatFontFamily("Open Sans")
    expect(result).toEqual("Open+Sans")
  })
})
