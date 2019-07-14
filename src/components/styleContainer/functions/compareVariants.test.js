import compareVariants from "./compareVariants"

describe("compareVariants", () => {
  it("Should return false when variant to be compared is an empty object", () => {
    const result = compareVariants({}, "regular")
    expect(result).toBeFalsy()
  })

  it("Should return false when variant is not the same as value to be compared", () => {
    const result = compareVariants({ "800italic": "800 italic" }, "regular")
    expect(result).toBeFalsy()
  })

  it("Should return true when variant is the same as value to be compared", () => {
    const result = compareVariants({ "800italic": "800 italic" }, "800italic")
    expect(result).toBeTruthy()
  })
})
