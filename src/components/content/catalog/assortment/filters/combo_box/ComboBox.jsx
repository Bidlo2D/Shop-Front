import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import unwrap from "../../../../../../assets/img/unwrap.png"
import { changeView } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const ComboBox = memo((props) => {
  const show = useSelector((state) => {
    return state.assortment.filtersParams[props.indexF].show
  })
  const dispatch = useDispatch()

  return (
    <form className={props.styles.comboBox}>
      <div
        onClick={() => {
          dispatch(changeView(props.indexF))
        }}
        className={props.styles.wrapper}
      >
        <p className={props.styles.title}>{props.title}</p>
        <img src={unwrap} alt="No" />
      </div>
      {show && <div className={props.styles.modal}>{props.children}</div>}
    </form>
  )
})

export default ComboBox
