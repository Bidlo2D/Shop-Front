import React, { useState } from "react"
import styles from "./css/PricesInput.module.css"
import { useDispatch, useSelector } from "react-redux"
import {
  changeValueMax,
  changeValueMin,
} from "./../../../../../../../../redux/reducers/content/catalog/assortment/filtresReducer"
import { useEffect } from "react"

const PricesInput = () => {
  const dispatch = useDispatch()
  const currentMin = useSelector((state) => {
    return state.filtres.currentMin
  })
  const currentMax = useSelector((state) => {
    return state.filtres.currentMax
  })
  const [valueMin, setValueMin] = useState(currentMin)
  const [valueMax, setValueMax] = useState(currentMax)
  useEffect(() => {
    setValueMin(currentMin)
    setValueMax(currentMax)
  }, [currentMin, currentMax])
  return (
    <div className={styles.prices}>
      <div className={styles.wrapperPrices}>
        <span className={styles.spanPrice}>от </span>
        <input
          onChange={(event) => {
            const value = Number(event.target.value)
            console.log(value)
            if (value === 0) {
              setValueMin("")
            } else {
              setValueMin(value)
            }
          }}
          onBlur={(event) => {
            dispatch(changeValueMin(Number(event.target.value)))
            setValueMin(currentMin)
          }}
          className={styles.inputPrice}
          value={valueMin}
          type="number"
        />
      </div>
      <div className={styles.wrapperPrices}>
        <span className={styles.spanPrice}>до </span>
        <input
          onChange={(event) => {
            const value = Number(event.target.value)
            console.log(value)
            if (value === 0) {
              setValueMax("")
            } else {
              setValueMax(value)
            }
          }}
          onBlur={(event) => {
            dispatch(changeValueMax(Number(event.target.value)))
            setValueMax(currentMax)
          }}
          className={styles.inputPrice}
          type="number"
          value={valueMax}
        />
      </div>
    </div>
  )
}

export default PricesInput
