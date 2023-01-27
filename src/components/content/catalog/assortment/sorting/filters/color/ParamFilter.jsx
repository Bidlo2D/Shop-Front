import React from "react"
import { useDispatch } from "react-redux"
import styles from "./css/ParamFilter.module.css"

const ParamFilter = (props) => {
  const dispatch = useDispatch()
  const id = `${props.children}_${props.id}`
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
        {props.color == undefined ? (
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
}

export default ParamFilter
