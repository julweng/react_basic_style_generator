import React from "react"
import { render, cleanup } from "@testing-library/react"
import { getMockPropsOf } from "__testing__"
import { Selection, StyleRule } from "../index"
import "jest-dom/extend-expect"
import StyleItem from "./index"

jest.mock("../Selection", () => jest.fn(() => <div>SelectionMock</div>))

jest.mock("../StyleRule", () => jest.fn(() => <div>StyleRuleMock</div>))

const createProps = ({
  style = {
    color: "#000",
    backgroundColor: "#FFF",
    fontFamily: "Arial, sans-serif",
    fontWeight: 400,
    fontStyle: "normal"
  },
  fonts = [
    {
      family: "Arial",
      category: "sans-serif",
      variants: ["regular", "100italic"]
    }
  ],
  font = {
    family: "Arial",
    category: "sans-serif",
    variant: { regular: "regular" }
  },
  side = "left"
} = {}) => ({
  style,
  side,
  fonts,
  font,
  updateFont: jest.fn(),
  updateColor: jest.fn()
})

describe("StyleItem", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const props = createProps()
    const { container } = render(<StyleItem {...props} />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should render first child container with class name based on the side prop", () => {
    const props = createProps()
    const { container } = render(<StyleItem {...props} />)
    expect(container.firstChild).toHaveClass("left")
  })

  it("Should render first child with style prop", () => {
    const props = createProps()
    const { container } = render(<StyleItem {...props} />)
    expect(container.firstChild).toHaveStyle(`
      color: "#000";
      backgroundColor: "#FFF";
      fontFamily: "Arial, sans-serif";
      fontWeight: 400;
      fontStyle: "normal";
    `)
  })

  it("Should render two instances of Selection", () => {
    const props = createProps()
    const { getAllByText } = render(<StyleItem {...props} />)
    const mockSelections = getAllByText("SelectionMock")
    expect(mockSelections.length).toEqual(2)
  })

  it("Should render a selection instance of the type font", () => {
    const props = createProps()
    render(<StyleItem {...props} />)
    const passedProps = getMockPropsOf(Selection).firstInstance()

    const { side, fonts, font, updateFont } = props

    expect(passedProps).toEqual({
      type: "font",
      side,
      fonts,
      font,
      updateFont
    })
  })

  it("Should render a selection instance of the type palette", () => {
    const props = createProps()
    render(<StyleItem {...props} />)
    const passedProps = getMockPropsOf(Selection).lastInstance()

    const { side, style, updateColor } = props

    expect(passedProps).toEqual({
      type: "palette",
      side,
      color: style,
      updateColor
    })
  })

  it("Should display a default message when font is not available", () => {
    const props = createProps({ font: {} })
    const { container } = render(<StyleItem {...props} />)
    const msg = container.querySelector("p")
    expect(msg).toHaveTextContent("Happy Picking")
  })

  it("Should display font family when font is available", () => {
    const props = createProps()
    const { container } = render(<StyleItem {...props} />)
    const msg = container.querySelector("p")
    expect(msg).toHaveTextContent("Arial")
  })

  it("Should render an instance of StyleRule", () => {
    const props = createProps()
    const { getAllByText } = render(<StyleItem {...props} />)
    const mockStyleRule = getAllByText("StyleRuleMock")
    expect(mockStyleRule.length).toEqual(1)
  })

  it("Should pass the style prop to StyleRule", () => {
    const props = createProps()
    render(<StyleItem {...props} />)
    const passedProps = getMockPropsOf(StyleRule).firstInstance()
    expect(passedProps).toEqual({ style: props.style })
  })
})
