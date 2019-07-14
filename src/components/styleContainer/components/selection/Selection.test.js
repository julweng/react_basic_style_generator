import React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import { getMockPropsOf } from "__testing__"
import { FontSelection, ColorSelection } from "../index"
import Selection from "./index"

jest.mock("../FontSelection", () =>
  jest.fn(() => <div className="FontSelectionMock">FontSelection</div>)
)

jest.mock("../ColorSelection", () =>
  jest.fn(() => <div className="ColorSelectionMock">ColorSelection</div>)
)

jest.mock("../Overlay", () =>
  jest.fn(() => <div className="OverlayMock">Overlay</div>)
)

const createProps = ({ side = "left", type = "font" } = {}) => ({
  side,
  type,
  color: {
    color: "#000",
    backgroundColor: "#FFF"
  },
  fonts: [
    {
      family: "Arial",
      category: "sans-serif",
      variants: ["regular", "100italic"]
    }
  ],
  font: {
    family: "Arial",
    category: "sans-serif",
    variant: { regular: "regular" }
  },
  updateFont: jest.fn(),
  updateColor: jest.fn()
})

describe("Selection", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const props = createProps()
    const { container } = render(<Selection {...props} />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should render font selection button if type prop is font", () => {
    const props = createProps()
    const { container } = render(<Selection {...props} />)
    const fontBtn = container.querySelector(".font")
    expect(fontBtn).toBeTruthy()
    const fontIcon = container.querySelector(".fa-font")
    expect(fontIcon).toBeTruthy()
  })

  it("Should render overlay when font button is clicked", () => {
    const props = createProps()
    const { container } = render(<Selection {...props} />)
    const fontBtn = container.querySelector(".font")
    expect(fontBtn).toBeTruthy()

    let mockOverlay = container.querySelector(".OverlayMock")
    expect(mockOverlay).toBeNull()
    fontBtn.click()
    mockOverlay = container.querySelector(".OverlayMock")
    expect(mockOverlay).toBeTruthy()
  })

  it("Should render FontSelection when font button is clicked", () => {
    const props = createProps()
    const { container } = render(<Selection {...props} />)
    const fontBtn = container.querySelector(".font")
    expect(fontBtn).toBeTruthy()

    let mockFontSelection = container.querySelector(".FontSelectionMock")
    expect(mockFontSelection).toBeNull()
    fontBtn.click()
    mockFontSelection = container.querySelector(".FontSelectionMock")
    expect(mockFontSelection).toBeTruthy()

    const { side, close, font, fonts, updateFont } = getMockPropsOf(
      FontSelection
    ).firstInstance()
    expect(side).toEqual("left")
    expect(close).toBeType("function")
    expect(font).toEqual(props.font)
    expect(fonts).toEqual(props.fonts)
    expect(updateFont).toEqual(props.updateFont)
  })

  it("Should render palette selection button if type prop is palette", () => {
    const props = createProps({ type: "palette" })
    const { container } = render(<Selection {...props} />)
    const paletteBtn = container.querySelector(".palette")
    expect(paletteBtn).toBeTruthy()
    const paletteIcon = container.querySelector(".fa-palette")
    expect(paletteIcon).toBeTruthy()
  })

  it("Should render overlay when palette button is clicked", () => {
    const props = createProps({ type: "palette" })
    const { container } = render(<Selection {...props} />)
    const paletteBtn = container.querySelector(".palette")
    expect(paletteBtn).toBeTruthy()

    let mockOverlay = container.querySelector(".OverlayMock")
    expect(mockOverlay).toBeNull()
    paletteBtn.click()
    mockOverlay = container.querySelector(".OverlayMock")
    expect(mockOverlay).toBeTruthy()
  })

  it("Should render ColorSelection when palette button is clicked", () => {
    const props = createProps({ type: "palette" })
    const { container } = render(<Selection {...props} />)
    const paletteBtn = container.querySelector(".palette")
    expect(paletteBtn).toBeTruthy()

    let mockColorSelection = container.querySelector(".ColorSelectionMock")
    expect(mockColorSelection).toBeNull()
    paletteBtn.click()
    mockColorSelection = container.querySelector(".ColorSelectionMock")
    expect(mockColorSelection).toBeTruthy()

    const { side, close, color, updateColor } = getMockPropsOf(
      ColorSelection
    ).firstInstance()
    expect(side).toEqual("left")
    expect(close).toBeType("function")
    expect(color).toEqual(props.color)
    expect(updateColor).toEqual(props.updateColor)
  })
})
