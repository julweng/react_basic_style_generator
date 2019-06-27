import { combineReducers } from "redux"
import RequestStatusStore from "./RequestStatus"
import FontListStore from "components/StyleContainer/reducers/fontListStore"

const rootReducer = combineReducers({
  FontListStore,
  RequestStatusStore
})

export default rootReducer
