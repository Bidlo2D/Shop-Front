import React from "react"
// Components
import Menu from "../Menu"
import OrgName from "../OrgName"
// Styles
import styles from "./css/About.module.css"
import imageStyle from "./css/MenuImage.module.css"
//import textStyle from "../css/MenuText.module.css"

// images
import instagram from "./images/instagram.png"
import facebook from "./images/facebook.png"
import youtube from "./images/youtube.png"
import telegram from "./images/telegram.png"

const About = () => {
  const images = [
    <img src={instagram} alt="" />,
    <img src={facebook} alt="" />,
    <img src={youtube} alt="" />,
    <img src={telegram} alt="" />,
  ]
  const leftBlock = [
    <OrgName />,
    <Menu style={imageStyle.menu} items={images} />,
    <p>Магазин дизайнерской мебели</p>,
    <p>+7 925 560 10 10</p>,
  ]
  const middleBlock = [
    <p>Каталог</p>,
    <p>Вся мебель</p>,
    <p>Диваны</p>,
    <p>Кресла</p>,
    <p>Стулья</p>,
    <p>Комоды</p>,
  ]
  const rightBlock = [
    <p>Дизайнерам</p>,
    <p>Шоу-рум</p>,
    <p>Доставка и оплата</p>,
    <p>Публичная оферта</p>,
  ]
  return (
    <div className={styles.about}>
      <Menu style={styles.leftBlock} items={leftBlock} />
      <Menu style={styles.middleBlock} items={middleBlock} />
      <Menu style={styles.rightBlock} items={rightBlock} />
    </div>
  )
}

export default About
