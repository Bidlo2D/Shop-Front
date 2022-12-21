import React from "react"
// styles
import styles from "./css/Section.module.css"

const Section = ({ data }) => {
  const mapData = () => {
    const elements = []
    for (let i = 0; i < data.image.length; i++) {
      elements.push(
        <div className={styles.item} key={i}>
          <p>{data.text[i]}</p>
          <img src={data.image[i]} alt="img" />
        </div>
      )
    }
    return elements
  }
  return (
    <div className={styles.section}>
      {!data.image.length === data.text.length ? <div></div> : mapData()}
    </div>
  )
}

export default Section
