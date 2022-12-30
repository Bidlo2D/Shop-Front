import React from "react"
import { useDispatch } from "react-redux"
// actions
import { changeCatalog } from "../../../../redux/reducers/content/catalog/catalogViewReducer"
// styles
import styles from "./css/Section.module.css"

const Section = ({ data }) => {
  const dispatch = useDispatch()
  const mapData = () => {
    const elements = []
    for (let i = 0; i < data.image.length; i++) {
      elements.push(
        <div
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
