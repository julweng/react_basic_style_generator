import React from "react"
import { render, cleanup } from "@testing-library/react"
import "jest-dom/extend-expect"
import Overlay from "./index"

describe("Overlay", () => {
  afterEach(cleanup)

  it("Should render without crashing", () => {
    const { container } = render(<Overlay />)
    expect(container).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})
