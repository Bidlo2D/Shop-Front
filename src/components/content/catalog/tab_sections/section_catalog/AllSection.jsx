import React from "react"
import { Link } from "react-router-dom"
import styles from "./css/AllSection.module.css"

const AllSection = () => {
  return (
    <Link to="all">
      <div onClick={() => {}} className={styles.item}>
        <p>Вся мебель</p>
      </div>
    </Link>
  )
}

export default AllSection
