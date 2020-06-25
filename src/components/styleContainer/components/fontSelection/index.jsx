import React, { useState } from "react"
import { func, arrayOf, shape, string } from "prop-types"
import { compareVariants, formatRandomFont } from "../../functions"
import { Overlay } from "../index"
import "./style.less"

const FontSelection = ({ close, font, fonts, updateFont, side }) => {
  const [fontOptionsOpen, setFontOptionsOpen] = useState(false)

  const [selectedFont, setSelectedFont] = useState(font)

  const [selectedVariant, setSelectedVariant] = useState(
    Object.keys(font.variants[0])[0]
  )

  const toggle = () => setFontOptionsOpen(!fontOptionsOpen)

  const onChangeFont = (family) => {
    const newFont = formatRandomFont(fonts.filter((f) => f.family === family))
    setSelectedFont(newFont)
    setFontOptionsOpen(false)
  }

  const onChangeVariant = (variant) => {
    setSelectedVariant(variant)
  }

  const handleSubmit = () => {
    updateFont(fonts, side, selectedFont.family, selectedVariant)
    close()
  }

  return (
    <div className={`font__selection__container ${side}`}>
      {fontOptionsOpen && <Overlay />}
      <div className="selected__font" onClick={toggle}>
        <span>{selectedFont.family}</span>
        <span>&#x25BC;</span>
      </div>

      {fontOptionsOpen && (
        <div className="font__options">
          {fonts.map(({ family }) => (
            <li
              key={family}
              value={family}
              onClick={() => onChangeFont(family)}
            >
              {family}
            </li>
          ))}
        </div>
      )}
      <div className="variant__options">
        {selectedFont.variants.map((v) => {
          const [variantKey] = Object.keys(v)
          const [variantVal] = Object.values(v)

          return (
            <div className="font__variant" key={variantKey}>
              <input
                type="radio"
                id={variantKey}
                name={variantKey}
                value={variantKey}
                checked={compareVariants(v, selectedVariant)}
                onChange={(e) => onChangeVariant(e.target.value)}
              />
              <label htmlFor={variantKey}>{variantVal}</label>
            </div>
          )
        })}
      </div>

      <div className="submit__font__btn">
        <button onClick={close}>Cancel</button>
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
    </div>
  )
}

FontSelection.propTypes = {
  close: func,
  side: string,
  updateFont: func,
  font: shape({
    family: string,
    variants: arrayOf(shape({})),
    variant: shape({})
  }),
  fonts: arrayOf(
    shape({
      family: string,
      variants: arrayOf(string)
    })
  )
}

export default FontSelection
