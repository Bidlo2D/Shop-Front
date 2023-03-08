import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { comboboxClose } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// styles
import styles from "./css/CancelWindow.module.css"

const CancelWindow = () => {
  const dispatch = useDispatch()
  const busy = useSelector((state) => {
    return state.assortment.busyness.busy
  })

  return (
    <div className="сancelWindow">
      {busy && (
        <div
          onClick={() => {
            dispatch(comboboxClose())
          }}
          className={styles.modalCancel}
        />
      )}
    </div>
  )
}

export default CancelWindow
