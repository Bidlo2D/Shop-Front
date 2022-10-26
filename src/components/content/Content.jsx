import React from "react"
// styles
import styles from "./css/Content.module.css"
// components
import Title from "./Title"
import Sections from "./Sections"
import Mailing from "./Mailing"
import Description from "./Description"
import IdeaList from "./IdeaList"

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <Title />
        <Description />
        <Sections />
        <IdeaList />
      </div>
      <Mailing />
    </div>
  )
}

export default Content
