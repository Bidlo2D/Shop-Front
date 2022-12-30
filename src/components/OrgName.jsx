import React from "react"
import { Link } from "react-router-dom"
// styles
import styles from "./css/OrgName.module.css"
const OrgName = () => {
  return (
    <Link to="/" className={styles.name}>
      Antonio Lucchi
    </Link>
  )
}

export default OrgName
