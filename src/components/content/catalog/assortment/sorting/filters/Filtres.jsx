import React from "react"
import ComboBox from "./combo_box/ComboBox"
import styles from "./css/Filtres.module.css"
import StyleBox from "./style_box/StyleBox"

const Filtres = () => {
  return (
    <div className={styles.filtres}>
      <ComboBox text="Стили">
        <StyleBox></StyleBox>
      </ComboBox>
      <ComboBox text="Цена"></ComboBox>
      <ComboBox text="Материал"></ComboBox>
      <ComboBox text="Цвет"></ComboBox>
    </div>
  )
}

export default Filtres
