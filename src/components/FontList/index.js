import React from "react"
import { string, shape, arrayOf, number } from "prop-types"
import "./style.less"

const FontList = ({ fonts = [] }) => (
  <div className="TodoList__Container">
    <ol className="TodoList">
      {fonts.map(({ family, category }) => (
        <li key={`${family}_${category}`}>{`${family}; ${category}`}</li>
      ))}
    </ol>
  </div>
)

FontList.propTypes = {
  fonts: arrayOf(
    shape({
      id: number,
      title: string
    })
  )
}

export default FontList
