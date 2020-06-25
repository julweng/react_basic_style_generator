import ActionTypes from "./actionTypes"

const handleDataError = (message) => {
  return {
    type: ActionTypes.HANDLE_DATA_ERROR,
    message
  }
}

export default handleDataError
