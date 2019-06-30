import React, { Component } from "react"
import { shape, arrayOf, func } from "prop-types"
import { connect } from "react-redux"
import { dataErrorSelector } from "reducers/DataStatus/selectors"
import { getFonts, getColor } from "./actions"
import {
  fontsSelector,
  leftFontSelector,
  rightFontSelector,
  leftColorSelector,
  rightColorSelector
} from "./reducers/selectors"
import StyleItem from "./components/StyleItem"
import "./style.less"

class StyleContainer extends Component {
  componentDidMount() {
    this.props.getFonts()
    this.props.getColor()
  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Coolor Text</h1>
        </div>
        <StyleItem side="left" />
        <StyleItem side="right" />
        <div className="footer">Some disclaimer</div>
      </div>
    )
  }
}

StyleContainer.propTypes = {
  fonts: arrayOf(shape({})),
  getFonts: func,
  getColor: func
}

const mapStateToProps = state => ({
  fonts: fontsSelector(state),
  leftFont: leftFontSelector(state),
  leftColor: leftColorSelector(state),
  rightFont: rightFontSelector(state),
  rightColor: rightColorSelector(state),
  error: dataErrorSelector(state)
})

const mapDispatchToProps = {
  getFonts,
  getColor
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleContainer)
