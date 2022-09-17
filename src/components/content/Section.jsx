import React from "react"

const Section = (props) => {
  return (
    <div onClick={props.onClick} className={props.style}>
      <p>{props.text}</p>
      <img src={props.image}></img>
    </div>
  )
}

export default Section
