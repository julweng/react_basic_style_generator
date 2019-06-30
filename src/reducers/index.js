import { combineReducers } from "redux"
import RequestStatusStore from "./RequestStatus"
import FontStore from "components/StyleContainer/reducers/fontStore"
import { DataStatusStore } from "./DataStatus"

const rootReducer = combineReducers({
  FontStore,
  RequestStatusStore,
  DataStatusStore
})

export default rootReducer
