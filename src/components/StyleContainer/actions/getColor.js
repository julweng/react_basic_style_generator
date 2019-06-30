import ActionTypes from "./actionTypes"
import initialColorScheme from "constants/initialColorScheme"

const getColor = () => {
  return {
    type: ActionTypes.GET_COLOR,
    colors: initialColorScheme
  }
}

export default getColor
