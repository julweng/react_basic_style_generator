import React, { useState } from "react"
import { string, shape, arrayOf, func } from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFont, faPalette } from "@fortawesome/free-solid-svg-icons"
import { FontSelection, ColorSelection, Overlay } from "../index"
import "./style.less"

const Selection = ({
  type,
  font,
  fonts,
  updateFont,
  side,
  updateColor,
  color
}) => {
  const [fontSelectionOpen, setFontSelectionOpen] = useState(false)
  const [paletteSelectionOpen, setPaletteSelectionOpen] = useState(false)

  const handleFontIconClick = () => setFontSelectionOpen(!fontSelectionOpen)

  const handleFontClose = () => setFontSelectionOpen(false)

  const handlePaletteIconClick = () =>
    setPaletteSelectionOpen(!paletteSelectionOpen)

  const handlePaletteClose = () => setPaletteSelectionOpen(false)
  console.log(fontSelectionOpen)
  return (
    <div className="selection">
      {type === "font" && (
        <>
          <button
            className="font"
            title="font style"
            onClick={handleFontIconClick}
          >
            <FontAwesomeIcon icon={faFont} />
          </button>
          {fontSelectionOpen && <Overlay />}
          {fontSelectionOpen && (
            <FontSelection
              side={side}
              close={handleFontClose}
              font={font}
              fonts={fonts}
              updateFont={updateFont}
            />
          )}
        </>
      )}
      {type === "palette" && (
        <>
          <button
            className="palette"
            title="text background color"
            onClick={handlePaletteIconClick}
          >
            <FontAwesomeIcon icon={faPalette} />
          </button>
          {paletteSelectionOpen && <Overlay />}
          {paletteSelectionOpen && (
            <ColorSelection
              side={side}
              close={handlePaletteClose}
              color={color}
              updateColor={updateColor}
            />
          )}
        </>
      )}
    </div>
  )
}

Selection.propTypes = {
  type: string,
  font: shape({}),
  fonts: arrayOf(shape({})),
  updateFont: func,
  updateColor: func,
  color: shape({}),
  side: string
}

export default Selection
