import { createSelector } from "reselect"
import { get, sample } from "lodash"
import initialColorScheme from "constants/initialColorScheme"

import ActionTypes from "components/styleContainer/actions/actionTypes"

const getStore = (rootState) => get(rootState, "StyleStore.ColorStore", {})

const defaultState = {
  color: {
    left: {
      fontColor: "#FFF",
      backgroundColor: "#000"
    },
    right: {
      fontColor: "#000",
      backgroundColor: "#FFF"
    }
  }
}

export default function ColorStore(state = defaultState, action = {}) {
  const { type, side, color } = action
  switch (type) {
    case ActionTypes.GET_COLOR:
      return {
        ...state,
        color: sample(initialColorScheme)
      }

    case ActionTypes.UPDATE_COLOR:
      return {
        ...state,
        color: {
          ...state.color,
          [side]: color
        }
      }

    default:
      return state
  }
}

export const leftColorSelector = createSelector(getStore, (state) =>
  get(state, "color.left", {})
)

export const rightColorSelector = createSelector(getStore, (state) =>
  get(state, "color.right", {})
)
