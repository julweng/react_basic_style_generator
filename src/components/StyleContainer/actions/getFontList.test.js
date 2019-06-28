import mockAxios from "axios"
import { mockStore } from "__testing__"
import ActionTypes from "./actionTypes"
import getFontList from "./getFontList"

const store = mockStore({
  FontListStore: {
    fonts: []
  }
})

const mockData = {
  data: {
    items: [
      { family: "roboto", category: "sans-serif" },
      { family: "Creepster", category: "serif" }
    ]
  }
}

describe("getFontList", () => {
  afterEach(() => {
    store.clearActions()
  })

  it("Should dispatch request and success actions to get fonts", async () => {
    mockAxios.get.mockResolvedValue(mockData)

    await store.dispatch(getFontList())
    const actions = store.getActions()

    expect(actions).toEqual([
      {
        type: ActionTypes.GET_FONT_LIST_REQUEST
      },
      {
        type: ActionTypes.GET_FONT_LIST_SUCCESS,
        fonts: mockData.data.items,
        selectedFont: {}
      }
    ])
  })

  it("Should dispatch failure on failing to get fonts", async () => {
    const err = new Error("Failed to get fonts")
    mockAxios.get.mockRejectedValueOnce(err)

    await store.dispatch(getFontList())
    const actions = store.getActions()

    expect(actions).toEqual([
      {
        type: ActionTypes.GET_FONT_LIST_REQUEST
      },
      {
        type: ActionTypes.GET_FONT_LIST_FAILURE,
        err
      },
      {
        type: "HANDLE_DATA_ERROR",
        message: "Failed to get fonts"
      }
    ])
  })
})
