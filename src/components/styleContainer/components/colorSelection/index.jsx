import React, { useState } from "react"
import { func, string, shape } from "prop-types"
import { CompactPicker } from "react-color"
import "./style.less"

const ColorSelection = ({ side, close, color, updateColor }) => {
  const [background, setBackground] = useState(color.backgroundColor)
  const [textColor, setTextColor] = useState(color.color)

  const handleBackgroundChange = color => setBackground(color)
  const handleTextColorChange = color => setTextColor(color)

  const handleSubmitColor = () => {
    const text = typeof textColor === "string" ? textColor : textColor.hex
    const back = typeof background === "string" ? background : background.hex
    updateColor(side, text, back)
    close()
  }

  return (
    <div className={`color__selection__container ${side}`}>
      <div className="color__selection">
        <div className="background__selection">
          <div>Background</div>
          <CompactPicker color={background} onChange={handleBackgroundChange} />
        </div>
        <div className="text__selection">
          <div>Text</div>
          <CompactPicker color={textColor} onChange={handleTextColorChange} />
        </div>
      </div>
      <div className="submit__color__btn">
        <button onClick={close}>Cancel</button>
        <button onClick={handleSubmitColor}>Submit</button>
      </div>
    </div>
  )
}

ColorSelection.propTypes = {
  close: func,
  updateColor: func,
  color: shape({
    color: string,
    backgroundColor: string
  }),
  side: string
}

export default ColorSelection
