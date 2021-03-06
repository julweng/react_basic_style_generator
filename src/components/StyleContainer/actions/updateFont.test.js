import ActionTypes from "./actionTypes"
import updateFont from "./updateFont"

const mockState = {
  fonts: [
    {
      family: "Creepster",
      variants: ["regular"]
    },
    {
      family: "Raleway",
      variants: ["regular", "italic"]
    }
  ],
  selectedFont: {
    left: {},
    right: {}
  }
}

describe("updateFont", () => {
  it("Should return selected font and side", () => {
    const action = updateFont(mockState.fonts, "left", "Raleway", "italic")
    expect(action).toEqual({
      type: ActionTypes.UPDATE_FONT,
      side: "left",
      fonts: [
        {
          family: "Raleway",
          variants: ["regular", "italic"],
          variant: "italic"
        }
      ]
    })
  })

  it("Should return a random font from the state if there is not a selected font", () => {
    const { type, side, fonts } = updateFont(mockState.fonts, "left")
    expect(type).toEqual(ActionTypes.UPDATE_FONT)
    expect(side).toEqual("left")
    expect(fonts).toEqual(mockState.fonts)
  })
})
