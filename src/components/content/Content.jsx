import React from "react"
// styles
import "./css/Content.css"
import Description from "./Description"
import Sections from "./Sections"
// components
import Title from "./Title"

const Content = () => {
  return (
    <div className="content">
      <Title />
      <Description />
      <Sections />
    </div>
  )
}

export default Content
