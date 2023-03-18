import React from "react"
// styles
import styles from "./css/Header.module.css"
import imageStyle from "./css/MenuImage.module.css"
// images
import bucket from "../../assets/img/bucketShop.png"
import heart from "../../assets/img/heart.png"
// components
import Menu from "../Menu"
import OrgName from "../OrgName"
import SearchBarHeader from "./search_bar_header/SearchBarHeader"
import ButtonImgLink from "./../ButtonImgLink"
import MenuText from "./menu_text/MenuText"

const Header = () => {
  const images = [
    <SearchBarHeader />,
    <ButtonImgLink style={styles.image} to="favourites" image={heart} />,
    <ButtonImgLink style={styles.image} to="bucket" image={bucket} />,
  ]

  return (
    <header className={styles.header}>
      <OrgName />
      <MenuText />
      <Menu style={imageStyle.menu} items={images} />
    </header>
  )
}

export default Header
