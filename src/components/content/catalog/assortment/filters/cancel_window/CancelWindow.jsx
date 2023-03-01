import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeView } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// styles
import styles from "./css/CancelWindow.module.css"

const CancelWindow = () => {
  const dispatch = useDispatch()
  const busy = useSelector((state) => {
    return state.assortment.busyness.busy
  })

  const indexF = useSelector((state) => {
    return state.assortment.busyness.indexF
  })

  return (
    <div className="test">
      {!busy ? null : (
        <div
          onClick={() => {
            dispatch(changeView(indexF))
          }}
          className={styles.modalCancel}
        />
      )}
    </div>
  )
}

export default CancelWindow
