import React, { Component } from "react"
import { shape, arrayOf, func, string, bool } from "prop-types"
import { Helmet } from "react-helmet"
import { connect } from "react-redux"
import { URL_BEGINNING, URL_END } from "constants/fontUrl"
import { dataErrorSelector } from "reducers/dataStatus/selectors"
import { getFonts, getColor, updateFont, updateColor } from "./actions"
import {
  fontsSelector,
  leftFontSelector,
  rightFontSelector,
  leftColorSelector,
  rightColorSelector,
  getFontsLoadingSelector
} from "./reducers/selectors"
import { StyleItem, Mask } from "./components"
import { formatFontFamily, formatStyle } from "./functions"
import "./style.less"

class StyleContainer extends Component {
  componentDidMount() {
    this.props.getFonts()
    this.props.getColor()
  }

  render() {
    const {
      fonts,
      leftFont,
      rightFont,
      leftColor,
      rightColor,
      isLoadingFonts,
      updateFont,
      updateColor
    } = this.props

    const leftFamily = formatFontFamily(leftFont.family)
    const rightFamily = formatFontFamily(rightFont.family)

    const leftStyle = formatStyle(leftFont, leftColor)
    const rightStyle = formatStyle(rightFont, rightColor)

    return (
      <div className="main">
        <Mask loaded={!isLoadingFonts} />
        {!isLoadingFonts && (
          <Helmet>
            <link
              href={`${URL_BEGINNING}${leftFamily}|${rightFamily}${URL_END}`}
              rel="stylesheet"
            />
          </Helmet>
        )}
        <header>
          <h1>ColoText</h1>
        </header>
        <div className="style__container">
          <StyleItem
            side="left"
            style={leftStyle}
            font={leftFont}
            fonts={fonts}
            updateFont={updateFont}
            updateColor={updateColor}
          />
          <StyleItem
            side="right"
            style={rightStyle}
            font={rightFont}
            fonts={fonts}
            updateFont={updateFont}
            updateColor={updateColor}
          />
        </div>
        <footer>
          <p>&copy; 2019 Made with React by Jul W</p>
        </footer>
      </div>
    )
  }
}

StyleContainer.propTypes = {
  fonts: arrayOf(shape({})),
  getFonts: func,
  getColor: func,
  updateColor: func,
  updateFont: func,
  leftFont: shape({
    category: string,
    family: string,
    variants: arrayOf(shape({}))
  }),
  rightFont: shape({
    category: string,
    family: string,
    variants: arrayOf(shape({}))
  }),
  leftColor: shape({
    fontColor: string,
    backgroundColor: string
  }),
  rightColor: shape({
    fontColor: string,
    backgroundColor: string
  }),
  isLoadingFonts: bool
}

const mapStateToProps = (state) => ({
  fonts: fontsSelector(state),
  isLoadingFonts: getFontsLoadingSelector(state),
  leftFont: leftFontSelector(state),
  leftColor: leftColorSelector(state),
  rightFont: rightFontSelector(state),
  rightColor: rightColorSelector(state),
  error: dataErrorSelector(state)
})

const mapDispatchToProps = {
  getFonts,
  getColor,
  updateFont,
  updateColor
}

export { StyleContainer as UnconnectedStyleContainer }

export default connect(mapStateToProps, mapDispatchToProps)(StyleContainer)
