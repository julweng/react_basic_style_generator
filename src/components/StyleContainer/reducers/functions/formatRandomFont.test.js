import formatRandomFont from "./formatRandomFont"

describe("formatRandomFont", () => {
  it("Should return a formmated font", () => {
    const mockFonts = [
      {
        kind: "webfonts#webfont",
        version: "v9",
        family: "roboto",
        category: "sans-serif",
        variants: ["regular", "100italic"]
      },
      {
        kind: "webfonts#webfont",
        version: "v9",
        family: "Creepster",
        category: "serif",
        variants: ["800"]
      }
    ]
    const font = formatRandomFont(mockFonts)
    expect(Object.keys(font).includes("kind")).toBeFalsy()
    expect(Object.keys(font).includes("version")).toBeFalsy()
    expect(Object.keys(font).includes("family")).toBeTruthy()
    expect(Object.keys(font).includes("category")).toBeTruthy()
    expect(Object.keys(font).includes("variant")).toBeTruthy()
    expect(font.variant).toBeType("string")
  })
})
