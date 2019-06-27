import React from "react"
import { render } from "@testing-library/react"

import {
  FirstDummyComponent as UnmockedComponent,
  SecondDummyComponent as MockedComponent
} from "./fixtures"
import getMockPropsOf from "./getMockPropsOf"

jest.mock("./fixtures/SecondDummyComponent", () =>
  jest.fn(() => <div>MockedDummyComponent</div>)
)

describe("getMockPropsOf", () => {
  it("Should return null if the component is not defined", () => {
    const selectors = getMockPropsOf()
    expect(selectors).toBeNull()
  })

  it("Should return null if the component is undefined", () => {
    const selectors = getMockPropsOf(undefined)
    expect(selectors).toBeNull()
  })

  it("Should return null if the component is null", () => {
    const selectors = getMockPropsOf(null)
    expect(selectors).toBeNull()
  })

  it("Should return null if the component is not mocked", () => {
    const selectors = getMockPropsOf(UnmockedComponent)
    expect(selectors).toBeNull()
  })

  it("Should return an object with selectors functions", () => {
    const selectors = getMockPropsOf(MockedComponent)
    expect(selectors).toBeType("object")

    const keys = Object.keys(selectors)
    expect(keys).toEqual([
      "firstInstance",
      "lastInstance",
      "nthInstance",
      "findInstance"
    ])

    const { firstInstance, lastInstance, nthInstance, findInstance } = selectors
    expect(firstInstance).toBeType("function")
    expect(lastInstance).toBeType("function")
    expect(nthInstance).toBeType("function")
    expect(findInstance).toBeType("function")
  })

  it("Should not select props of an unrendered mock", () => {
    const props = getMockPropsOf(MockedComponent).firstInstance()
    expect(props).toBeUndefined()
  })

  it("Should select props of a mock", () => {
    render(<MockedComponent id={123} text="sample" />)
    const props = getMockPropsOf(MockedComponent).firstInstance()
    expect(props).toEqual({
      id: 123,
      text: "sample"
    })
  })

  it("Should select props of the first instance of a mock", () => {
    render(<MockedComponent id={111} />)
    render(<MockedComponent id={222} />)
    const props = getMockPropsOf(MockedComponent).firstInstance()
    expect(props).toEqual({ id: 111 })
  })

  it("Should select props of the last instance of a mock", () => {
    render(<MockedComponent id={111} />)
    render(<MockedComponent id={222} />)
    const props = getMockPropsOf(MockedComponent).lastInstance()
    expect(props).toEqual({ id: 222 })
  })

  it("Should select props of numbered instances of a mock", () => {
    render(<MockedComponent id={111} />)
    render(<MockedComponent id={555} />)
    render(<MockedComponent id={999} />)

    const { nthInstance } = getMockPropsOf(MockedComponent)
    expect(nthInstance(1)).toEqual({ id: 111 })
    expect(nthInstance(2)).toEqual({ id: 555 })
    expect(nthInstance(3)).toEqual({ id: 999 })
  })

  it("Should find an instance by a provided function", () => {
    render(<MockedComponent id={1} name="Chewbacca" />)
    render(<MockedComponent id={2} name="Han Solo" />)
    render(<MockedComponent id={3} name="Greedo" />)

    const { findInstance } = getMockPropsOf(MockedComponent)

    expect(findInstance(i => i.id === 1)).toEqual({ id: 1, name: "Chewbacca" })
    expect(findInstance(i => i.id === 2)).toEqual({ id: 2, name: "Han Solo" })
    expect(findInstance(i => i.id === 3)).toEqual({ id: 3, name: "Greedo" })

    expect(findInstance(i => i.name === "Chewbacca")).toEqual({
      id: 1,
      name: "Chewbacca"
    })
    expect(findInstance(i => i.name === "Han Solo")).toEqual({
      id: 2,
      name: "Han Solo"
    })
    expect(findInstance(i => i.name === "Greedo")).toEqual({
      id: 3,
      name: "Greedo"
    })
  })
})
