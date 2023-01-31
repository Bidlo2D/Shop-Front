import React from "react"
import { Link } from "react-router-dom"

const ButtonCatalog = (props) => {
  return (
    <Link to="catalog">
      <p className={props.style}>{props.children}</p>
    </Link>
  )
}

export default ButtonCatalog
