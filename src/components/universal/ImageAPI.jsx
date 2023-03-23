import React from "react"
import { localhost } from "../../api/ip"

const ImageAPI = (props) => {
  return (
    <img
      src={`${localhost}/img/` + props.name}
      className={props.style}
      alt="No"
    />
  )
}

export default ImageAPI
