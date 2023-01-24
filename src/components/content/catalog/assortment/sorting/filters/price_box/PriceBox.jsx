import React from "react"
import styles from "./css/PriceBox.module.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeValueMin } from "../../../../../../../redux/reducers/content/catalog/assortment/filtresReducer"
import { changeValueMax } from "./../../../../../../../redux/reducers/content/catalog/assortment/filtresReducer"
import PricesInput from "./input_number/PricesInput"

const PriceBox = () => {
  const dispatch = useDispatch()
  const max = useSelector((state) => {
    return state.filtres.max
  })
  const min = useSelector((state) => {
    return state.filtres.min
  })
  const currentMin = useSelector((state) => {
    return state.filtres.currentMin
  })
  const currentMax = useSelector((state) => {
    return state.filtres.currentMax
  })
  return (
    <div>
      <p className={styles.price}>Цена (руб.)</p>
      <div className={styles.slide}>
        <div className={styles.highlight}>
          <input
            onInput={(event) => {
              console.log(event.target.value)
              dispatch(changeValueMin(Number(event.target.value)))
            }}
            type="range"
            min={min}
            max={max}
            value={currentMin}
            step="1"
            id="lower"
          />
          <input
            onInput={(event) => {
              dispatch(changeValueMax(Number(event.target.value)))
            }}
            type="range"
            min={min}
            max={max}
            value={currentMax}
            step="1"
            id="upper"
          />
        </div>
      </div>
      <PricesInput />
    </div>
  )
}

export default PriceBox
