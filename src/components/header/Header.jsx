import React from "react"
// styles
import "./css/Header.css"
import textStyle from "./css/MenuText.module.css"
import imageStyle from "./css/MenuImage.module.css"
// images
import bucket from "./images/bucketShop.png"
import search from "./images/search.png"
import heart from "./images/heart.png"
// components
import Menu from "../Menu"
import OrgName from "../OrgName"
const Header = () => {
  const titles = ["Каталог", "Дизайнерам", "Шоу-рум", "Доставка и оплата"]
  const images = [
    <img src={search} alt="" />,
    <img src={heart} alt="" />,
    <img src={bucket} alt="" />,
  ]
  return (
    <header className="header">
      <OrgName />
      <Menu style={textStyle.menu} items={titles} />
      <Menu style={imageStyle.menu} items={images} />
    </header>
  )
}

export default Header
