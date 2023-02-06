import React from "react"
// styles
import styles from "./css/SortList.module.css"
import stylesSearch from "./css/SearchBarCatalog.module.css"
import stylesSortingBy from "./css/BoxSortingBy.module.css"
// types
import { groupSort } from "../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"
// components
import ComboBox from "../combo_box/ComboBox"
import SearchBarCatalog from "./../../../search_bar/SearchBarCatalog"
import ParamList from "./../param_list/ParamList"
import SortingBy from "./../sorting_by/SortingBy"
import { useSelector } from "react-redux"
import { groupFilter } from "./../../../../../../redux/reducers/content/catalog/assortment/assortmentReducer"

const SortList = () => {
  const indexF = useSelector((state) => {
    let index = state.assortment.filters.findIndex(
      (f) => f.group === groupFilter.SORT
    )
    return index
  })
  const currentGroup = useSelector((state) => {
    return state.assortment.filters[indexF].params.sort.name
  })

  console.log(currentGroup)
  const getPropertes = () => {
    let mass = []
    let k = 0
    for (var grouping in groupSort) {
      mass.push(
        <SortingBy img={groupSort[grouping].img} grouping={grouping} key={k}>
          {groupSort[grouping].name}
        </SortingBy>
      )
      k++
    }
    return mass
  }
  return (
    <div className={styles.sortingByAndSearch}>
      <SearchBarCatalog styles={stylesSearch} />
      <ComboBox
        indexF={indexF}
        styles={stylesSortingBy}
        title={`Порядок: ${currentGroup}`}
      >
        <ParamList>{getPropertes()}</ParamList>
      </ComboBox>
    </div>
  )
}

export default SortList
