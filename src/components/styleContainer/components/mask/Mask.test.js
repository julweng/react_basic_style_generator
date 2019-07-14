import React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import Mask from "./index"

const createProps = ({ loaded = false } = {}) => ({
  loaded
})

describe("Mask", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const props = createProps()
    const { container } = render(<Mask {...props} />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should render without loaded class if loaded prop is false", () => {
    const props = createProps()
    const { container } = render(<Mask {...props} />)
    const mask = container.querySelector("span")
    expect(mask).not.toHaveClass("loaded")
  })

  it("Should render with loaded class if loaded prop is true", () => {
    const props = createProps({ loaded: true })
    const { container } = render(<Mask {...props} />)
    const mask = container.querySelector("span")
    expect(mask).toHaveClass("loaded")
  })
})
