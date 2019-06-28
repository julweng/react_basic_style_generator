import ActionTypes from "./actionTypes"
import getColor from "./getColor"

describe("getColor", () => {
  it("Should return get color action type, color, and side", () => {
    const action = getColor("#000000", "left")
    expect(action).toEqual({
      type: ActionTypes.GET_COLOR,
      color: "#000000",
      side: "left"
    })
  })
})
