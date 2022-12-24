import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
//action
import { searchDeployment } from "../../redux/reducers/header/searchReducer"
// images
import search from "./images/search.png"
// styles
import styles from "./css/SearchTab.module.css"

const SearchTab = () => {
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
    <div>
      <form className={style} action="">
        <img
          onClick={() => {
            dispatch(searchDeployment(<div>Каталог</div>))
          }}
          src={search}
          alt=""
        />
        {!visible ? (
          <input
            className={styles.inputText}
            type="text"
            placeholder="Поиск по каталогу"
          />
        ) : null}
      </form>
    </div>
  )
}
export default SearchTab
