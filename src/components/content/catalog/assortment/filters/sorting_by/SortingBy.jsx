import React from "react"
import { useSelector } from "react-redux"
// styles
import styles from "./css/BoxSortingBy.module.css"
// types
import { groupSort } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
import { groupFilter } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// components
import SortParam from "./sort_param/SortParam"
import Popup from "./../popup/Popup"

const SortingBy = () => {
  const indexS = useSelector((state) => {
    let index = state.assortment.filters.findIndex(
      (f) => f.group === groupFilter.SORT
    )
    return index
  })

  const currentGroup = useSelector((state) => {
    return state.assortment.filtersParams[indexS].params.sort.name
  })

  const getPropertes = () => {
    let mass = []
    let k = 0
    for (var grouping in groupSort) {
      mass.push(
        <SortParam
          indexS={indexS}
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
    <Popup indexS={indexS} styles={styles} title={`Порядок: ${currentGroup}`}>
      <ul className={styles.collection}>{getPropertes()}</ul>
    </Popup>
  )
}

export default SortingBy
