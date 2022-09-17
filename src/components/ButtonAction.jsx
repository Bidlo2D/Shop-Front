import React from "react"

const ButtonAction = (props) => {
  return (
    <div onClick={props.onClick} className={props.style}>
      {props.children}
    </div>
  )
}

export default ButtonAction
