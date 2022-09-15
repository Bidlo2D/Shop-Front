import React from "react"

const Menu = (props) => {
  return (
    <ul className={props.style}>
      {props.items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  )
}

export default Menu
