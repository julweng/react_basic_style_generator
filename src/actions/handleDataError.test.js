import ActionTypes from "./actionTypes"
import handleDataError from "./handleDataError"

describe("handleDataError", () => {
  it("Should return handle data error action and error message", () => {
    const message = "failed to fetch data"
    expect(handleDataError(message)).toEqual({
      type: ActionTypes.HANDLE_DATA_ERROR,
      message
    })
  })
})
