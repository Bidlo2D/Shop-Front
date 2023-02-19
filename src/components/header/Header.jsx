import React from "react"
import { useSelector } from "react-redux"
// styles
import styles from "./css/Header.module.css"
import textStyle from "./css/MenuText.module.css"
import imageStyle from "./css/MenuImage.module.css"
// images
import bucket from "../../assets/img/bucketShop.png"
import heart from "../../assets/img/heart.png"
// components
import Menu from "../Menu"
import OrgName from "../OrgName"
import SearchBarHeader from "./SearchBarHeader"
import ButtonCatalog from "../ButtonCatalog"

const Header = () => {
  const visible = useSelector((state) => {
    return state.search.visible
  })

  const titles = [
    <ButtonCatalog>Каталог</ButtonCatalog>,
    <p>Дизайнерам</p>,
    <p>Шоу-рум</p>,
    <p>Доставка и оплата</p>,
  ]

  const images = [
    <SearchBarHeader />,
    <div>
      <img src={heart} alt="" />
    </div>,
    <div>
      <img src={bucket} alt="" />
    </div>,
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
