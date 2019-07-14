import { bool } from "prop-types"
import React from "react"
import "./style.less"

const Mask = ({ loaded }) => {
  return <span className={`mask ${loaded ? "loaded" : ""}`} />
}

Mask.propTypes = {
  loaded: bool
}

export default Mask
