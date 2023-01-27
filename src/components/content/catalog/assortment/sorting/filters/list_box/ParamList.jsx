import React, { memo } from "react"
import styles from "./css/ParamList.module.css"

const ParamList = memo((props) => {
  return <ul className={styles.collection}>{props.children}</ul>
})

export default ParamList
