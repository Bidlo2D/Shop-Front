import React from "react"

const Menu = (props) => {
  return (
    <div className={props.style}>
      <ul>
        {props.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
