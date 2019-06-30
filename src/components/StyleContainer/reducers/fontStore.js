import { createSelector } from "reselect"
import { get, sortBy } from "lodash"
import { formatRandomFont } from "./functions"
import ActionTypes from "../actions/actionTypes"

const getStore = rootState => get(rootState, "FontStore", {})

const defaultState = {
  fonts: [],
  selectedFont: {
    left: {},
    right: {}
  }
}

export default function FontStore(state = defaultState, action = {}) {
  const { type, fonts, side } = action
  switch (type) {
    case ActionTypes.GET_FONTS_SUCCESS:
      return {
        ...state,
        fonts: sortBy(fonts, ["family"]),
        selectedFont: {
          left: formatRandomFont(fonts),
          right: formatRandomFont(fonts)
        }
      }

    case ActionTypes.UPDATE_FONT:
      return {
        ...state,
        selectedFont: {
          ...state.selectedFont,
          [side]: formatRandomFont(fonts)
        }
      }

    default:
      return defaultState
  }
}

export const fontsSelector = createSelector(
  getStore,
  state => get(state, "fonts", [])
)

export const leftFontSelector = createSelector(
  getStore,
  state => get(state, "selectedFont.left", {})
)

export const rightFontSelector = createSelector(
  getStore,
  state => get(state, "selectedFont.right", {})
)
