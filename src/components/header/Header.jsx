import React from "react"
// styles
import styles from "./css/Header.module.css"
import textStyle from "./css/MenuText.module.css"
import imageStyle from "./css/MenuImage.module.css"
// images
import bucket from "./images/bucketShop.png"
import search from "./images/search.png"
import heart from "./images/heart.png"
// components
import Menu from "./Menu"
const Header = () => {
  const titles = ["Каталог", "Дизайнерам", "Шоу-рум", "Доставка и оплата"]
  const images = [
    <img src={search} />,
    <img src={heart} />,
    <img src={bucket} />,
  ]
  return (
    <div className={styles.header}>
      <span className={styles.name}>Antonio Lucchi</span>
      <Menu style={textStyle.menu} items={titles} />
      <Menu style={imageStyle.menu} items={images} />
    </div>
  )
}

export default Header
