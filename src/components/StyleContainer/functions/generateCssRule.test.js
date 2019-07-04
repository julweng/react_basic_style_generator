import generateCssRule from "./generateCssRule"

describe("generateDefaultCssMsg", () => {
  it("Should return a font family css rule if it is available", () => {
    const msg = generateCssRule("Arial, san-serif", "font family")
    expect(msg).toEqual(`"Arial", san-serif`)
  })

  it("Should return a default message if font family is not available", () => {
    const msg = generateCssRule("", "font family")
    expect(msg).toEqual("select a font family")
  })
})
