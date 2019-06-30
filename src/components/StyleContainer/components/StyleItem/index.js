import React from "react"
import { string, shape } from "prop-types"

const StyleItem = ({ side }) => {
  return <div className={side}>Happy picking!</div>
}

StyleItem.propTypes = {
  side: string,
  style: shape({})
}

export default StyleItem
