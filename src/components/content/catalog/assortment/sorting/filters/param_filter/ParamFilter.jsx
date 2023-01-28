import React, { memo } from "react"
//import { useDispatch } from "react-redux"
import styles from "./css/ParamFilter.module.css"

const ParamFilter = memo((props) => {
  //const dispatch = useDispatch()
  const isColor = (color) => {
    const TESTER = document.createElement("div")
    TESTER.style.color = color
    return TESTER.style.color ? true : false
  }
  const id = `${props.children}_${props.idf}${props.id}`
  return (
    <li className={styles.option}>
      <input
        onChange={() => {
          console.log("Change!")
        }}
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}>
        {props.color === undefined || !isColor(props.color) ? (
          <div></div>
        ) : (
          <div
            style={{
              height: "1em",
              width: "1em",
              backgroundColor: props.color,
              borderRadius: 4,
              marginRight: 15,
            }}
          />
        )}
        <div className={styles.noselect}>{props.children}</div>
      </label>
    </li>
  )
})

export default ParamFilter
