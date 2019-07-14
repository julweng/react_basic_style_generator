import formatRandomFont from "./formatRandomFont"

describe("formatRandomFont", () => {
  it("Should return a formatted font", () => {
    const mockFonts = [
      {
        kind: "webfonts#webfont",
        version: "v9",
        family: "roboto",
        category: "sans-serif",
        variants: ["regular", "100italic"]
      }
    ]
    const font = formatRandomFont(mockFonts)
    expect(Object.keys(font).includes("kind")).toBeFalsy()
    expect(Object.keys(font).includes("version")).toBeFalsy()
    expect(Object.keys(font).includes("family")).toBeTruthy()
    expect(Object.keys(font).includes("category")).toBeTruthy()
    expect(Object.keys(font).includes("variants")).toBeTruthy()
    expect(Object.keys(font).includes("variant")).toBeTruthy()

    expect(font).toEqual({
      family: "roboto",
      category: "sans-serif",
      variants: [{ regular: "regular" }, { "100italic": "thin italic" }],
      variant: { regular: "regular" }
    })
  })
})
