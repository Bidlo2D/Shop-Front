import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styles from "./css/ParamFilter.module.css"
import { paramChangeCheck } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const ParamFilter = (props) => {
  const id = `${props.children}_${props.indexF}${props.indexP}`
  const dispatch = useDispatch()
  const isColor = (color) => {
    const TESTER = document.createElement("div")
    TESTER.style.color = color
    return TESTER.style.color ? true : false
  }

  const checked = useSelector((state) => {
    return state.assortment.filtersParams[props.indexF].params[props.indexP]
      .check
  })

  const color = useSelector((state) => {
    return state.assortment.filtersParams[props.indexF].params.color
  })

  return (
    <li className={styles.option}>
      <input
        onChange={() => {
          dispatch(
            paramChangeCheck({ indexF: props.indexF, indexP: props.indexP })
          )
        }}
        checked={checked}
        type="checkbox"
        id={id}
      />
      <label htmlFor={id}>
        {color === undefined || !isColor(color) ? (
          <div></div>
        ) : (
          <div
            style={{
              height: "1em",
              width: "1em",
              backgroundColor: color,
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
