function toBeType(received, argument) {
  let type = typeof received

  if (type === "object" && Array.isArray(received)) {
    type = "array"
  }

  const message = () => `expected ${received} to be type ${argument}`
  const pass = type === argument

  return { message, pass }
}

expect.extend({ toBeType })
