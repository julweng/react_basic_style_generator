import ActionTypes from "./actionTypes"
import updateFont from "./updateFont"

const mockState = {
  fonts: [{ family: "Creepster", category: "serif", variants: ["regular"] }],
  selectedFont: {
    left: {},
    right: {}
  }
}

describe("updateFont", () => {
  it("Should return selected font and side", () => {
    const action = updateFont(
      mockState,
      "left",
      "Raleway",
      "sans-serif",
      "regular"
    )
    expect(action).toEqual({
      type: ActionTypes.UPDATE_FONT,
      side: "left",
      fonts: [
        {
          family: "Raleway",
          category: "sans-serif",
          variant: "regular"
        }
      ]
    })
  })

  it("Should return a random font from the state if there is not a selected font", () => {
    const { type, side, fonts } = updateFont(mockState, "left")
    expect(type).toEqual(ActionTypes.UPDATE_FONT)
    expect(side).toEqual("left")
    expect(fonts).toEqual(mockState.fonts)
  })
})
