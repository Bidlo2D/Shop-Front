// components
import ComboBox from "./combo_box/ComboBox"
import StyleBox from "./style_box/StyleBox"
import ModalWindow from "./modal_window/ModalWindow"
// styles
import styles from "./css/Filtres.module.css"

const Filtres = () => {
  return (
    /* TODO: Fixed update all comboBox! */
    <div className={styles.filtres}>
      <ModalWindow />
      <ComboBox text="Стиль">
        <StyleBox
          filtres={["Античный", "Византийский", "Романский"]} // с API
        ></StyleBox>
      </ComboBox>
      <ComboBox text="Цена"></ComboBox>
      <ComboBox text="Материал"></ComboBox>
      <ComboBox text="Цвет"></ComboBox>
    </div>
  )
}

export default Filtres
