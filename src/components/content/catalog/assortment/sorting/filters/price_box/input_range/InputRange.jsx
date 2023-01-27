import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
// styles
import styles from "./css/InputRange.module.css"
// actions
import {
  changeValueMax,
  changeValueMin,
} from "./../../../../../../../../redux/reducers/content/catalog/assortment/filtersReducer"

const InputRange = (props) => {
  const dispatch = useDispatch()
  const max = useSelector((state) => {
    return state.filter.loadfilter.filters[props.index].params.max
  })
  const min = useSelector((state) => {
    return state.filter.loadfilter.filters[props.index].params.min
  })
  const currentMin = useSelector((state) => {
    return state.filter.loadfilter.filters[props.index].params.currentMin
  })
  const currentMax = useSelector((state) => {
    return state.filter.loadfilter.filters[props.index].params.currentMax
  })
  return (
    <div className={styles.slide}>
      <div className={styles.highlight} />
      <input
        onInput={(event) => {
          dispatch(
            changeValueMin({
              value: Number(event.target.value),
              index: props.index,
            })
          )
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
          dispatch(
            changeValueMax({
              value: Number(event.target.value),
              index: props.index,
            })
          )
        }}
        type="range"
        min={min}
        max={max}
        value={currentMax}
        step="1"
        id="upper"
      />
    </div>
  )
}

export default InputRange
