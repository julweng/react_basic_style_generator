import { combineReducers } from "redux"
import RequestStatusStore from "./RequestStatus"
import FontListStore from "components/StyleContainer/reducers/fontListStore"
import { DataStatusStore } from "./DataStatus"

const rootReducer = combineReducers({
  FontListStore,
  RequestStatusStore,
  DataStatusStore
})

export default rootReducer
