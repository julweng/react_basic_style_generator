import { createSelector } from "reselect"
import { get } from "lodash"
import ActionTypes from "../actions/actionTypes"

const getStore = rootState => get(rootState, "FontListStore", {})

const defaultState = {
  fonts: []
}

export default function FontListStore(state = defaultState, action = {}) {
  const { type, fonts } = action
  switch (type) {
    case ActionTypes.GET_FONT_LIST_SUCCESS:
      return {
        ...state,
        fonts
      }
    default:
      return defaultState
  }
}

export const fontListSelector = createSelector(
  getStore,
  state => get(state, "fonts", [])
)
