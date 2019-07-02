import React, { useState } from "react"
import { string, shape, arrayOf, func } from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFont, faPalette } from "@fortawesome/free-solid-svg-icons"
import { FontSelection } from "../index"
import "./style.less"

const Selection = ({ type, font, fonts, updateFont, side }) => {
  const [fontSelectionOpen, setFontSelectionOpen] = useState(false)
  //const [openPaletteSelection, setPaletteSelectionOpen] = useState(false)

  const handleFontClose = () => setFontSelectionOpen(false)

  //const handlePaletteClose = () => setPaletteSelectionOpen(false)

  return (
    <div className="selection">
      {type === "font" && (
        <>
          <button
            className="font"
            title="font style"
            onClick={() => setFontSelectionOpen(!fontSelectionOpen)}
          >
            <FontAwesomeIcon icon={faFont} />
          </button>
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
        <button
          className="palette"
          title="text/background color"
          onClick={() => console.log("hi")}
        >
          <FontAwesomeIcon icon={faPalette} />
        </button>
      )}
    </div>
  )
}

Selection.propTypes = {
  type: string,
  font: shape({}),
  fonts: arrayOf(shape({})),
  updateFont: func,
  side: string
}

export default Selection
