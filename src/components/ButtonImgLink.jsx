import React from "react"
import { Link } from "react-router-dom"

const ButtonImgLink = (props) => {
  return (
    <Link to={props.to}>
      <img src={props.image} className={props.style} alt="No" />
    </Link>
  )
}

export default ButtonImgLink
