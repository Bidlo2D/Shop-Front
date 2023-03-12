import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useHref } from "react-router-dom"
// styles
import styles from "./css/Path.module.css"
// actions
import { changeCatalog } from "./../../../redux/reducers/content/pathReducer"

const Path = () => {
  const dispatch = useDispatch()
  const directory = useSelector((state) => {
    return state.path.currentDirectory
  })
  const category = useSelector((state) => {
    return state.path.currentСategory
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
