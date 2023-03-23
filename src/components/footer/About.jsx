import React from "react"
// components
import Menu from "../universal/Menu"
import ButtonTextLink from "../universal/ButtonTextLink"
// styles
import styles from "./css/About.module.css"
import imageStyle from "./css/MenuImage.module.css"
// images
import instagram from "../../assets/img/instagram.png"
import facebook from "../../assets/img/facebook.png"
import youtube from "../../assets/img/youtube.png"
import telegram from "../../assets/img/telegram.png"

const About = () => {
  const images = [
    <img src={instagram} alt="" />,
    <img src={facebook} alt="" />,
    <img src={youtube} alt="" />,
    <img src={telegram} alt="" />,
  ]
  const leftBlock = [
    <ButtonTextLink to="/" style={styles.org}>
      Antonio Lucchi
    </ButtonTextLink>,
    <Menu style={imageStyle.menu} items={images} />,
    <p>Магазин дизайнерской мебели</p>,
    <p>+7 925 560 10 10</p>,
  ]
  const middleBlock = [
    <ButtonTextLink to="catalog" style={styles.button}>
      Каталог
    </ButtonTextLink>,
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
