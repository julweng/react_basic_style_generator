import formatStyle from "./formatStyle"

describe("formatStyle", () => {
  it("Should return formatted style from color and font", () => {
    const color = {
      fontColor: "#2EC4B6",
      backgroundColor: "#CBF3F0"
    }
    const font = {
      category: "sans-serif",
      family: "Seymour One",
      variants: [{ "100": "100" }, { "100italic": "100 italic" }]
    }

    const style = formatStyle(font, color)

    expect(style).toEqual({
      color: "#2EC4B6",
      backgroundColor: "#CBF3F0",
      fontFamily: "Seymour One, sans-serif",
      fontWeight: 100,
      fontStyle: "normal"
    })
  })

  it("Should return formatted style from color and font based on the variant if it exists", () => {
    const color = {
      fontColor: "#2EC4B6",
      backgroundColor: "#CBF3F0"
    }
    const font = {
      category: "sans-serif",
      family: "Seymour One",
      variants: [{ "100": "100" }, { "100italic": "100 italic" }],
      variant: { "100italic": "100 italic" }
    }

    const style = formatStyle(font, color)

    expect(style).toEqual({
      color: "#2EC4B6",
      backgroundColor: "#CBF3F0",
      fontFamily: "Seymour One, sans-serif",
      fontWeight: 100,
      fontStyle: "italic"
    })
  })
})
