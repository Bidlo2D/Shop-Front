import React, { memo } from "react"
import styles from "./css/PriceBox.module.css"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { changeValueMin } from "../../../../../../../redux/reducers/content/catalog/assortment/filtresReducer"
import { changeValueMax } from "./../../../../../../../redux/reducers/content/catalog/assortment/filtresReducer"

const PriceBox = () => {
  const dispatch = useDispatch()
  const max = useSelector((state) => {
    return state.filtres.max
  })
  const min = useSelector((state) => {
    return state.filtres.min
  })
  const valueMin = useSelector((state) => {
    return state.filtres.valueMin
  })
  const valueMax = useSelector((state) => {
    return state.filtres.valueMax
  })
  return (
    <form>
      <p className={styles.price}>Цена (руб.)</p>
      <div className={styles.slide}>
        <input
          onInput={(event) => {
            dispatch(changeValueMin(event.target.value))
          }}
          type="range"
          min={min}
          max={max / 2}
          value={valueMin}
          step="1"
          id="lower"
        />
        <input
          onInput={(event) => {
            dispatch(changeValueMax(event.target.value))
          }}
          type="range"
          min={max / 2}
          max={max}
          value={valueMax}
          step="1"
          id="upper"
        />
      </div>
      <div className={styles.prices}>
        <div className={styles.wrapperPrices}>
          <span className={styles.spanPrice}>от </span>
          <input
            onChange={(event) => {
              dispatch(changeValueMin(event.target.value))
            }}
            className={styles.inputPrice}
            type="number"
            value={valueMin}
          />
        </div>
        <div className={styles.wrapperPrices}>
          <span className={styles.spanPrice}>до </span>
          <input
            onChange={(event) => {
              dispatch(changeValueMax(event.target.value))
            }}
            className={styles.inputPrice}
            type="number"
            value={valueMax}
          />
        </div>
      </div>
    </form>
  )
}

export default PriceBox
