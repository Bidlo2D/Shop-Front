import React, { memo } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
// images
import unwrap from "../../../../../../assets/img/unwrap.png"
import wrap from "../../../../../../assets/img/wrap.png"
// actions
import { popupOpenClose } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const Popup = memo((props) => {
  const dispatch = useDispatch()
  const show = useSelector((state) => {
    return state.assortment.filtersParams[props.indexS].show
  })
  return (
    <div className={props.styles.comboBox}>
      <div
        onClick={() => {
          dispatch(popupOpenClose(props.indexS))
        }}
        className={props.styles.wrapper}
      >
        <p className={props.styles.title}>{props.title}</p>
        {show ? <img src={wrap} alt="No" /> : <img src={unwrap} alt="No" />}
      </div>
      {show && <div className={props.styles.modal}>{props.children}</div>}
    </div>
  )
})

export default Popup
