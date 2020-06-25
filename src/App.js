import React from "react"
import { StyleContainer } from "components"
import "./App.less"

const App = () => {
  console.log(process.env.API_KEY)
  return (
    <>
      <StyleContainer />
    </>
  )
}

export default App
