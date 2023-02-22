import React from "react"

const ImageAPI = (props) => {
  //const path = "http://192.168.56.1:8080/img/" + props.name
  return (
    <img
      src={"http://192.168.56.1:8080/img/" + props.name}
      className={props.style}
    ></img>
  )
}

export default ImageAPI
