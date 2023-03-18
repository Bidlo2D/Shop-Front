import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
//action
import { searchDeployment } from "../../../redux/reducers/search/searchReducer"
import { searchLoadProducts } from "./../../../redux/reducers/search/searchReducer"
// images
import search from "../../../assets/img/search.png"
// styles
import styles from "./css/SearchBarHeader.module.css"
// API
import { searchProducts } from "./../../../api/productAPI"
import SearchBlockResult from "./search_block_result/SearchBlockResult"

const SearchBarHeader = () => {
  const [text, setText] = useState("")
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
        className={styles.image}
        alt=""
      />
      {!visible && (
        <div>
          <input
            onChange={(e) => {
              setText(e.target.value)
              searchProducts(e.target.value).then((data) => {
                dispatch(searchLoadProducts(data))
              })
            }}
            className={styles.inputText}
            type="search"
            placeholder="Поиск по каталогу"
            value={text}
          />
          <SearchBlockResult />
        </div>
      )}
    </form>
  )
}
export default SearchBarHeader
