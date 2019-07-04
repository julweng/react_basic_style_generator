import React from "react"
import { string, shape, arrayOf, func } from "prop-types"
import { Selection, StyleRule } from "../index"
import "./style.less"

const StyleItem = ({ side, style, fonts, font, updateFont, updateColor }) => {
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
        <Selection
          type="palette"
          side={side}
          color={style}
          updateColor={updateColor}
        />
      </div>
      <p>{font.family || defaultText}</p>
      <StyleRule style={style} />
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
