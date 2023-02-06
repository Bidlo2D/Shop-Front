import React, { memo } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
//import { changeView } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// images
import unwrap from "./images/unwrap.png"
import { changeView } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const ComboBox = memo((props) => {
  const [style, setStyle] = useState(props.styles.closeModal)
  const show = useSelector((state) => {
    return state.assortment.filters[props.indexF].show
  })
  const dispatch = useDispatch()
  useEffect(() => {
    if (show) {
      setStyle(props.styles.modal)
    } else {
      setStyle(props.styles.closeModal)
    }
  }, [show, props.styles.modal, props.styles.closeModal])

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
      <div className={style}>{props.children}</div>
    </form>
  )
})

export default ComboBox
