import ActionTypes from "../actions/actionTypes"
import FontStore from "./fontStore"
import { fontsSelector, leftFontSelector, rightFontSelector } from "./selectors"

const mockState = {
  fonts: [],
  selectedFont: {
    left: {},
    right: {}
  }
}

const mockFonts = [
  {
    family: "Times New Roman",
    category: "serif",
    variants: ["regular", "100italic"]
  }
]

const mockFont = {
  family: "Times New Roman",
  category: "serif",
  variant: { regular: "regular" }
}

const mockSelectedFont = {
  left: {
    family: "roboto",
    category: "sans-serif",
    variants: [{ regular: "regular" }, { "100italic": "thin italic" }],
    variant: { regular: "regular" }
  },
  right: {
    family: "arial",
    category: "sans-serif",
    variants: [{ regular: "regular" }, { italic: "italic" }],
    variant: { italic: "italic" }
  }
}

describe("FontStore reducer", () => {
  it("Should return an empty default state", () => {
    const newState = FontStore(mockState, {})
    expect(newState).toEqual({
      fonts: [],
      selectedFont: {
        left: {},
        right: {}
      }
    })
  })

  it("Should return new state with new fonts after get fonts success", () => {
    const action = {
      type: ActionTypes.GET_FONTS_SUCCESS,
      fonts: mockFonts
    }

    const newState = FontStore(mockState, action)
    expect(newState).toEqual({
      fonts: mockFonts,
      selectedFont: {
        left: {
          family: "Times New Roman",
          category: "serif",
          variants: [{ regular: "regular" }, { "100italic": "thin italic" }],
          variant: { regular: "regular" }
        },
        right: {
          family: "Times New Roman",
          category: "serif",
          variants: [{ regular: "regular" }, { "100italic": "thin italic" }],
          variant: { regular: "regular" }
        }
      }
    })
  })

  it("Should return new state with new fonts after update fonts action", () => {
    const action = {
      type: ActionTypes.UPDATE_FONT,
      side: "left",
      fonts: mockFonts
    }
    const newState = FontStore(mockState, action)
    expect(newState).toEqual({
      fonts: [],
      selectedFont: {
        left: {
          family: "Times New Roman",
          category: "serif",
          variants: [{ regular: "regular" }, { "100italic": "thin italic" }],
          variant: { regular: "regular" }
        },
        right: {}
      }
    })
  })
})

describe("FontStore selectors", () => {
  const createRootState = (fonts, selectedFont) => ({
    StyleStore: {
      FontStore: {
        fonts,
        selectedFont
      }
    }
  })

  describe("fontsSelector", () => {
    it("Should return empty array by default", () => {
      const state = undefined
      const fonts = fontsSelector(state)
      expect(fonts).toEqual([])
    })

    it("Should selectively return the state of fonts", () => {
      const state = createRootState(mockFonts, {})
      const fonts = fontsSelector(state)
      expect(fonts).toEqual(mockFonts)
    })
  })

  describe("leftFontSelector", () => {
    it("Should return empty object by default", () => {
      const state = undefined
      const font = leftFontSelector(state)
      expect(font).toEqual({})
    })

    it("Should selectively return the state of  left fonts", () => {
      const state = createRootState([], mockSelectedFont)
      const font = leftFontSelector(state)
      expect(font).toEqual(mockSelectedFont.left)
    })
  })

  describe("rightFontSelector", () => {
    it("Should return empty object by default", () => {
      const state = undefined
      const font = leftFontSelector(state)
      expect(font).toEqual({})
    })

    it("Should selectively return the state of  left fonts", () => {
      const state = createRootState([], mockSelectedFont)
      const font = rightFontSelector(state)
      expect(font).toEqual(mockSelectedFont.right)
    })
  })
})
