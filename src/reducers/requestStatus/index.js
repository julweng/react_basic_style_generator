import { combineReducers } from "redux"

import LoadingStore from "./loadingStore"
import ErrorStore from "./errorStore"

const RequestStatusStore = combineReducers({
  LoadingStore,
  ErrorStore
})

export default RequestStatusStore
