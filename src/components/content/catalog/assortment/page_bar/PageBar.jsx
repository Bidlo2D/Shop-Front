import React from "react"
import { useSelector } from "react-redux"
// styles
import styles from "./css/PageBar.module.css"
// components
import PageButton from "./page_button/PageButton"

const PageBar = () => {
  const countPages = useSelector((state) => {
    return state.assortment.countPages
  })

  const createPageElement = () => {
    let mass = []
    for (let i = 0; i < countPages; i++) {
      mass.push(<PageButton key={i} page={i} />)
    }
    return mass
  }
  return <div className={styles.pageBar}>{createPageElement()}</div>
}

export default PageBar
