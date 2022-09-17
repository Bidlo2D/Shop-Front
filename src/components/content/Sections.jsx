import React from "react"
// components
import Section from "./Section"
import SectionBlock from "./SectionBlock"
// styles
import styles from "./css/Sections.module.css"
// images
import armchair from "./images/armchair.png"
import chair from "./images/chair.png"
import chest from "./images/chest.png"
import sofa from "./images/sofa.png"

const Sections = () => {
  return (
    <div className={styles.sections}>
      {/* #1 */}
      <div className={styles.section}>
        <Section style={styles.section40pR} image={chair} text="Стулья" />
        <Section style={styles.section60p} image={sofa} text="Диваны" />
      </div>
      {/* #2 */}
      <div className={styles.section}>
        <Section style={styles.section60p} image={chest} text="Комоды" />
        <Section style={styles.section40pL} image={armchair} text="Кресла" />
      </div>
    </div>
  )
}

export default Sections
