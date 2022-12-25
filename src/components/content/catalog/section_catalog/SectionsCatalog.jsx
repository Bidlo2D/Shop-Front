import React from "react"
// components
import Sections from "../../main_page/sections/Sections"
import AllSection from "./AllSection"
// styles
import styles from "./css/SectionsCatalog.module.css"

const SectionsCatalog = () => {
  return (
    <div className={styles.sectionsCatalog}>
      <AllSection></AllSection>
      <Sections></Sections>
    </div>
  )
}

export default SectionsCatalog
