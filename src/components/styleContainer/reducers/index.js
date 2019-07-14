import { combineReducers } from "redux"

import ColorStore from "./colorStore"
import FontStore from "./fontStore"

const StyleStore = combineReducers({
  ColorStore,
  FontStore
})

export default StyleStore
