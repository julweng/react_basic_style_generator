import ActionTypes from "./actionTypes"
import getColor from "./getColor"
import initialColorScheme from "constants/initialColorScheme"

describe("getColor", () => {
  it("Should return get color schemes", () => {
    const action = getColor()
    expect(action).toEqual({
      type: ActionTypes.GET_COLOR,
      colors: initialColorScheme
    })
  })
})
