import { createSelector } from "reselect"
import { get } from "lodash"
import ActionTypes from "actions/actionTypes"

const getStore = rootState => get(rootState, "DataStatusStore", {})

const defaultState = {
  message: ""
}

export default function DataStatusStore(state = defaultState, action) {
  const { type, message } = action
  switch (type) {
    case ActionTypes.HANDLE_DATA_ERROR:
      return {
        ...state,
        message
      }
    default:
      return defaultState
  }
}

export const dataErrorSelector = createSelector(
  getStore,
  state => get(state, "message", "")
)
