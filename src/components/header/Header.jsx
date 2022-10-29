import React from "react"
import { useSelector } from "react-redux"
//import { useState } from "react"
// styles
import styles from "./css/Header.module.css"
import textStyle from "./css/MenuText.module.css"
import imageStyle from "./css/MenuImage.module.css"
// images
import bucket from "./images/bucketShop.png"
import heart from "./images/heart.png"
// components
import Menu from "../Menu"
import OrgName from "../OrgName"
import ButtonAction from "../ButtonAction"
import SearchTab from "./SearchTab"

const Header = () => {
  const visible = useSelector((state) => {
    return state.search.visible
  })

  const titles = [
    <ButtonAction>Каталог</ButtonAction>,
    <ButtonAction>Дизайнерам</ButtonAction>,
    <ButtonAction>Шоу-рум</ButtonAction>,
    <ButtonAction>Доставка и оплата</ButtonAction>,
  ]

  const images = [
    <SearchTab />,
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
