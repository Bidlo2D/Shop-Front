import React from "react"
// styles
import styles from "./css/MainPage.module.css"
// component
import IdeaList from "../IdeaList"
import Title from "../Title"
import Description from "../Description"
import Mailing from "../Mailing"
import Sections from "../Sections"

const MainPage = () => {
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

export default MainPage
