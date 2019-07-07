import React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import { getMockPropsOf } from "__testing__"
import { StyleItem, Mask } from "./components"
import { UnconnectedStyleContainer as StyleContainer } from "./index"

jest.mock("./components/StyleItem", () =>
  jest.fn(() => <div className="StyleItemMock">StyleItemMock</div>)
)

jest.mock("./components/Mask", () =>
  jest.fn(({ loaded }) => (
    <div>{!loaded && <div className="MaskMock">MaskMock</div>}</div>
  ))
)

const createProps = ({ isLoadingFonts = false } = {}) => ({
  leftColor: {
    fontColor: "#000",
    backgroundColor: "#FFF"
  },
  rightColor: {
    fontColor: "#FFF",
    backgroundColor: "#000"
  },
  fonts: [
    {
      family: "Arial",
      category: "sans-serif",
      variants: ["regular", "100italic"]
    },
    {
      family: "Times New Roman",
      category: "serif",
      variants: ["regular", "italic"]
    }
  ],
  leftFont: {
    family: "Arial",
    category: "sans-serif",
    variants: [{ regular: "regular" }, { "100italic": "thin italic" }],
    variant: { regular: "regular" }
  },
  rightFont: {
    family: "Times New Roman",
    category: "serif",
    variants: [{ regular: "regular" }, { italic: "italic" }],
    variant: { regular: "regular" }
  },
  isLoadingFonts,
  updateFont: jest.fn(),
  updateColor: jest.fn(),
  getFonts: jest.fn(),
  getColor: jest.fn()
})

describe("StyleContainer", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const props = createProps()
    const { container } = render(<StyleContainer {...props} />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should render mask when fonts are loading", () => {
    const props = createProps({ isLoadingFonts: true })
    const { container } = render(<StyleContainer {...props} />)
    const mockMask = container.querySelector(".MaskMock")
    expect(mockMask).toBeTruthy()
    const { loaded } = getMockPropsOf(Mask).firstInstance()
    expect(loaded).toBeFalsy()
  })

  it("Should not render mask when fonts finished loading", () => {
    const props = createProps()
    const { container } = render(<StyleContainer {...props} />)
    const mockMask = container.querySelector(".MaskMock")
    expect(mockMask).toBeNull()
  })

  it("Should render header", () => {
    const props = createProps()
    const { container } = render(<StyleContainer {...props} />)
    const header = container.querySelector("h1")
    expect(header).toHaveTextContent("ColoText")
  })

  it("Should render two StyleItem instances", () => {
    const props = createProps()
    const { container } = render(<StyleContainer {...props} />)
    const mockStyleItems = container.querySelectorAll(".StyleItemMock")
    expect(mockStyleItems.length).toEqual(2)
  })

  it("Should render left and right StyleItem", () => {
    const props = createProps()
    render(<StyleContainer {...props} />)
    const left = getMockPropsOf(StyleItem).firstInstance()
    expect(left).toEqual({
      side: "left",
      font: props.leftFont,
      fonts: props.fonts,
      updateFont: props.updateFont,
      updateColor: props.updateColor,
      style: {
        color: "#000",
        backgroundColor: "#FFF",
        fontFamily: "Arial, sans-serif",
        fontWeight: 400,
        fontStyle: "normal"
      }
    })

    const right = getMockPropsOf(StyleItem).lastInstance()
    expect(right).toEqual({
      side: "right",
      font: props.rightFont,
      fonts: props.fonts,
      updateFont: props.updateFont,
      updateColor: props.updateColor,
      style: {
        color: "#FFF",
        backgroundColor: "#000",
        fontFamily: "Times New Roman, serif",
        fontWeight: 400,
        fontStyle: "normal"
      }
    })
  })

  it("Should render footer", () => {
    const props = createProps()
    const { container } = render(<StyleContainer {...props} />)
    const footer = container.querySelector("p")
    expect(footer).toHaveTextContent("2019 Made with React by Jul W")
  })
})
