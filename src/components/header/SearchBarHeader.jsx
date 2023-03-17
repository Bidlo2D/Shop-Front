import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
//action
import { searchDeployment } from "../../redux/reducers/search/searchReducer"
// images
import search from "../../assets/img/search.png"
// styles
import styles from "./css/SearchTab.module.css"

const SearchBarHeader = () => {
  const [style, setStyle] = useState(styles.formSearchOff)
  const dispatch = useDispatch()
  const visible = useSelector((state) => {
    return state.search.visible
  })

  useEffect(() => {
    if (visible) {
      setStyle(styles.formSearchOff)
    } else {
      setStyle(styles.formSearchOn)
    }
  }, [visible])

  return (
    <form className={style} action="">
      <img
        onClick={() => {
          dispatch(searchDeployment())
        }}
        src={search}
        alt=""
      />
      {!visible ? (
        <input
          className={styles.inputText}
          type="search"
          placeholder="Поиск по каталогу"
        />
      ) : null}
    </form>
  )
}
export default SearchBarHeader
