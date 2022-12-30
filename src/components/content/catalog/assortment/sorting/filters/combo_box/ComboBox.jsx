import React from "react"
import { useState } from "react"
// styles
import styles from "./css/ComboBox.module.css"
// images
import unwrap from "./images/unwrap.png"

const ComboBox = (props) => {
  const [style, setStyle] = useState(styles.closeModal)
  const [show, setShow] = useState(false)
  return (
    <div className={styles.comboBox}>
      <div
        onClick={() => {
          if (show) {
            setStyle(styles.closeModal)
          } else {
            setStyle(styles.modal)
          }
          setShow(!show)
        }}
        className={styles.wrapper}
      >
        <p>{props.text}</p>
        <img src={unwrap} alt="No" />
      </div>
      <div className={style}>{props.children}</div>
    </div>
  )
}

export default ComboBox
