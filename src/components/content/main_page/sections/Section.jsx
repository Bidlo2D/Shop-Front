import React, { memo } from "react"
import { Link } from "react-router-dom"
// styles
import styles from "./css/Section.module.css"

const Section = memo(({ data }) => {
  const mapData = () => {
    const elements = []
    for (let i = 0; i < data.image.length; i++) {
      let path = `/catalog/${data.path[i]}`
      elements.push(
        <Link to={path} className={styles.item} key={i}>
          <p>{data.text[i]}</p>
          <img src={data.image[i]} alt="img" />
        </Link>
      )
    }
    return elements
  }
  return (
    <div className={styles.section}>
      {!data.image.length === data.text.length ? <div></div> : mapData()}
    </div>
  )
})

export default Section
