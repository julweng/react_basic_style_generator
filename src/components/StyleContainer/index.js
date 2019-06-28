import React, { Component } from "react"
import { shape, arrayOf, func } from "prop-types"
import { connect } from "react-redux"
import { dataErrorSelector } from "reducers/DataStatus/selectors"
import { getFontList } from "./actions"
import { fontListSelector } from "./reducers/selectors"
import { FontList } from "components"

class StyleContainer extends Component {
  componentDidMount() {
    this.props.getFontList()
  }

  render() {
    const { fonts } = this.props
    return (
      <div className="TodoContainer">
        {fonts.length === 0 ? (
          <p>Nothing to see here!</p>
        ) : (
          <FontList fonts={fonts} />
        )}
      </div>
    )
  }
}

StyleContainer.propTypes = {
  fonts: arrayOf(shape({})),
  getFontList: func
}

const mapStateToProps = state => ({
  fonts: fontListSelector(state),
  error: dataErrorSelector(state)
})

const mapDispatchToProps = {
  getFontList
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyleContainer)
