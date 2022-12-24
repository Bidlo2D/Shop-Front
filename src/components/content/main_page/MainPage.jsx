import React from "react"
// styles
import styles from "./css/MainPage.module.css"
// component
import IdeaList from "./idea_list/IdeaList"
import Title from "./title/Title"
import Description from "./description/Description"
import Mailing from "./mailing/Mailing"
import Sections from "./sections/Sections"

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
