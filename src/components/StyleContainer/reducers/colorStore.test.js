import { sample } from "lodash"
import initialColorScheme from "constants/initialColorScheme"
import ActionTypes from "../actions/actionTypes"
import ColorStore from "./colorStore"
import { leftColorSelector, rightColorSelector } from "./selectors"

const mockState = {
  color: {
    left: {
      fontColor: "#FFF",
      backgroundColor: "#000"
    },
    right: {
      fontColor: "#000",
      backgroundColor: "#FFF"
    }
  }
}

const mockLeft = {
  fontColor: "#F1F1F1",
  backgroundColor: "#FF5733"
}

describe("ColorStore reducer", () => {
  it("Should return a default state", () => {
    const newState = ColorStore(mockState, {})
    expect(newState).toEqual(mockState)
  })

  it("Should return new state with new color after get color success", () => {
    const action = {
      type: ActionTypes.GET_COLOR,
      color: sample(initialColorScheme)
    }

    const newState = ColorStore(mockState, action)
    expect(initialColorScheme.includes(newState.color)).toBeTruthy()
  })

  it("Should return new state with new color after update color action", () => {
    const action = {
      type: ActionTypes.UPDATE_COLOR,
      side: "left",
      color: mockLeft
    }
    const newState = ColorStore(mockState, action)
    expect(newState).toEqual({
      color: {
        left: {
          fontColor: "#F1F1F1",
          backgroundColor: "#FF5733"
        },
        right: {
          fontColor: "#000",
          backgroundColor: "#FFF"
        }
      }
    })
  })
})

describe("ColorStore selectors", () => {
  const createRootState = color => ({
    StyleStore: {
      ColorStore: {
        color
      }
    }
  })

  describe("leftColorSelector", () => {
    it("Should return empty object by default", () => {
      const state = undefined
      const color = leftColorSelector(state)
      expect(color).toEqual({})
    })

    it("Should selectively return the state of fonts", () => {
      const state = createRootState(mockState.color)
      const color = leftColorSelector(state)
      expect(color).toEqual(state.StyleStore.ColorStore.color.left)
    })
  })

  describe("rightColorSelector", () => {
    it("Should return empty object by default", () => {
      const state = undefined
      const color = rightColorSelector(state)
      expect(color).toEqual({})
    })

    it("Should selectively return the state of  left fonts", () => {
      const state = createRootState(mockState.color)
      const color = rightColorSelector(state)
      expect(color).toEqual(state.StyleStore.ColorStore.color.right)
    })
  })
})
