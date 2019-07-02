import React from "react"
import { string, shape, arrayOf, func } from "prop-types"
import { Selection } from "../index"
import "./style.less"

const StyleItem = ({ side, style, fonts, font, updateFont }) => {
  const defaultText = "Happy Picking"

  return (
    <div className={side} style={style}>
      <div className="selection__container">
        <Selection
          type="font"
          side={side}
          fonts={fonts}
          font={font}
          updateFont={updateFont}
        />
        <Selection type="palette" />
      </div>
      <p>{font.family || defaultText}</p>
    </div>
  )
}

StyleItem.propTypes = {
  side: string,
  style: shape({}),
  color: shape({}),
  font: shape({}),
  fonts: arrayOf(shape({})),
  updateFont: func,
  updateColor: func
}

export default StyleItem
