import React from "react"
import { useDispatch } from "react-redux"
import { changeContent } from "../redux/reducers/content/main_page/contentViewReducer"
// components
import MainPage from "./content/main_page/MainPage"
// styles
import styles from "./css/OrgName.module.css"
const OrgName = () => {
  const dispatch = useDispatch()
  return (
    <p
      onClick={() => {
        dispatch(changeContent(<MainPage>Главная страница</MainPage>))
      }}
      className={styles.name}
    >
      Antonio Lucchi
    </p>
  )
}

export default OrgName
