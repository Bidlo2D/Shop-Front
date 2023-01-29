import React, { memo } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { viewBusy } from "../../../../../../redux/reducers/content/catalog/assortment/filtersReducer"
// images
import unwrap from "./images/unwrap.png"

const ComboBox = memo((props) => {
  const [style, setStyle] = useState(props.styles.closeModal)
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const busy = useSelector((state) => {
    return state.filter.busy
  })
  useEffect(() => {
    if (busy && show) {
      setStyle(props.styles.modal)
    } else {
      if (show) {
        setShow(!show)
        setStyle(props.styles.closeModal)
      } else {
        return
      }
    }
  }, [busy, show, props])
  return (
    <form className={props.styles.comboBox}>
      <div
        onClick={() => {
          dispatch(viewBusy())
          setShow(!show)
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
