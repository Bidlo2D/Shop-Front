import React, { memo } from "react"
// styles
import styles from "./css/PriceBox.module.css"
// components
import SliderLabel from "./input_number/SliderLabel"
import DoubleSlider from "./input_range/DoubleSlider"

const PriceBox = memo(function (props) {
  return (
    <div>
      <p className={styles.price}>Цена (руб.)</p>
      <DoubleSlider index={props.index} />
      <SliderLabel index={props.index} />
    </div>
  )
})

export default PriceBox
