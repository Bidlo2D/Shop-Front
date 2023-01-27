import React from "react"
// styles
import styles from "./css/PriceBox.module.css"
// components
import InputNumber from "./input_number/InputNumber"
import InputRange from "./input_range/InputRange"

const PriceBox = (props) => {
  return (
    <div>
      <p className={styles.price}>Цена (руб.)</p>
      <InputRange index={props.index} />
      <InputNumber index={props.index} />
    </div>
  )
}

export default PriceBox
