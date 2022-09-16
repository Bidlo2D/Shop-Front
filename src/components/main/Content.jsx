import React from "react"
// styles
import "./css/Content.css"
import Description from "./Description"
// components
import Title from "./Title"
const Content = () => {
  return (
    <div className="content">
      <Title />
      <Description />
    </div>
  )
}

export default Content
