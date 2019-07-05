import React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import ColorSelection from "./index"

jest.mock("react-color", () => {
  // eslint-disable-next-line react/prop-types
  const CompactPicker = ({ color }) => (
    <div className="CompactPickerMock">{color}</div>
  )
  return { CompactPicker }
})

const createProps = ({
  side = "left",
  color = {
    color: "#000",
    backgroundColor: "#FFF"
  }
} = {}) => ({
  side,
  color,
  close: jest.fn(),
  updateColor: jest.fn()
})

describe("ColorSelection", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const props = createProps()
    const { container } = render(<ColorSelection {...props} />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should render color picker labels", () => {
    const props = createProps()
    const { getByText } = render(<ColorSelection {...props} />)
    expect(getByText("Background")).toBeTruthy()
    expect(getByText("Text")).toBeTruthy()
  })

  it("Should render an instance of CompactPicker showing background color", () => {
    const props = createProps()
    const { container } = render(<ColorSelection {...props} />)
    const bgColorPicker = container.querySelectorAll(".CompactPickerMock")[0]
    expect(bgColorPicker).toHaveTextContent(props.color.backgroundColor)
  })

  it("Should render an instance of CompactPicker showing text color", () => {
    const props = createProps()
    const { container } = render(<ColorSelection {...props} />)
    const textColorPicker = container.querySelectorAll(".CompactPickerMock")[1]
    expect(textColorPicker).toHaveTextContent(props.color.color)
  })

  it("Should render a cancel button that closes the selection container on click", () => {
    const props = createProps()
    const { getByText } = render(<ColorSelection {...props} />)
    const cancelBtn = getByText("Cancel")
    cancelBtn.click()
    expect(props.close).toHaveBeenCalledTimes(1)
  })

  it("render a submit button that submits colro and closes the selection container on click", () => {
    const props = createProps()
    const { getByText } = render(<ColorSelection {...props} />)
    const submitBtn = getByText("Submit")
    submitBtn.click()
    expect(props.close).toHaveBeenCalledTimes(1)
    expect(props.updateColor).toHaveBeenCalledTimes(1)
  })
})
