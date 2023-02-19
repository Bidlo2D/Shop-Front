import React from "react"
// components
import Section from "./Section"
// styles
import styles from "./css/Sections.module.css"
// images
import armchair from "../../../../assets/img/armchair.png"
import chair from "../../../../assets/img/chair.png"
import dresser from "../../../../assets/img/dresser.png"
import sofa from "../../../../assets/img/sofa.png"

const Sections = () => {
  const firstSection = {
    image: [chair, sofa],
    text: ["Стулья", "Диваны"],
    path: ["chairs", "sofas"],
  }

  const secondSection = {
    image: [dresser, armchair],
    text: ["Комоды", "Кресла"],
    path: ["dressers", "armchairs"],
  }

  return (
    <div className={styles.sections}>
      <Section data={firstSection} />
      <Section data={secondSection} />
    </div>
  )
}

export default Sections
