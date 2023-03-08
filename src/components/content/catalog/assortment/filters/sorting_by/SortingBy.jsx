import React from "react"
// styles
import styles from "./css/BoxSortingBy.module.css"
// types
import { groupSort } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// components
import ComboBox from "../combo_box/ComboBox"
import SortParam from "./sort_param/SortParam"
import { useSelector } from "react-redux"
import { groupFilter } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const SortingBy = () => {
  const indexF = useSelector((state) => {
    let index = state.assortment.filters.findIndex(
      (f) => f.group === groupFilter.SORT
    )
    return index
  })

  const currentGroup = useSelector((state) => {
    return state.assortment.filtersParams[indexF].params.sort.name
  })

  const getPropertes = () => {
    let mass = []
    let k = 0
    for (var grouping in groupSort) {
      mass.push(
        <SortParam
          indexF={indexF}
          img={groupSort[grouping].img}
          name={groupSort[grouping].name}
          grouping={grouping}
          key={k}
        />
      )
      k++
    }
    return mass
  }

  return (
    <ComboBox
      indexF={indexF}
      styles={styles}
      title={`Порядок: ${currentGroup}`}
    >
      <ul className={styles.collection}> {getPropertes()} </ul>
    </ComboBox>
  )
}

export default SortingBy
