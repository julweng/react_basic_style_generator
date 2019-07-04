import React from "react"
import { string, shape, number } from "prop-types"
import { generateCssRule } from "../../functions"
import "./style.less"

const StyleRule = ({
  style: {
    color = "",
    backgroundColor = "",
    fontFamily = "",
    fontWeight = "",
    fontStyle = ""
  }
}) => {
  const font = generateCssRule(fontFamily, "font family")
  const textColor = generateCssRule(color, "font color")
  const background = generateCssRule(backgroundColor, "background color")
  const style = generateCssRule(fontStyle, "font style")
  const weight = generateCssRule(fontWeight, "font weight")

  return (
    <div className="style__rule__container">
      <div>
        <p>{`color: ${textColor};`}</p>
        <p>{`background-color: ${background};`}</p>
        <p>{`font-family: ${font};`}</p>
        <p>{`font-style: ${style};`}</p>
        <p>{`font-weight: ${weight};`}</p>
      </div>
    </div>
  )
}

StyleRule.propTypes = {
  style: shape({
    color: string,
    backgroundColor: string,
    fontFamily: string,
    fontWeight: number,
    fontStyle: string
  })
}
export default StyleRule
