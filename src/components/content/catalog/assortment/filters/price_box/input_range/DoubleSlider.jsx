import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
// styles
import styles from "./css/DoubleSlider.module.css"
// actions
import {
  rangeChangeMax,
  rangeChangeMin,
} from "../../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const DoubleSlider = (props) => {
  const dispatch = useDispatch()
  const step = useSelector((state) => {
    return state.assortment.filtersParams[props.index].params.step
  })
  const max = useSelector((state) => {
    return state.assortment.filtersParams[props.index].params.max
  })
  const min = useSelector((state) => {
    return state.assortment.filtersParams[props.index].params.min
  })
  const currentMin = useSelector((state) => {
    return state.assortment.filtersParams[props.index].params.currentMin
  })
  const currentMax = useSelector((state) => {
    return state.assortment.filtersParams[props.index].params.currentMax
  })

  return (
    <div className={styles.slide}>
      <div className={styles.highlight} />
      <input
        onChange={(event) => {
          dispatch(
            rangeChangeMin({
              value: Number(event.target.value),
              index: props.index,
            })
          )
        }}
        type="range"
        min={min}
        max={max}
        value={currentMin}
        step={step}
        id="lower"
      />
      <input
        onChange={(event) => {
          dispatch(
            rangeChangeMax({
              value: Number(event.target.value),
              index: props.index,
            })
          )
        }}
        type="range"
        min={min}
        max={max}
        value={currentMax}
        step={step}
        id="upper"
      />
    </div>
  )
}

export default DoubleSlider
