import React from "react"

const ImageAPI = (props) => {
  return (
    <img
      src={"http://localhost:8080/img/" + props.name}
      className={props.style}
    ></img>
  )
}

export default ImageAPI
