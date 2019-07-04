import React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import StyleRule from "./index"

const createProps = ({
  style = {
    color: "#000",
    backgroundColor: "#FFF",
    fontFamily: "Arial, sans-serif",
    fontWeight: 400,
    fontStyle: "normal"
  }
} = {}) => ({
  style
})

describe("StyleRule", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const props = createProps()
    const { container } = render(<StyleRule {...props} />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  it("Should display 7 p tags for the css rule", () => {
    const props = createProps()
    const { container } = render(<StyleRule {...props} />)
    const p = container.querySelectorAll("p")
    expect(p.length).toEqual(5)
  })

  it("Should display the css rule", () => {
    const props = createProps()
    const { container } = render(<StyleRule {...props} />)
    const p = container.querySelectorAll("p")
    expect(p[0]).toHaveTextContent(`color: "#000";`)
    expect(p[1]).toHaveTextContent(`background-color: "#FFF";`)
    expect(p[2]).toHaveTextContent(`font-family: "Arial", sans-serif;`)
    expect(p[3]).toHaveTextContent(`font-style: "normal";`)
    expect(p[4]).toHaveTextContent(`font-weight: 400;`)
  })

  it("Should display the default message if no style rules are available", () => {
    const props = createProps({ style: {} })
    const { container } = render(<StyleRule {...props} />)
    const p = container.querySelectorAll("p")
    expect(p[0]).toHaveTextContent("select a font color")
    expect(p[1]).toHaveTextContent("select a background color")
    expect(p[2]).toHaveTextContent("select a font family")
    expect(p[3]).toHaveTextContent("select a font style")
    expect(p[4]).toHaveTextContent("select a font weight")
  })
})
