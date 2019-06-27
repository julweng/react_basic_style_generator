import { first, get, last } from "lodash"

/**
 * Gets props of a mock by its instance order or a find function.
 * @param  {component} component  class or functional component
 * @return {object}               object with selectors functions
 */
export default function getMockPropsOf(component) {
  const mock = getMockOf(component)
  if (!mock) {
    return null
  }

  const { props } = mock

  const firstInstance = () => first(props)
  const lastInstance = () => last(props)
  const nthInstance = nthIndex => get(props, getActualIndex(nthIndex))
  const findInstance = fn => props.find(fn)

  return {
    firstInstance,
    lastInstance,
    nthInstance,
    findInstance
  }
}

/**
 * Gets the mock and calls of a component.
 * @param  {object}     component  object with mock and calls references
 * @return {component}             class or functional component
 */
function getMockOf(component) {
  if (!component) {
    return null
  }

  const { mock } = component
  if (!mock) {
    return null
  }

  const { calls } = mock

  // a component is called with an array argument as [props, {}]
  // we only want the first argument which is the first element of the array
  const firstArg = args => first(args)
  const props = calls.map(firstArg)

  return {
    mock,
    calls,
    props
  }
}

/**
 * Adapts index from Jest's convention, which starts at 1.
 * See https://jestjs.io/docs/en/expect#tohavebeennthcalledwithnthcall-arg1-arg2-
 */
function getActualIndex(nthIndex) {
  return nthIndex - 1
}
