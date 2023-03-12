import React from "react"
import { Link } from "react-router-dom"

const ButtonTextLink = (props) => {
  return (
    <Link to={props.to}>
      <p className={props.style}>{props.children}</p>
    </Link>
  )
}

export default ButtonTextLink
