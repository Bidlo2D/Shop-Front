import React from "react"

const Color = (props) => {
  return (
    <span style={{ display: "flex" }}>
      <div
        style={{
          height: "1em",
          width: "1em",
          backgroundColor: props.color,
          marginRight: 15,
        }}
      />
      {props.children}
    </span>
  )
}

export default Color
