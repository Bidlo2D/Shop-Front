// components
import ComboBox from "./combo_box/ComboBox"
import ListBox from "./list_box/ListBox"
import PriceBox from "./price_box/PriceBox"
import ModalWindow from "./modal_window/ModalWindow"
// styles
import styles from "./css/Filtres.module.css"
import Color from "./color/Color"

const Filtres = () => {
  return (
    /* TODO: Fixed update all comboBox! */
    <div className={styles.filtres}>
      <ModalWindow />
      <ComboBox text="Стиль">
        <ListBox
          filtres={["Античный", "Византийский", "Романский"]} // с API
        ></ListBox>
      </ComboBox>
      <ComboBox text="Цена">
        <PriceBox />
      </ComboBox>
      <ComboBox text="Материал">
        <ListBox
          filtres={[
            "Искусственная кожа",
            "Натуральная кожа",
            "Ткань",
            "Экокожа",
          ]} // с API
        ></ListBox>
      </ComboBox>
      <ComboBox text="Цвет">
        <ListBox
          filtres={[
            <Color color="black">Черный</Color>,
            <Color color="red">Красный</Color>,
            <Color color="blue">Голубой</Color>,
            <Color color="green">Зеленый</Color>,
          ]} // с API
        ></ListBox>
      </ComboBox>
    </div>
  )
}

export default Filtres
