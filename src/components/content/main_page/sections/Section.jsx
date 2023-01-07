import React, { memo } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
// actions
import { changeCatalog } from "../../../../redux/reducers/content/catalog/catalogViewReducer"
// styles
import styles from "./css/Section.module.css"

const Section = memo(({ data }) => {
  const dispatch = useDispatch()
  const mapData = () => {
    const elements = []
    for (let i = 0; i < data.image.length; i++) {
      let path = `/catalog/${data.path[i]}`
      elements.push(
        <Link
          to={path}
          onClick={() => {
            dispatch(
              changeCatalog({
                dir: "Главная / Каталог / " + data.text[i],
                ctr: "Дизайнерские " + data.text[i].toLowerCase(),
              })
            )
          }}
          className={styles.item}
          key={i}
        >
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
