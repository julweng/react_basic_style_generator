import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import "jest-dom/extend-expect"
import FontSelection from "./index"

jest.mock("../Overlay", () =>
  jest.fn(() => <div className="OverlayMock">Overlay</div>)
)

const createProps = ({ side = "left", type = "font" } = {}) => ({
  side,
  type,
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
    variants: [{ regular: "regular" }, { "100italic": "thin italic" }],
    variant: { regular: "regular" }
  },
  updateFont: jest.fn(),
  close: jest.fn()
})

describe("FontSelection", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const props = createProps()
    const { container } = render(<FontSelection {...props} />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should display selected font family name", () => {
    const props = createProps()
    const { container } = render(<FontSelection {...props} />)
    const selectedFont = container.querySelector(".selected__font")
    const [fontFamily] = selectedFont.querySelectorAll("span")
    expect(fontFamily).toHaveTextContent("Arial")
  })

  it("Should open options and render an overlay", () => {
    const props = createProps()
    const { container } = render(<FontSelection {...props} />)
    const optionSelection = container.querySelector(".selected__font")
    expect(optionSelection).toBeTruthy()

    let fontOptions = container.querySelector(".font__options")
    expect(fontOptions).toBeNull()
    let mockOverlay = container.querySelector(".OverlayMock")
    expect(mockOverlay).toBeNull()

    optionSelection.click()
    fontOptions = container.querySelector(".font__options")
    expect(fontOptions).toBeTruthy()
    mockOverlay = container.querySelector(".OverlayMock")
    expect(mockOverlay).toBeTruthy()
  })

  it("Should render options", () => {
    const props = createProps()
    const { container } = render(<FontSelection {...props} />)
    const optionSelection = container.querySelector(".selected__font")
    optionSelection.click()
    const options = container.querySelectorAll("li")
    expect(options.length).toEqual(1)
  })

  it("Should render radio buttons", () => {
    const props = createProps()
    const { container } = render(<FontSelection {...props} />)
    const inputs = container.querySelectorAll("input")
    expect(inputs.length).toEqual(2)

    const [regular, italic] = inputs
    expect(regular.type).toEqual("radio")
    expect(italic.type).toEqual("radio")

    expect(italic.checked).toBeFalsy()
    fireEvent.click(italic)
    expect(italic.checked).toBeTruthy()
  })

  it("Should render cancel button and call close when clicked", () => {
    const props = createProps()
    const { getByText } = render(<FontSelection {...props} />)
    const cancelBtn = getByText("Cancel")
    cancelBtn.click()
    expect(props.close).toHaveBeenCalledTimes(1)
  })

  it("Should render submit button and call update font when clicked", () => {
    const props = createProps()
    const { getByText } = render(<FontSelection {...props} />)
    const submitBtn = getByText("Submit")
    submitBtn.click()
    expect(props.updateFont).toHaveBeenCalledTimes(1)
  })
})
