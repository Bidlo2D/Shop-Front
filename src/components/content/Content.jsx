import React from "react"
// styles
import "./css/Content.css"
import Description from "./Description"
import Directories from "./Directories"
import IdeaList from "./IdeaList"
// components
import Title from "./Title"

const Content = () => {
  return (
    <div className="content">
      <Title />
      <Description />
      <Directories />
      <IdeaList />
    </div>
  )
}

export default Content
