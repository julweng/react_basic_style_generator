import ActionTypes from "./actionTypes"

const getColor = (color, side = "") => {
  return {
    type: ActionTypes.GET_COLOR,
    color,
    side
  }
}

export default getColor
