import { combineReducers } from "redux"
import RequestStatusStore from "./RequestStatus"
import StyleStore from "components/StyleContainer/reducers"
import { DataStatusStore } from "./DataStatus"

const rootReducer = combineReducers({
  StyleStore,
  RequestStatusStore,
  DataStatusStore
})

export default rootReducer
