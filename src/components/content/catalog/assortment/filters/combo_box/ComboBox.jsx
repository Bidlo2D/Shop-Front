import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
// images
import unwrap from "../../../../../../assets/img/unwrap.png"
import wrap from "../../../../../../assets/img/wrap.png"
// actions
import { comboboxOpen } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const ComboBox = memo((props) => {
  const dispatch = useDispatch()
  const show = useSelector((state) => {
    return state.assortment.filtersParams[props.indexF].show
  })

  return (
    <form className={props.styles.comboBox}>
      <div
        onClick={() => {
          dispatch(comboboxOpen(props.indexF))
        }}
        className={props.styles.wrapper}
      >
        <p className={props.styles.title}>{props.title}</p>
        {show ? <img src={wrap} alt="No" /> : <img src={unwrap} alt="No" />}
      </div>
      {show && <div className={props.styles.modal}>{props.children}</div>}
    </form>
  )
})

export default ComboBox
