import formatFontVariants from "./formatFontVariants"

describe("formatFontVariants", () => {
  it("Should formatFontVariants into key value pairs", () => {
    const variants = [
      "100",
      "100italic",
      "200",
      "200italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "600",
      "600italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic"
    ]

    const pairs = formatFontVariants(variants)

    expect(pairs).toEqual([
      { "100": "thin" },
      { "100italic": "thin italic" },
      { "200": "extra-light" },
      { "200italic": "extra-light italic" },
      { "300": "light" },
      { "300italic": "light italic" },
      { regular: "regular" },
      { italic: "italic" },
      { "500": "medium" },
      { "500italic": "medium italic" },
      { "600": "semi-bold" },
      { "600italic": "semi-bold italic" },
      { "700": "bold" },
      { "700italic": "bold italic" },
      { "800": "extra-bold" },
      { "800italic": "extra-bold italic" },
      { "900": "black" },
      { "900italic": "black italic" }
    ])
  })

  it("Should return a default key-value pair if variants is an empty array", () => {
    const variants = []
    const pair = formatFontVariants(variants)
    expect(pair).toEqual([{ regular: "regular" }])
  })
})
