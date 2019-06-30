import randomColorScheme from "constants/randomColorScheme"
import ActionTypes from "./actionTypes"
import updateColor from "./updateColor"

describe("updateColor", () => {
  it("should return a randomColorScheme if font and background colors are not specified", () => {
    const { type, side, color } = updateColor("left")
    expect(type).toEqual(ActionTypes.UPDATE_COLOR)
    expect(side).toEqual("left")
    expect(randomColorScheme.includes(color)).toBeTruthy()
  })

  it("Should return a formatted color if font and background colors are specified", () => {
    const action = updateColor("left", "#000", "#FFF")
    expect(action).toEqual({
      type: ActionTypes.UPDATE_COLOR,
      side: "left",
      color: {
        fontColor: "#000",
        backgroundColor: "#FFF"
      }
    })
  })
})
