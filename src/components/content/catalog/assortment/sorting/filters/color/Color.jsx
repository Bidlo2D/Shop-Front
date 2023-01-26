import React from "react"

const Color = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "1em",
          width: "1em",
          backgroundColor: props.color,
          marginRight: 15,
        }}
      />
      {props.children}
    </div>
  )
}

export default Color
