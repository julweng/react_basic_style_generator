import { createSelector } from "reselect"
import { get, sortBy } from "lodash"
import { createLoadingSelector } from "reducers/RequestStatus/loadingStore"
import { formatRandomFont } from "../functions"
import ActionTypes from "../actions/actionTypes"

const getStore = rootState => get(rootState, "StyleStore.FontStore", {})

const defaultState = {
  fonts: [
    {
      family: "Trebuchet MS, Helvetica",
      category: "sans-serif",
      variants: [{ regular: "regular" }, { italic: "italic" }]
    }
  ],
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

    case ActionTypes.UPDATE_FONT: {
      return {
        ...state,
        selectedFont: {
          ...state.selectedFont,
          [side]: formatRandomFont(fonts)
        }
      }
    }
    default:
      return state
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

export const getFontsLoadingSelector = createLoadingSelector("GET_FONTS")
