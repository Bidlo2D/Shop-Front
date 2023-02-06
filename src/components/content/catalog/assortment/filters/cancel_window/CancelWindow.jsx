import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeView } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// styles
import styles from "./css/CancelWindow.module.css"

const CancelWindow = () => {
  const [style, setStyle] = useState(styles.modalCancelHidden)
  const dispatch = useDispatch()
  const busy = useSelector((state) => {
    return state.assortment.busyness.busy
  })
  const indexF = useSelector((state) => {
    return state.assortment.busyness.indexF
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
        dispatch(changeView(indexF))
      }}
      className={style}
    />
  )
}

export default CancelWindow
