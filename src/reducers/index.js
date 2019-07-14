import { combineReducers } from "redux"
import RequestStatusStore from "./requestStatus"
import StyleStore from "components/styleContainer/reducers"
import { DataStatusStore } from "./dataStatus"

const rootReducer = combineReducers({
  StyleStore,
  RequestStatusStore,
  DataStatusStore
})

export default rootReducer
