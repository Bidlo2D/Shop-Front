import React from "react"
//import { useMemo } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewBusy } from "../../../../../../../redux/reducers/content/catalog/assortment/filtersReducer"
// styles
import styles from "./css/ComboBox.module.css"
// images
import unwrap from "./images/unwrap.png"

const ComboBox = (props) => {
  const [style, setStyle] = useState(styles.closeModal)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const busy = useSelector((state) => {
    return state.filter.busy
  })
  useEffect(() => {
    if (busy && show) {
      setStyle(styles.modal)
    } else {
      if (show) {
        setShow(!show)
        setStyle(styles.closeModal)
      } else {
        return
      }
    }
  }, [busy, show])
  return (
    <form className={styles.comboBox}>
      <div
        onClick={() => {
          dispatch(viewBusy()) // true
          setShow(!show) // true
        }}
        className={styles.wrapper}
      >
        <p className={styles.noselect}>{props.text}</p>
        <img src={unwrap} alt="No" />
      </div>
      <div className={style}>{props.children}</div>
    </form>
  )
}

export default ComboBox
