import convertVariantToOption from "./convertVariantToOption"

describe("convertVariantToOption", () => {
  it("Should return thin if variant is 100", () => {
    const option = convertVariantToOption("100")
    expect(option).toEqual("thin")
  })

  it("Should return thin italic if variant is 100italic", () => {
    const option = convertVariantToOption("100italic")
    expect(option).toEqual("thin italic")
  })

  it("Should return extra-light if variant is 200", () => {
    const option = convertVariantToOption("200")
    expect(option).toEqual("extra-light")
  })

  it("Should return light italic if variant is 200italic", () => {
    const option = convertVariantToOption("200italic")
    expect(option).toEqual("extra-light italic")
  })

  it("Should return light if variant is 300", () => {
    const option = convertVariantToOption("300")
    expect(option).toEqual("light")
  })

  it("Should return light italic if variant is 300italic", () => {
    const option = convertVariantToOption("300italic")
    expect(option).toEqual("light italic")
  })

  it("Should return regular if variant is regular", () => {
    const option = convertVariantToOption("regular")
    expect(option).toEqual("regular")
  })

  it("Should return italic if variant is italic", () => {
    const option = convertVariantToOption("italic")
    expect(option).toEqual("italic")
  })

  it("Should return medium if variant is 500", () => {
    const option = convertVariantToOption("500")
    expect(option).toEqual("medium")
  })

  it("Should return medium if variant is 500italic", () => {
    const option = convertVariantToOption("500italic")
    expect(option).toEqual("medium italic")
  })

  it("Should return semi-bold if variant is 600", () => {
    const option = convertVariantToOption("600")
    expect(option).toEqual("semi-bold")
  })

  it("Should return semi-bold italic if variant is 600italic", () => {
    const option = convertVariantToOption("600italic")
    expect(option).toEqual("semi-bold italic")
  })

  it("Should return bold if variant is 700", () => {
    const option = convertVariantToOption("700")
    expect(option).toEqual("bold")
  })

  it("Should return bold italic if variant is 700italic", () => {
    const option = convertVariantToOption("700italic")
    expect(option).toEqual("bold italic")
  })

  it("Should return extra-bold if variant is 800", () => {
    const option = convertVariantToOption("800")
    expect(option).toEqual("extra-bold")
  })

  it("Should return extra-bold italic if variant is 800italic", () => {
    const option = convertVariantToOption("800italic")
    expect(option).toEqual("extra-bold italic")
  })

  it("Should return black if variant is 900", () => {
    const option = convertVariantToOption("900")
    expect(option).toEqual("black")
  })

  it("Should return black italic if variant is 900italic", () => {
    const option = convertVariantToOption("900italic")
    expect(option).toEqual("black italic")
  })
})
