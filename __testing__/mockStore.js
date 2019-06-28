import configureMockStore from "redux-mock-store"
import thunkMiddleware from "redux-thunk"

// avoid us having to fill this in every action test file
const defaultState = {}

function mockStore(initialState = {}) {
  const state = {
    ...defaultState,
    ...initialState
  }
  return configureMockStore([thunkMiddleware])(state)
}

export default mockStore
