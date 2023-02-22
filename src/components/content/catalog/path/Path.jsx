import React, { useEffect } from "react"
// styles
import styles from "./css/Path.module.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeCatalog } from "./../../../../redux/reducers/content/catalog/catalogViewReducer"
import { useHref } from "react-router-dom"

const Path = () => {
  const dispatch = useDispatch()
  const directory = useSelector((state) => {
    return state.catalog.currentDirectory
  })
  const category = useSelector((state) => {
    return state.catalog.currentСategory
  })
  const href = useHref()
  useEffect(() => {
    dispatch(changeCatalog(href))
  }, [href, dispatch])
  return (
    <div>
      <p className={styles.directory}>{directory}</p>
      <p className={styles.category}>{category}</p>
    </div>
  )
}

export default Path
