import React from "react"
import { useDispatch, useSelector } from "react-redux"
//action
import { visibleOnOff } from "../../redux/reducers/header/action"
// styles
import styles from "./css/Header.module.css"
import textStyle from "./css/MenuText.module.css"
import imageStyle from "./css/MenuImage.module.css"
// images
import bucket from "./images/bucketShop.png"
import search from "./images/search.png"
import heart from "./images/heart.png"
// components
import Menu from "../Menu"
import OrgName from "../OrgName"
import ButtonAction from "../ButtonAction"
const Header = () => {
  const dispatch = useDispatch()
  const visible = useSelector((state) => {
    return state.searchReducer.visible
  })
  const titles = [
    <ButtonAction>Каталог</ButtonAction>,
    <ButtonAction>Дизайнерам</ButtonAction>,
    <ButtonAction>Шоу-рум</ButtonAction>,
    <ButtonAction>Доставка и оплата</ButtonAction>,
  ]
  const images = [
    <ButtonAction
      onClick={() => {
        dispatch(visibleOnOff(!visible))
      }}
    >
      <img src={search} alt="" />
    </ButtonAction>,
    <ButtonAction>
      <img src={heart} alt="" />
    </ButtonAction>,
    <ButtonAction>
      <img src={bucket} alt="" />
    </ButtonAction>,
  ]
  return (
    <header className={styles.header}>
      <OrgName />
      {visible ? <Menu style={textStyle.menu} items={titles} /> : null}
      <Menu style={imageStyle.menu} items={images} />
    </header>
  )
}

export default Header
