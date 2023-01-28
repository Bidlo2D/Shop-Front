import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewBusy } from "../../../../../../redux/reducers/content/catalog/assortment/filtersReducer"
// styles
import styles from "./css/ModalWindow.module.css"

const ModalWindow = () => {
  const [style, setStyle] = useState(styles.modalCancelHidden)
  const dispatch = useDispatch()
  const busy = useSelector((state) => {
    return state.filter.busy
  })
  useEffect(() => {
    if (busy) {
      setStyle(styles.modalCancel)
    } else {
      setStyle(styles.modalCancelHidden)
    }
  }, [busy])
  return (
    <div
      onClick={() => {
        dispatch(viewBusy())
      }}
      className={style}
    />
  )
}

export default ModalWindow
