import React, { useState } from "react"
// components
import ComboBox from "./combo_box/ComboBox"
import StyleBox from "./style_box/StyleBox"
// styles
import styles from "./css/Filtres.module.css"
import { useDispatch, useSelector } from "react-redux"
import { viewBusy } from "../../../../../../redux/reducers/content/catalog/assortment/filtresReducer"
import { useEffect } from "react"

const Filtres = () => {
  const [style, setStyle] = useState(styles.modalCancelHidden)
  const dispatch = useDispatch()
  const busy = useSelector((state) => {
    return state.filtres.busy
  })
  useEffect(() => {
    if (busy) {
      setStyle(styles.modalCancel)
    } else {
      setStyle(styles.modalCancelHidden)
    }
  }, [busy])
  return (
    <div className={styles.filtres}>
      <div
        onClick={() => {
          dispatch(viewBusy())
        }}
        className={style}
      >
        {" "}
      </div>
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
